import { FaBars, FaTimes } from "react-icons/fa"; // Use react-icons

/**
 * Modern header with glassmorphism effect.
 * @param {Object} props
 * @param {Function} props.toggleSidebar - Toggles sidebar visibility
 * @param {boolean} props.isSidebarOpen - Sidebar state
 * @returns {JSX.Element}
 */
function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <h1 className="text-2xl font-semibold text-textDark">Dashboard</h1>
        <button
          className="md:hidden p-2 rounded-full hover:bg-secondary"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <FaTimes className="w-6 h-6 text-textDark" />
          ) : (
            <FaBars className="w-6 h-6 text-textDark" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
