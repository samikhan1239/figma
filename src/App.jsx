import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ThirdPane from "./components/ThirdPane";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/ThemeContext";

/**
 * Root component with routing, theme, and modern dashboard layout.
 * @returns {JSX.Element} - Rendered dashboard
 */
function App() {
  const [isThirdPaneOpen, setIsThirdPaneOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState(null);

  const toggleThirdPane = async () => {
    try {
      await mockApiCall();
      setIsThirdPaneOpen((prev) => !prev);
      setError(null);
    } catch (err) {
      setError("Failed to load third pane content");
      console.error("API error:", err);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen font-inter">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route
                path="/"
                element={
                  <MainContent
                    toggleThirdPane={toggleThirdPane}
                    error={error}
                  />
                }
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <ThirdPane
              isOpen={isThirdPaneOpen}
              toggleThirdPane={toggleThirdPane}
            />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

/**
 * Simulates an API call with a delay.
 * @returns {Promise<void>}
 */
async function mockApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) reject(new Error("API failure"));
      else resolve();
    }, 500);
  });
}

export default App;
