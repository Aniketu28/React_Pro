// src/components/Sidebar.jsx
import { ChevronFirst, ChevronLast } from "lucide-react"
import SidebarItem from "./SidebarItem"

const Sidebar = ({ expanded, toggleSidebar, children }) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Top section */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar items */}
        <ul className="flex-1 overflow-y-auto overflow-x-hidden px-3">{children}</ul>

        {/* User Profile */}
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
