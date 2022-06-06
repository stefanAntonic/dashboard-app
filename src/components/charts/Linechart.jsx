import { ChartType }  from '../../enums/ChartType';
import CustomChart from './Chart.js';
import { faker } from '@faker-js/faker'

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
    }
  },
};
 const labels = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "San"];
const data = {
  labels,
  datasets: [
    {
      label: "Mobile",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 401 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      yAxisID: "y",
    },
    {
      label: "Desktop",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 611 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
      yAxisID: "y",
    },
    {
      label: "Tablet",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 221 })),
      borderColor: "rgb(94, 63, 190)",
      backgroundColor: "rgb(94, 63, 190)",
      yAxisID: "y",
    },
  ],
};

function Linechart() {
  return <CustomChart type={ChartType.Line} options={options} data={data}/>;
}
export default Linechart;
