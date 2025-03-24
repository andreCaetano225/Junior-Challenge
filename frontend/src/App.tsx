import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RingsView from "./pages/RingsView";
import { RingsForm } from "./pages/RingsForm";
import Homepage from "./pages/HomePage";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/view" element={<RingsView/>} />
        <Route path="/create" element={<RingsForm />} />
        <Route path="/edit/:id" element={<RingsForm />} />
      </Routes>
    </Router>
   
  )
}

export default App
