import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";
import Course from "./course";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kursus" element={<Course/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App