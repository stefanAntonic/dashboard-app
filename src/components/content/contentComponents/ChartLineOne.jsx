import Piechart from "../../charts/Piechart";
import Linechart from "../../charts/Linechart";

function ChartLineOne() {
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
      {/* Charts first line starts here */}
      <div className=" ml-8 mt-12  flex justify-start w-64 ">
        <a className="tab mr-6" id="subtitle1-price" onClick={handleClick}>
          Price($)
        </a>
        <a className="tab" onClick={handleClick} id="subtitle1-things">
          Things
        </a>
      </div>
      <div className=" grid grid-cols-4  gap-5 mt-2 place-content-evenly  pl-8 pr-8 box-border">
        <div className=" card bg-base-100  shadow-md col-start-1 col-end-3 ">
          <div className="card-body ">
            <Linechart />
          </div>
        </div>

        <div className="card bg-base-100  shadow-md ">
          <div className="card-body  ">
            <Piechart />
          </div>
        </div>
        <div className="card  bg-base-100 shadow-md">
          <div className="card-body pt-12 pl-12">
            <h2 className="font-normal">All selings:</h2>
            <h2 className="font-normal">Sale selings:</h2>
            <h2 className="font-normal">Site conversion:</h2>
            <h2 className="font-normal">Proceed/1costume:</h2>
            <h2 className="font-normal">Revenue/1costume:</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChartLineOne;
