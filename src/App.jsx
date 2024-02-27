import "./App.css";
import Ceremonial from "./components/Ceremonial";
import DifferentPumps from "./components/DifferentPumps";
import Products from "./components/Products";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div className="App">
      <Tagline />
      <Ceremonial />
      <DifferentPumps />
      <Products />
    </div>
  );
}

export default App;
