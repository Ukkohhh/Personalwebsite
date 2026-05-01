import "./App.css";
import MainTemplate from "./components/templates/MainTemplate.js";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MainTemplate />
      </BrowserRouter>
    </div>
  );
}

export default App;
