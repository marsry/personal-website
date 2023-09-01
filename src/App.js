import "./App.css";
import Homepage from "./pages/Homepage";
import ButtonAppBar from "./components/Header";
import { TWallpaper } from "@twallpaper/react";
import "@twallpaper/react/css";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <TWallpaper
          options={{
            colors: ["#141A1F", "#152029", "#00376E"],
          }}
        />

        <Homepage />
      </header>
    </div>
  );
}

export default App;
