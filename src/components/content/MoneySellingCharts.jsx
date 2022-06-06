import MoneySellingLineChart from "./MoneySellingLineChart";
import MoneySellingPieChart from "./MoneySellingPieChart";
import MoneySellingStatsCard from "./MoneySellingStatsCard";
import MoneySellingTabs from "./MoneySellingTabs";

function MoneySellingCharts() {
  return (
    <>
     <MoneySellingTabs />
    <div className=" grid grid-cols-4  gap-5 mt-2 place-content-evenly  pl-8 pr-8 box-border">
    <MoneySellingLineChart />
    <MoneySellingPieChart />
    <MoneySellingStatsCard />
  </div>

    </>
  )
}
export default MoneySellingCharts