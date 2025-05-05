import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <Container>
        <h1 className="text-4xl">Hello World</h1>
      </Container>
    </div>
  );
};

export default App;
