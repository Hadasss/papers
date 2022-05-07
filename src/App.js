import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Projects") {
      return <Project />;
    } else if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <Contact />;
    }
  };

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handleChange={handleChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
