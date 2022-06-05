import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Mobile", "Desktop", "Tablet"],
  datasets: [
    {
      label: "# of Votes",
      data: [400, 610, 201],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(94, 63, 190)",
      ],
      borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(94, 63, 190)"],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
  return <Pie data={data} options={{responsive: false}} />;
}
export default Piechart;
