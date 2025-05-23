import React from "react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Kelas from "@/components/course/Kelas";
import Layanan from "@/components/course/Layanan";

const Course = () => {
  return (
    <>
      <Navbar />
      <Layanan />
      <Kelas />
      <div className="h-screen bg-black" />
      <Footer />
    </>
  );
};

export default Course;
