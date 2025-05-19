import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import RootLayout from "../components/layouts/RootLayout";
import Course from "./Course";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/course" element={<Course/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
