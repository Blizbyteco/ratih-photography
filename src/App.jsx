import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default App;
