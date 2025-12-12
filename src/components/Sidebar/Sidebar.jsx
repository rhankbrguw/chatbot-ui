import ChatHistoryItem from "./ChatHistoryItem";
import SidebarHeader from "./SidebarHeader";

function Sidebar({
  chatHistory,
  activeChatId,
  onSelectChat,
  onNewChat,
  isOpen,
}) {
  return (
    <aside
      className={`bg-dynamic-black border-r border-black-lacquer transition-all duration-300 flex flex-col ${isOpen ? "w-[280px]" : "w-0"
        } overflow-hidden`}
    >
      <SidebarHeader onNewChat={onNewChat} />

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-2">
          {chatHistory.map((chat) => (
            <ChatHistoryItem
              key={chat.id}
              chat={chat}
              isActive={chat.id === activeChatId}
              onSelect={() => onSelectChat(chat.id)}
            />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-black-lacquer">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-beluga hover:bg-black-lacquer rounded-lg transition-colors">
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
