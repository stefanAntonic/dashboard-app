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
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  maintainAspectRatio: false ,
  stacked: false,
  plugins: {
   
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const labels = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "San"];
const data = {
  labels,
  datasets: [
    {
      label: "Mobile",
      data: labels.map(() => faker.datatype.number({ min: -10, max: 401 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      yAxisID: "y",
    },
    {
      label: "Desktop",
      data: labels.map(() => faker.datatype.number({ min: -10, max: 610 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
      yAxisID: "y",
    },
    {
      label: "Tablet",
      data: labels.map(() => faker.datatype.number({ min: -10, max: 220 })),
      borderColor: "rgb(94, 63, 190)",
      backgroundColor: "rgb(94, 63, 190)",
      yAxisID: "y",
    },
  ],
};

function Linechart() {
  return <Line options={options} data={data}  height={'100%'}/>;
}
export default Linechart;
