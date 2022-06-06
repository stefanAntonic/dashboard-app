import Barchart from "../charts/Barchart";
import { handleActiveText } from "../../utils/helpers";

function OrdersBarChart() {
    const handleClick = (e) => {
        handleActiveText(e)
       };
  return (
    <div className="card col-span-2 bg-base-100 shadow-md">
          <div className="card-title">
            <h1 className="text-2xl text-left ml-4">Orders</h1>
          </div>
          <div>
            <a className="tab " id="chart2-bar1-price" onClick={handleClick}>
              Price($)
            </a>
            <a className="tab" onClick={handleClick} id="chart2-bar1-things">
              Things
            </a>
          </div>
          <div className="card-body">
            <Barchart />
          </div>
        </div>
  )
}
export default OrdersBarChart