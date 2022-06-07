import { ChartType } from "../../utils/ChartType";
import CustomChart from "./Chart.js";
import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  stacked: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

export const data = {
  labels,
  datasets: [
    {
      label: "Data 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 401 })),
      backgroundColor: "rgb(94, 63, 190)",
    },
    {
      label: "Data 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 610 })),
      backgroundColor: "rgb(80,173,255)",
    },
    {
      label: "Data 3",
      data: labels.map(() => faker.datatype.number({ min: -10, max: 220 })),
      backgroundColor: "rgb(239,69,110)",
    },
  ],
};

function Barchart() {
  return <CustomChart type={ChartType.Bar} options={options} data={data} />;
}
export default Barchart;
