import Footer from "@/components/ui/Footer";
import Detail from "../components/course/Detail";
import { useEffect } from "react";
import Navbar from "../components/ui/Navbar";

const Course = () => {

   useEffect(() => {
      document.title = "Kursus"
    }, [])

  return (
    <>
      <Navbar />
     <Detail />
      <Footer />
    </>
  );
};

export default Course;
