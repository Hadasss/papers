import React, { useState } from "react";
import Header from "./components/Header";
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
    <div className="col-12">
      <Header currentPage={currentPage} handleChange={handleChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
