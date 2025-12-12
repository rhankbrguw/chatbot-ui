function SidebarHeader({ onNewChat }) {
  return (
    <div className="p-4 border-b border-black-lacquer">
      <button
        onClick={onNewChat}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-koopa-green text-whitent rounded-lg hover:bg-opacity-90 transition-all font-medium shadow-lg"
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
            d="M12 4v16m8-8H4"
          />
        </svg>
        New Chat
      </button>
    </div>
  );
}

export default SidebarHeader;
