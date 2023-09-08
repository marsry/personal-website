import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TWallpaper } from "@twallpaper/react";
import "@twallpaper/react/css";
import Homepage from "./pages/Homepage";
import ButtonAppBar from "./components/Header";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ButtonAppBar />
      <TWallpaper
        options={{
          colors: ["#141A1F", "#001B36"],
          fps: 80,
        }}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </Router>
  );
}
