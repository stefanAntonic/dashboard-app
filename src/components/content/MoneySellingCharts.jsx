import { useState } from "react";
import MoneySellingLineChart from "./MoneySellingLineChart";
import MoneySellingPieChart from "./MoneySellingPieChart";
import MoneySellingStatsCard from "./MoneySellingStatsCard";
import MoneySellingTabs from "./MoneySellingTabs";

function MoneySellingCharts() {

  const [data, setData] = useState('')

  const handleTabs = (arg) => {
     setData(arg)
  }

  return (
    <>
     <MoneySellingTabs handleTabs={handleTabs} />
    <div className=" flex flex-col justify-center md:grid grid-cols-4 lg:grid grid-cols-4 xl:grid grid-cols-4  gap-5 mt-2 place-content-evenly  pl-8 pr-8 box-border">
    <MoneySellingLineChart handleData={data} />
    <MoneySellingPieChart handleData={data} />
    <MoneySellingStatsCard />
  </div>

    </>
  )
}
export default MoneySellingCharts