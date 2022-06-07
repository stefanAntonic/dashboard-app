import { ChartType } from "../../utils/ChartType";
import CustomChart from "./Chart.js";   
import { lineChartThingsData, lineChartPriceData } from "../../data/data";

function Linechart({ handleData }) {

  
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    maintainAspectRatio: false,
    stacked: false,
    plugins: {},
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  return (
    <CustomChart
      type={ChartType.Line}
      options={options}
      data={handleData === 'things' ? lineChartThingsData : lineChartPriceData}
    />
  );
}
export default Linechart;
