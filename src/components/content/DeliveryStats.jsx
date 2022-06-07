import { handleActiveText } from "../../utils/helpers";

function DeliveryStats({ data: { data } }) {
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
      {data.map((element, i) => {
        return (
          <div className="stat" key={i}>
            <div className="stat-title">{element.title}</div>
            <div className="stat-value">{element.value}</div>
            <div className="stat-desc">{element.description}</div>
          </div>
        );
      })}
    </div>
  );
}
export default DeliveryStats;
