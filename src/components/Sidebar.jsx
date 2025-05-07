import { FaHome, FaUser, FaCog, FaTimes } from "react-icons/fa"; // Use react-icons

/**
 * Modern sidebar with icons and mobile support.
 * @param {Object} props
 * @param {boolean} props.isOpen - Sidebar visibility
 * @param {Function} props.toggleSidebar - Toggles sidebar
 * @returns {JSX.Element}
 */
function Sidebar({ isOpen, toggleSidebar }) {
  const navItems = [
    { name: "Home", icon: FaHome, href: "#" },
    { name: "Profile", icon: FaUser, href: "#" },
    { name: "Settings", icon: FaCog, href: "#" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-60 bg-navy text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:w-60 md:shadow-md`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-700"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-2 rounded-lg hover:bg-secondary hover:text-textDark transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
