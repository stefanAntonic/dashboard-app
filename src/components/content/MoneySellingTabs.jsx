import { handleActiveText } from "../../utils/helpers";

function MoneySellingTabs({ handleTabs }) {
  const handleClick = (e) => {
    handleActiveText(e);
    handleTabs(e.target.name);
  };
  return (
    <div className=" ml-8 mt-12  flex justify-start w-64 ">
      <a className="tab mr-6" id="subtitle1-price" onClick={handleClick} name='price'>
        Price($)
      </a>
      <a
        className="tab"
        onClick={handleClick}
        id="subtitle1-things"
        name="things"
      >
        Things
      </a>
    </div>
  );
}
export default MoneySellingTabs;
