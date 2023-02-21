import React from "react";
import './App.scss';
import Hero from "./components/hero";
import About from "./components/about";
import Blog from "./components/blog";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import ContactCard from "./components/contactCard";
import Modal from "react-modal";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Footer />
        <Modal>
          <ContactCard />
        </Modal>
      </div>
    </div>

  );
}

export default App;
