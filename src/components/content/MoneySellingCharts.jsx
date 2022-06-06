import MoneySellingLineChart from "./MoneySellingLineChart";
import MoneySellingPieChart from "./MoneySellingPieChart";
import MoneySellingStatsCard from "./MoneySellingStatsCard";
import MoneySellingTabs from "./MoneySellingTabs";

function MoneySellingCharts() {
  return (
    <>
     <MoneySellingTabs />
    <div className=" flex flex-col justify-center md:grid grid-cols-4 lg:grid grid-cols-4 xl:grid grid-cols-4  gap-5 mt-2 place-content-evenly  pl-8 pr-8 box-border">
    <MoneySellingLineChart />
    <MoneySellingPieChart />
    <MoneySellingStatsCard />
  </div>

    </>
  )
}
export default MoneySellingCharts