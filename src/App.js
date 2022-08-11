import "./App.css";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Yourclub from "./pages/Yourclub";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Progress />
        <div className="form-staps">
        <Yourclub />
        </div>
      </div>
    </div>
  );
}

export default App;
