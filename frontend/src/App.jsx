import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favourite from "./pages/Favourite";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Sidebar setMenuOpen={setMenuOpen} />
          <div className="frame">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favourite" element={<Favourite />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
