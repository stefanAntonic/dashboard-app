import { IoAnalyticsOutline, IoBagHandleOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbHierarchy2, TbLogout } from "react-icons/tb";

import useWindowDimensions from "../../utils/getWindowDimension";

function Sidebar() {
  const { width } = useWindowDimensions();

  if (width < 480) {
    return (
      <div>
        <div className="navbar bg-base-100 z-50 fixed top-0 left-0 right-0">
          <h1 className="flex-1 text-3xl text-[#F06021] font-serif">
            FloralSun
          </h1>
          <div className="navbar-end">
            <div className="dropdown dropdown-left">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="flex flex-row gap-2" href="/">
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
                  <a className="flex flex-row pt-32 px-16" href="/">
                    <TbLogout className="place-self-center" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hidden sm:block md:col-span-2 bg-zinc-100 lg:col-span-2 flex flex-col">
        
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
        <ul className="flex flex-col  items-start m-4 space-y-4 pt-8  2xl:pl-10 2xl:m-7 ">
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
            <a className="flex flex-row pt-64 xl:px-12 2xl:px-12" href="/">
              <TbLogout className="place-self-center" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
  
}
export default Sidebar;
