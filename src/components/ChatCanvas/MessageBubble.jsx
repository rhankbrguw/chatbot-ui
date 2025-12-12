function MessageBubble({ message }) {
  const isBot = message.type === "bot";

  return (
    <div className={`flex gap-4 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-10 h-10 rounded-full bg-koopa-green flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-whitent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      <div
        className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-lg ${isBot ? "bg-black-lacquer text-beluga" : "bg-koopa-green text-whitent"
          }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <span className="text-xs opacity-60 mt-2 block">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {!isBot && (
        <div className="w-10 h-10 rounded-full bg-zinc-dust flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-beluga"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default MessageBubble;
