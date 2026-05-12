import "./App.css";
import MainTemplate from "./components/templates/MainTemplate";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  );
}

export default App;
