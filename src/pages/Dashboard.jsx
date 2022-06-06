import Content from "../components/content/Content";
import Sidebar from "../components/sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="grid h-screen lg:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Dashboard;
