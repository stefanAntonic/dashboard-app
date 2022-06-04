import Content from "../components/content/Content";
import Sidebar from "../components/sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Dashboard;
