import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ChatCanvas from "./components/ChatCanvas/ChatCanvas";
import InputBar from "./components/InputBar/InputBar";

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

  const handleSendMessage = (content) => {
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        content:
          "This is a simulated response. In production, this would connect to your AI backend.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleNewChat = () => {
    const newChat = {
      id: chatHistory.length + 1,
      title: "New Chat",
      timestamp: new Date(),
    };
    setChatHistory([newChat, ...chatHistory]);
    setActiveChatId(newChat.id);
    setMessages([]);
  };

  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    // In production, load messages for selected chat
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
