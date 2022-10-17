import "./App.css";

import Info from "./components/Info";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Info />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
