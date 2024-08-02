import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaSpotify,
} from "react-icons/fa";
import Calendar from "react-calendar"; // Example calendar library
import "react-calendar/dist/Calendar.css"; // Import default styles

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard"
              className="hover:bg-gray-800 flex items-center p-2 rounded"
            >
              <FaHome size={20} /> Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/dashboard/profile"
              className="hover:bg-gray-800 flex items-center p-2 rounded"
            >
              <FaUser size={20} /> Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/dashboard/settings"
              className="hover:bg-gray-800 flex items-center p-2 rounded"
            >
              <FaCog size={20} /> Settings
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:bg-gray-800 flex items-center p-2 rounded"
            >
              <FaSignOutAlt size={20} /> Logout
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <Link
            href="/notifications"
            className="hover:bg-gray-800 flex items-center p-2 rounded"
          >
            <FaBell size={20} /> Notifications
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Welcome, User!</h1>
          <div className="flex items-center space-x-4">
            <Link href="/profile">
              <img
                src="/profile-pic.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
            </Link>
            <FaBell size={24} />
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row h-full gap-4">
          {/* Upper Left Quadrant */}
          <section className="bg-white p-4 rounded-lg shadow-md flex-1 lg:w-1/4 h-1/2 lg:h-1/2 flex items-center justify-center">
            <div className="w-full max-w-xs h-64">
              <h2 className="text-xl font-semibold mb-4">Calendar</h2>
              <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Calendar className="w-full h-full" />
                </div>
              </div>
            </div>
          </section>

          {/* Upper Right Quadrant */}
          <section className="bg-white p-4 rounded-lg shadow-md flex-1 lg:w-2/4 h-1/2 lg:h-1/2 flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-4">Graphs</h2>
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-gray-200 h-1/2 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Graph Placeholder 1</span>
              </div>
              <div className="bg-gray-200 h-1/2 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Graph Placeholder 2</span>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col lg:flex-row h-full gap-4 mt-4">
          {/* Lower Left Quadrant */}
          <section className="bg-white p-4 rounded-lg shadow-md flex-1 lg:w-1/4 overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">Spotify</h2>
            <div className="bg-gray-200 h-full flex flex-col items-center justify-center rounded-lg p-4">
              <FaSpotify size={40} />
              <p className="text-gray-600">Spotify Player Placeholder</p>
            </div>
          </section>

          {/* Lower Right Quadrant */}
          <section className="bg-white p-4 rounded-lg shadow-md flex-1 lg:w-2/4 overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">Charts</h2>
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-gray-200 h-1/2 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Chart Placeholder 1</span>
              </div>
              <div className="bg-gray-200 h-1/2 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Chart Placeholder 2</span>
              </div>
            </div>
          </section>

          {/* Lower Right Quadrant for Other Content */}
          <section className="bg-white p-4 rounded-lg shadow-md flex-1 lg:w-1/4 overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">Other Content</h2>
            <p className="mb-4">
              Here is some other content for the dashboard.
            </p>
            <ul className="list-disc pl-5">
              <li>Item 1: Lorem ipsum dolor sit amet.</li>
              <li>Item 2: Consectetur adipiscing elit.</li>
              <li>
                Item 3: Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
