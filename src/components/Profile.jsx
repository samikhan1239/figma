import { useState } from "react";

/**
 * Profile page with user details form.
 * @returns {JSX.Element}
 */
function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <main className="flex-1 p-6 md:p-8 overflow-auto bg-bgLight-light dark:bg-bgLight-dark">
      <h2 className="text-2xl font-semibold text-textDark-light dark:text-textDark-dark mb-4">
        Profile
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-textDark-light dark:text-textDark-dark mb-4">
          User Details
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-textDark-light dark:text-textDark-dark mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-light dark:focus:ring-primary-dark focus:border-primary-light dark:focus:border-primary-dark bg-white dark:bg-gray-700 text-textDark-light dark:text-textDark-dark"
            />
          </div>
          <div>
            <label className="block text-sm text-textDark-light dark:text-textDark-dark mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-light dark:focus:ring-primary-dark focus:border-primary-light dark:focus:border-primary-dark bg-white dark:bg-gray-700 text-textDark-light dark:text-textDark-dark"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-primary-light dark:bg-gradient-primary-dark text-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </main>
  );
}

export default Profile;
