import React from "react";
import { HashRouter, HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
