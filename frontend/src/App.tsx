import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RingsView from "./pages/RingsView";
import { RingsForm } from "./pages/RingsForm";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/view" element={<RingsView/>} />
        <Route path="/create" element={<RingsForm />} />
        <Route path="/edit/:id" element={<RingsForm />} />
      </Routes>
    </Router>
   
  )
}

export default App
