import {BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/Movie_Site" element={<Home/>}/>
    </Routes>
  </Router>;
}

export default App;
