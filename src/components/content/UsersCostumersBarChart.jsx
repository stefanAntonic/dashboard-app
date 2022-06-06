import Barchart from "../charts/Barchart";
import { handleActiveText } from "../../utils/helpers";

function UsersCostumersBarChart() {
    const handleClick = (e) => {
        handleActiveText(e)
       };
     
  return (
    <div className="card bg-base-100  shadow-md  col-span-2">
    <div className="card-title">
      <h1 className="text-2xl text-left ml-4">Users & Costumers</h1>
    </div>
    <div>
      <a className="tab " id="char2-bar2-price" onClick={handleClick}>
        Price($)
      </a>
      <a className="tab" onClick={handleClick} id="char2-bar2-things">
        Things
      </a>
    </div>
    <div className="card-body">
      <Barchart />
    </div>
  </div>
  )
}
export default UsersCostumersBarChart