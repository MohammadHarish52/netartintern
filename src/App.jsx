import "./App.css";
import Ceremonial from "./components/Ceremonial";
import DifferentPumps from "./components/DifferentPumps";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div className="App">
      <Tagline />
      <Ceremonial />
      <DifferentPumps />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
