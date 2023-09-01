import "./App.css";

import Homepage from "./pages/Homepage";
import ButtonAppBar from "./components/Header";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
