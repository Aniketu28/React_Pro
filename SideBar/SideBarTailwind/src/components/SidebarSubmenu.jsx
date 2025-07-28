import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const SidebarSubmenu = ({ icon, text, items, expanded }) => {
  const [open, setOpen] = useState(false)

  // 👇 Auto-close submenu when sidebar is collapsed
  useEffect(() => {
    if (!expanded) setOpen(false)
  }, [expanded])

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-between cursor-pointer
          px-3 py-2 rounded-md hover:bg-indigo-50 text-gray-600
          transition-all
        `}
      >
        <div className="flex items-center">
          {icon}
          <span className={`ml-3 ${!expanded ? "hidden" : ""}`}>{text}</span>
        </div>
        {expanded && (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </div>

      {/* Subitems */}
      {open && expanded && (
        <ul className="pl-10 mt-1">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-1 text-sm rounded-md px-2 hover:bg-indigo-100 ${
                    isActive ? "text-indigo-700 font-semibold" : "text-gray-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SidebarSubmenu
