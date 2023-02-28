import React from "react";
import './App.scss';
import Hero from "./components/hero";
import About from "./components/about";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    </div>

  );
}

export default App;
