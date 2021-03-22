import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
// import works from "./works.json";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </main>
  );
}

export default App;
