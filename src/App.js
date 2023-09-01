import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import ButtonAppBar from "./components/Header";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Homepage />
      </header>
    </div>
  );
}

export default App;
