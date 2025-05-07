/**
 * Modern gradient button with hover effect.
 * @param {Object} props
 * @param {Function} props.onClick - Click handler
 * @param {string} props.label - Button text
 * @returns {JSX.Element}
 */
function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
    >
      {label}
    </button>
  );
}

export default Button;
