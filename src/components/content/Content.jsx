function Content() {
  const handleClick = (e) => {
    const el = document.getElementById(e.target.id);
    el.classList.add("text-[#F06021]", "border-[#F06021]", "tab-bordered");
  };
  return (
    <div className="bg-[#FDFDFD] col-span-10 ">
      {/* heading */}
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
      <div className="tabs flex justify-center">
        <a className="tab font-bold " onClick={handleClick} id="today">
          Today
        </a>
        <a className="tab font-bold   tab-active: tab-bordered border-[#F06021] text-[#F06021]">
          Week
        </a>
        <a className="tab font-bold " onClick={handleClick} id="month">
          Month
        </a>
        <a className="tab font-bold ">3Months</a>
        <a className="tab font-bold ">6Months</a>
        <a className="tab font-bold ">1Year</a>
        <a className="tab font-bold ">2Years</a>
      </div>

      <div className="ml-8 mt-12">
        <h1 className="text-2xl">Money & Selling</h1>
        <div className="flex flex-row gap-3 pt-6">
          <div class="form-control w-full max-w-xs">
            <label className="label label-text font-bold">Region</label>
            <select class="select select-bordered">
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
          <div class="form-control w-full max-w-xs">
            <label className="label label-text font-bold">Goods category</label>
            <select class="select select-bordered">
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
    </div>
  );
}
export default Content;
