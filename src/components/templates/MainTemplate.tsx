import "../../app.css";
import NavBar from "../molecules/NavBar";
import CustomButton from "../atoms/CustomButton";
import { Route, Routes } from "react-router-dom";

export default function MainTemplate() {
  return (
    <div className="bg-Col2 text-Col1 text-5xl">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/Art" element={<Art />} /> */}
      </Routes>
      <CustomButton onClick={() => console.log("Kliks")}>Tekstiä</CustomButton>
    </div>
  );
}
