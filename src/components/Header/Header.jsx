function Header({ onToggleSidebar }) {
  return (
    <header className="h-16 bg-dynamic-black border-b border-black-lacquer flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-beluga hover:bg-black-lacquer rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-xl font-semibold text-beluga">AI Assistant</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 text-zinc-dust hover:text-beluga hover:bg-black-lacquer rounded-lg transition-colors">
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
