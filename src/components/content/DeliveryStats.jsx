import { handleActiveText } from "../../utils/helpers";

function DeliveryStats() {
  const handleClick = (e) => {
    handleActiveText(e);
  };
  return (
    <div className="text-center card shadow-md">
      <div className="card-title">
        <h1 className="text-2xl text-left ml-4">Delivery</h1>
      </div>
      <div className="text-left md:text-center lg:text-center">
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
  );
}
export default DeliveryStats;
