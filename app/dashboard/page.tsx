// pages/dashboard.tsx

"use client";

import DonutChart from "../components/DonutChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const donutData = {
    labels: ["High", "Low", "Normal"],
    datasets: [
      {
        data: [3, 1, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const barData = {
    labels: [
      "(blank)",
      "Delivery",
      "Maintenance",
      "Products",
      "Query",
      "Service",
    ],
    datasets: [
      {
        label: "Cases",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        hoverBackgroundColor: "#36A2EB",
        hoverBorderColor: "#36A2EB",
        data: [1, 1, 3, 2, 1, 1],
      },
    ],
  };

  const pieData = {
    labels: ["(blank)", "Twitter", "Web"],
    datasets: [
      {
        data: [1, 3, 5],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                href="/dashboard"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <FaHome size={20} /> <span className="ml-2">Home</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/profile"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <FaUser size={20} /> <span className="ml-2">Profile</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/settings"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <FaCog size={20} /> <span className="ml-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <FaSignOutAlt size={20} /> <span className="ml-2">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Charts Container */}
        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-hidden">
          <Card title="Cases by Priority">
            <DonutChart data={donutData} />
          </Card>
          <Card title="Cases By Product">
            <div className="text-center">
              <p>(blank) (9)</p>
            </div>
          </Card>
          <Card title="Case Mix by Incident Type">
            <BarChart data={barData} />
          </Card>
          <Card title="Case Mix (By Origin)">
            <PieChart data={pieData} />
          </Card>
          <Card title="Case Resolution Trend">
            <div className="text-center">
              <p>No data available.</p>
            </div>
          </Card>
        </main>

        {/* Other Queues and Views */}
        <aside className="w-64 bg-gray-100 p-4 border-l border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Other Queues and Views</h2>
          <div className="flex flex-col gap-4">
            {/* Example content */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Queue 1</h3>
              <p>Details about queue 1.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Queue 2</h3>
              <p>Details about queue 2.</p>
            </div>
            {/* Add more queues/views as needed */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
