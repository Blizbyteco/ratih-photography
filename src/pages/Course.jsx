import Footer from "@/components/ui/Footer";
import Detail from "../components/course/Detail";
import { useEffect } from "react";

const Course = () => {

   useEffect(() => {
      document.title = "Kursus"
    }, [])

  return (
    <>
        <Detail/>
        <Footer/>
    </>
  );
};

export default Course;
