import "../../App.css";
import { NavLink } from "react-router-dom";
import CustomButton from "../atoms/CustomButton";

export default function NavBar() {
  return (
    <div className="flex bg-Col2 text-Col1 justify-center pt-6">
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <NavLink to="/">
              <CustomButton>Homepage</CustomButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">
              {" "}
              <CustomButton>Portfolio</CustomButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutme">
              {" "}
              <CustomButton>About me</CustomButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Art">
              {" "}
              <CustomButton>Art</CustomButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
