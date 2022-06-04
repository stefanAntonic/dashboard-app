import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Construction from "./pages/Construction.jsx";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/construction" element={<Construction />} />
        </Routes>
        
        </Router> 
      
    
    </div>
  );
}

export default App;
