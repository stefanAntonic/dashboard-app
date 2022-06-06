import { IoAnalyticsOutline, IoBagHandleOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbHierarchy2, TbLogout } from "react-icons/tb";
import useWindowDimensions from "../../utils/getWindowDimension";

function Sidebar() {
  const { height, width } = useWindowDimensions();
  

  return (
    <div className="hidden sm:block md:col-span-2 bg-zinc-100 lg:col-span-2 flex flex-col flex flex-col">;
      <div className=" flex flex-col justify-start items-center ">
        <h1 className="m-5 text-3xl text-[#F06021] font-serif">FloralSun</h1>
        <div className="avatar">
          <div className="w-24 rounded-full ">
            <img
              src="https://api.lorem.space/image/face?hash=92310"
              alt="avatar"
            />
          </div>
        </div>
        <strong> Hi, Aleksandra</strong>
      </div>
      <ul className="flex flex-col justify-start m-7 pl-10 space-y-4 pt-8">
        <li>
          <a className="flex flex-row gap-2 active:text-[#F06021]" href="/">
            <IoAnalyticsOutline className="place-self-center" />
            Analytics
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-2" href="/">
            <IoBagHandleOutline className="place-self-center" />
            Goods
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-2" href="/">
            <FiTruck className="place-self-center" />
            Delivery
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-2" href="/">
            <MdOutlineReviews className="place-self-center" />
            Reviews
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-2" href="/">
            <HiOutlineUserCircle className="place-self-center" />
            Users
          </a>
        </li>
        <li>
          <a className="flex flex-row gap-2" href="/">
            <TbHierarchy2 className="place-self-center" />
            Warehouse&logistic
          </a>
        </li>
        <li>
          <a className="flex flex-row pt-64 px-16" href="/">
            <TbLogout className="place-self-center" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
