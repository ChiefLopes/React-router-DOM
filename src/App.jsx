import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import NavBar from "./Pages/NavBar";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("LOPES");

  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home userName={"King"} />} />
                      <Route path="/menu" element={<Menu userName={userName} setUserName={setUserName}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND 💢 </h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
