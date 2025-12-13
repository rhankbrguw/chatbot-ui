import { useRef, useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ChatCanvas from "./components/ChatCanvas/ChatCanvas";
import InputBar from "./components/InputBar/InputBar";
import { GoogleGenAI } from "@google/genai";

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! How can I assist you today?",
      timestamp: new Date(),
    },
  ]);

  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "New Chat", timestamp: new Date() },
    {
      id: 2,
      title: "Previous Conversation",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: 3,
      title: "Tech Support",
      timestamp: new Date(Date.now() - 172800000),
    },
  ]);

  const [activeChatId, setActiveChatId] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const genAI = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      });

      const basePrompt = `
You are a large language model assistant.

Purpose:
Provide accurate, helpful, and safe responses to user queries.

Behavioral Guidelines:
- Be polite, calm, and respectful at all times
- Prefer clarity and conciseness over verbosity
- Acknowledge uncertainty when information is incomplete
- Avoid hallucination; do not fabricate facts or sources
- Ask clarifying questions only when necessary

Safety & Ethics:
- Do not generate harmful, illegal, or unsafe content
- Refuse requests that violate ethical or safety boundaries
- Provide neutral, balanced information on sensitive topics
- Avoid persuasion, manipulation, or emotional dependency

Response Style:
- Structured and easy to read
- Use bullet points or steps when helpful
- Keep answers focused on the user’s intent
- Default to a professional, neutral tone

Transparency:
- Clearly state limitations when applicable
- Do not claim human experiences or emotions
- Do not imply consciousness or personal beliefs
`;

      const response = await genAI.models.generateContent({
        model: "gemini-flash-lite-latest",
        contents: basePrompt + content,
      });

      const text = response.text;

      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: "Sorry, I encountered an error connecting to the AI.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      timestamp: new Date(),
    };
    setChatHistory([newChat, ...chatHistory]);
    setActiveChatId(newChat.id);
    setMessages([
      {
        id: Date.now(),
        type: "bot",
        content: "Hello! This is a new chat. How can I help?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    console.log(`Switched to chat ID: ${chatId}`);
  };

  return (
    <div className="flex h-screen bg-whitent overflow-hidden">
      <Sidebar
        chatHistory={chatHistory}
        activeChatId={activeChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <Header
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        <div className="flex-1 overflow-hidden relative">
          <ChatCanvas messages={messages} />
          <InputBar onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
