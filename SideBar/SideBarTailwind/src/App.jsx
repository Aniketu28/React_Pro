// src/App.jsx
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import SidebarItem from "./components/SidebarItem"
import SidebarSubmenu from "./components/SidebarSubmenu"
import { Home, Bell, Settings, User } from "lucide-react"

// Pages
import Dashboard from "./pages/Dashboard"
import Notifications from "./pages/Notifications"
import SettingsPage from "./pages/SettingsPage"
import Profile from "./pages/Profile"

function App() {
  const [expanded, setExpanded] = useState(true)

  const toggleSidebar = () => setExpanded((prev) => !prev)

  return (
    <Router>
      <div className="flex">
        <Sidebar expanded={expanded} toggleSidebar={toggleSidebar}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <SidebarItem icon={<Home size={20} />} text="Dashboard" expanded={expanded} active={isActive} />
            )}
          </NavLink>

          <NavLink to="/notifications">
            {({ isActive }) => (
              <SidebarItem icon={<Bell size={20} />} text="Notifications" expanded={expanded} alert active={isActive} />
            )}
          </NavLink>

          <SidebarSubmenu
            icon={<Settings size={20} />}
            text="Settings"
            expanded={expanded}
            items={[
              { label: "App Settings", path: "/settings" },
              { label: "Profile", path: "/profile" },
            ]}
          />
        </Sidebar>

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
