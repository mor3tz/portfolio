import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
