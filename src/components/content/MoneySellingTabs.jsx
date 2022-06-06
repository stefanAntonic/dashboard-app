import { handleActiveText } from "../../utils/helpers";

function MoneySellingTabs() {
  const handleClick = (e) => {
    handleActiveText(e);
  };
  return (
    <div className=" ml-8 mt-12  flex justify-start w-64 ">
      <a className="tab mr-6" id="subtitle1-price" onClick={handleClick}>
        Price($)
      </a>
      <a className="tab" onClick={handleClick} id="subtitle1-things">
        Things
      </a>
    </div>
  );
}
export default MoneySellingTabs;
