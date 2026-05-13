import "@/App.css"
import NavBar from "../organisms/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Art from "../pages/Art";
import ErrorPage from "../pages/ErrorPage"

export default function MainTemplate() {
  return (
    <div className="bg-Col2 text-Col1 text-5xl min-h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/Art" element={<Art />} />
        <Route path="*" element ={<ErrorPage/>} />
      </Routes>
    </div>
  );
}
