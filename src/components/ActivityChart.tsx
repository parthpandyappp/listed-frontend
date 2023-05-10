import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 500,
      ticks: {
        stepSize: 100,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [100, 350, 50, 250],
      borderColor: "#9BDD7C",
      backgroundColor: "#9BDD7C",
      tension: 0.4,
    },
    {
      label: "User",
      data: [200, 300, 150, 200],
      borderColor: "#E9A0A0",
      backgroundColor: "#E9A0A0",
      tension: 0.4,
    },
  ],
};

const ActivityChart = () => {
  return (
    <div className="w-full h-4/5">
      <Line options={options} data={data} />
    </div>
  );
};

export { ActivityChart };
