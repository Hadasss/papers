import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Projects") {
      return <Project />;
    }
  };

  const handleChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handleChange={handleChange} />
      <Hero />
      {/* <About />
      <Project />
      <Work /> */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
