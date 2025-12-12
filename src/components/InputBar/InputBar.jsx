import { useState } from "react";

function InputBar({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dynamic-black via-dynamic-black to-transparent pt-6 pb-6">
      <div className="max-w-4xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="relative">
          <div className="bg-black-lacquer rounded-2xl shadow-2xl border border-zinc-dust/20 flex items-center gap-3 px-5 py-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-beluga placeholder-zinc-dust focus:outline-none text-sm"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              className="p-3 bg-koopa-green text-whitent rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Send message"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </form>

        <p className="text-xs text-zinc-dust text-center mt-3">
          Press Enter to send
        </p>
      </div>
    </div>
  );
}

export default InputBar;
