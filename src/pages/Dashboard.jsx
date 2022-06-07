import Content from "../components/content/Content";
import Sidebar from "../components/sidebar/Sidebar";


function Dashboard() {
  const data = [
    {
      title: 'Delivery',
      value: '45%',
      description: '3 days'
    },
    {
      title: 'Posts',
      value: '38%',
      description: '7 days'
    },
    {
      title: 'Pickup',
      value: '17%',
      description: '14 days'
    },
  ]

  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
      <Sidebar />
      <Content  data={data}/>
    </div>
  );
}
export default Dashboard;
