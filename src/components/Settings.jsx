import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Settings page with theme and notification options.
 * @returns {JSX.Element}
 */
function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className="flex-1 p-6 md:p-8 overflow-auto bg-bgLight-light dark:bg-bgLight-dark">
      <h2 className="text-2xl font-semibold text-textDark-light dark:text-textDark-dark mb-4">
        Settings
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-textDark-light dark:text-textDark-dark mb-4">
          Preferences
        </h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="text-sm text-textDark-light dark:text-textDark-dark">
                Enable dark mode
              </span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark"
                defaultChecked
              />
              <span className="text-sm text-textDark-light dark:text-textDark-dark">
                Receive email notifications
              </span>
            </label>
          </div>
        </div>
        <button
          className="mt-6 px-6 py-2 bg-gradient-primary-light dark:bg-gradient-primary-dark text-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
          onClick={() => alert("Settings saved!")}
        >
          Save Settings
        </button>
      </div>
    </main>
  );
}

export default Settings;
