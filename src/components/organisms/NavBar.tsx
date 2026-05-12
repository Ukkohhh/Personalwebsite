import "../../App.css";
import { NavLink } from "react-router-dom";
import NavBarButton from "../molecules/NavBarButton";

export default function NavBar() {
  return (
    <div className="flex bg-Col2 text-Col1 justify-center pt-6">
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <NavLink to="/">
              <NavBarButton>Homepage</NavBarButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">
              {" "}
              <NavBarButton>Portfolio</NavBarButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutme">
              {" "}
              <NavBarButton>About me</NavBarButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Art">
              {" "}
              <NavBarButton>Art</NavBarButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
