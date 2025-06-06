import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import RootLayout from "../components/layouts/RootLayout";
import Course from "./Course";
import Service from "./Service";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/course" element={<Course/>}/>
          <Route path="/service" element={<Service />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
