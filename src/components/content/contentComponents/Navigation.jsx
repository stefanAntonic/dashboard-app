function Navigation() {

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
       {/* heading */}
    {/* Heading i time navar idu u jednu komponentu */}
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h1 className="text-3xl font-normal ml-8">Analytics</h1>
      </div>
      <div className="hidden sm:block flex-none">
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
      </>
   
  )
}
export default Navigation