import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ClickSpark from "./reactcomponent/ClickSpark.jsx";

createRoot(document.getElementById("root")).render(
  <ClickSpark
    sparkColor="#f72585"
    sparkSize={10}
    sparkRadius={25}
    sparkCount={8}
    duration={500}
  >
    <App />
  </ClickSpark>
);
