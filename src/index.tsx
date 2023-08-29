import "./index.css";
import ReactDOM from "react-dom";
import SamuraiJSApp from "./App";

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
const renderEntireTree = () => {
  ReactDOM.render(<SamuraiJSApp />, document.getElementById("root"));
};

renderEntireTree();
