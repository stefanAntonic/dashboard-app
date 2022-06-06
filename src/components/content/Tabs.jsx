import { handleActiveText } from "../../utils/helpers";

function Tabs() {
  const handleClick = (e) => {
    handleActiveText(e);
  };

  return (
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
  );
}
export default Tabs;
