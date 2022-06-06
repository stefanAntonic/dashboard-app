import Barchart from "../charts/Barchart";
import { data } from "../../data/data";
import { useState } from "react";
import Linechart from "../charts/Linechart";
import Piechart from "../charts/Piechart";

function Content() {
  const [charData, setCharData] = useState({
    labels: data.map((data) => data.label),
    datasets: [
      {
        label: "Users stats",
        data: data.map((data) => data.users),
      },
    ],
  });

  const handleClick = (e) => {
    const el = document.getElementById(e.target.id);
    const elements = Array.from(document.getElementsByClassName("tab"));
    elements.forEach((e) => {
      if (e.id !== e) {
        e.classList.remove(
          "text-[#F06021]",
          "border-[#F06021]",
          "tab-bordered"
        );
      }
    });

    el.classList.add("text-[#F06021]", "border-[#F06021]", "tab-bordered");
  };

  return (
    <div className="bg-[#FDFDFD] col-span-10 ">
      {/* heading */}
      {/* Heading i time navar idu u jednu komponentu */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-3xl font-normal ml-8">Analytics</h1>
        </div>
        <div className="flex-none">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm rounded-full w-full max-w-xs mr-8"
          />
        </div>
      </div>
      {/* Heading ends here */}
      {/* Time navbar */}
      <div className="tabs flex justify-center ">
        <a id="today" className="tab font-bold " onClick={handleClick}>
          Today
        </a>
        <a id="week" className="tab font-bold" onClick={handleClick}>
          Week
        </a>
        <a id="month" className="tab font-bold " onClick={handleClick}>
          Month
        </a>
        <a id="3months" className="tab font-bold " onClick={handleClick}>
          3Months
        </a>
        <a id="6months" className="tab font-bold " onClick={handleClick}>
          6Months
        </a>
        <a id="1year" className="tab font-bold " onClick={handleClick}>
          1Year
        </a>
        <a id="2years" className="tab font-bold " onClick={handleClick}>
          2Years
        </a>
      </div>
      {/* Time navbar ends here */}
      {/* Dropdown select */}
      <div className="ml-8 mt-12 w-1/5">
        <h1 className="text-2xl">Money & Selling</h1>
        <div className="flex flex-row gap-3 pt-6">
          <div className="form-control w-full max-w-xs">
            <label className="label label-text font-bold">Region</label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label label-text font-bold">Goods category</label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
        </div>
      </div>
      {/* Dropdown ends here */}
      {/* Charts first line starts here */}
      <div className=" ml-8 mt-12  flex justify-start w-64 ">
        <a className="tab mr-6" id="subtitle1-price" onClick={handleClick}>
          Price($)
        </a>
        <a className="tab" onClick={handleClick} id="subtitle1-things">
          Things
        </a>
      </div>
      <div className=" grid grid-cols-4 gap-5 mt-2 place-content-evenly  pl-8 pr-8 h-60 box-border">
        <div className=" card bg-base-100  shadow-xl col-start-1 col-end-3 ">
          <Linechart />
        </div>
        <div className="card bg-base-100  shadow-xl ">
          <div className="card-body  place-self-center">
            <Piechart />
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl ">
          <div className="card-body pt-12 pl-12">
            <h2 className="font-normal">All selings:</h2>
            <h2 className="font-normal">Sale selings:</h2>
            <h2 className="font-normal">Site conversion:</h2>
            <h2 className="font-normal">Proceed/1costume:</h2>
            <h2 className="font-normal">Revenue/1costume:</h2>
          </div>
        </div>
      </div>
      {/* Charts first line ends here */}
      {/* Charts line two starts here */}
      <div className=" grid grid-cols-5 gap-5 mt-12 place-content-evenly  pl-8 pr-8 h-80 box-border">
        <div className="text-center card ">
          <div>
            <h1 className="text-2xl text-left ml-4">Delivery</h1>
            <a className="tab " id="chart2-stats-price" onClick={handleClick}>
              Price($)
            </a>
            <a className="tab" onClick={handleClick} id="chart2-stats-things">
              Things
            </a>
          </div>
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
        <div className="card col-span-2 bg-base-100 shadow-xl">
          <div>
            <h1 className="text-2xl text-left ml-4">Orders</h1>
            <a className="tab " id="chart2-bar1-price" onClick={handleClick}>
              Price($)
            </a>
            <a className="tab" onClick={handleClick} id="chart2-bar1-things">
              Things
            </a>
          </div>
          <div className="card-body place-self-center">
            <Barchart />
          </div>
        </div>
        <div className="card bg-base-100  shadow-xl  col-span-2">
          <div>
            <h1 className="text-2xl text-left ml-4">Orders</h1>
            <a className="tab " id="char2-bar2-price" onClick={handleClick}>
              Price($)
            </a>
            <a className="tab" onClick={handleClick} id="char2-bar2-things">
              Things
            </a>
          </div>
          <div className="card-body  place-self-center w-90">
            <Barchart />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
