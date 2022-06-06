import MoneySelling from "./MoneySelling";
import Heading from "./Heading";
import Tabs from "./Tabs";
import DeliveryStats from "./DeliveryStats";
import OrdersBarChart from "./OrdersBarChart";
import UsersCostumersBarChart from "./UsersCostumersBarChart";

function Content() {
  return (
    <div className="bg-[#FDFDFD] col-span-10 ">
      <Heading />
      <Tabs />
      <MoneySelling />
      <div className=" flex flex-col justify-center md:grid grid-cols-5 lg:grid grid-cols-5 xl:grid grid-cols-5  gap-5 mt-16 mb-16 place-content-evenly  pl-8 pr-8 box-border">
        <DeliveryStats />
        <OrdersBarChart />
        <UsersCostumersBarChart />
      </div>
    </div>
  );
}
export default Content;
