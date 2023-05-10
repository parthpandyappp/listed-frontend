import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
  },
};

const data = {
  labels: ["Super hoodies", "Custom Short Pants", "Basic Tees"],
  datasets: [
    {
      label: "% share in top products list",
      data: [14, 31, 55],
      backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      borderColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      borderWidth: 1,
    },
  ],
};

export const ProductPieChart = () => {
  return (
    <div className="w-1/2 h-1/2">
      <Pie data={data} options={options} />
    </div>
  );
};
