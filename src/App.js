import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/courses" element = {<Courses/>}/>
      </Routes>
    </>
  );
}

export default App;
