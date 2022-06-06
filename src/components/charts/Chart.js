import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { ChartType } from "../../enums/ChartType";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CustomChart({ type, data, options }) {
  switch (type) {
    case ChartType.Bar:
      return <Bar data={data} options={options} />;
    case ChartType.Line:
      return <Line data={data} options={options} />;
    case ChartType.Pie:
      return <Pie data={data} options={options} />;

    default:
      break;
  }
}

export default CustomChart