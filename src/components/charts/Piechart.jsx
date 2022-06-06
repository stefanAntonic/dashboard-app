import { ChartType } from "../../enums/ChartType";
import CustomChart from "./Chart.js";
import { faker } from "@faker-js/faker";

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  maintainAspectRatio: false,
  stacked: false,
  plugins: {},
  scales: {},
};

const data = {
  labels: ["Mobile", "Desktop", "Tablet"],
  datasets: [
    {
      label: "",
      data: [
        faker.datatype.number({ min: 0, max: 401 }),
        faker.datatype.number({ min: 0, max: 611 }),
        faker.datatype.number({ min: 0, max: 221 })
      ],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(94, 63, 190)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(94, 63, 190)",
      ],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
  return <CustomChart type={ChartType.Pie} data={data} options={options} />;
}
export default Piechart;
