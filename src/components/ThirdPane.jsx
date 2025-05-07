import { FaTimes } from "react-icons/fa";

/**
 * Modern third pane with slide-in animation.
 * @param {Object} props
 * @param {boolean} props.isOpen - Pane visibility
 * @param {Function} props.toggleThirdPane - Toggles pane
 * @returns {JSX.Element}
 */
function ThirdPane({ isOpen, toggleThirdPane }) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-20 w-full md:w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:shadow-xl`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-textDark-light dark:text-textDark-dark">
            Details Pane
          </h2>
          <button
            onClick={toggleThirdPane}
            className="p-2 rounded-full hover:bg-secondary-light dark:hover:bg-secondary-dark"
            aria-label="Close pane"
          >
            <FaTimes className="w-5 h-5 text-textDark-light dark:text-textDark-dark" />
          </button>
        </div>
        <p className="text-textDark-light dark:text-textDark-dark">
          Additional details or settings can be displayed here.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-sm text-gray-600 dark:text-gray-400">Item 1</li>
          <li className="text-sm text-gray-600 dark:text-gray-400">Item 2</li>
          <li className="text-sm text-gray-600 dark:text-gray-400">Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default ThirdPane;
