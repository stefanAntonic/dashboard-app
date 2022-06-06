 import Navigation from './contentComponents/Navigation'
 import ChartLineOne from './contentComponents/ChartLineOne'
 import ChartLineTwo from './contentComponents/ChartLineTwo'

function Content() {
  

  return (
    <div className="bg-[#FDFDFD] col-span-10 ">
      <Navigation />
      <ChartLineOne />
      <ChartLineTwo />
    </div>
  );
}
export default Content;
