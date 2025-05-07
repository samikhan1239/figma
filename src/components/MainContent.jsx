import Button from "./Button";

/**
 * Main content with card layout.
 * @param {Object} props
 * @param {Function} props.toggleThirdPane - Toggles third pane
 * @param {string|null} props.error - Error message
 * @returns {JSX.Element}
 */
function MainContent({ toggleThirdPane, error }) {
  return (
    <main className="flex-1 p-6 md:p-8 overflow-auto">
      <h2 className="text-2xl font-semibold text-textDark mb-4">Welcome</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-textDark">
              Card {i + 1}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Sample content for dashboard card.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button onClick={toggleThirdPane} label="Open Details Pane" />
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>
    </main>
  );
}

export default MainContent;
