// components/DonutChart.tsx

"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DonutChart;
