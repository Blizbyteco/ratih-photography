import React from "react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Detail from "../components/course/Detail";

const Course = () => {
  return (
    <>
        <Navbar />
        <Detail/>
        <div className="h-screen bg-black" />
        <Footer/>
    </>
  );
};

export default Course;
