import Barchart from "../../charts/Barchart";

function ChartLineTwo() {

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
    <>
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
            <h1 className="text-2xl text-left ml-4">Users & Costumers</h1>
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
    </>
  )
}
export default ChartLineTwo