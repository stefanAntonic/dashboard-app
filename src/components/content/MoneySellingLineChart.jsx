import Linechart from "../charts/Linechart";

function MoneySellingLineChart({ handleData }) {
  return (
    <div className=" card bg-base-100  shadow-md col-start-1 col-end-3 ">
      <div className="card-body ">
        <Linechart handleData={handleData} />
      </div>
    </div>
  );
}
export default MoneySellingLineChart;
