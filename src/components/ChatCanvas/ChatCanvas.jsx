import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatCanvas({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="absolute inset-0 overflow-y-auto pb-24">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
            <div className="w-16 h-16 rounded-full bg-black-lacquer flex items-center justify-center">
              <svg
                className="w-8 h-8 text-koopa-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-beluga">
              Start a Conversation
            </h2>
            <p className="text-zinc-dust max-w-md">
              Ask me anything. I'm here to help with your questions and tasks.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatCanvas;
