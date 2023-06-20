import Home from "./Components/Home";
import Resume from "./Components/Resume"

import { Routes, Route } from "react-router-dom";



function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Resume" element={<Resume/>}/>
    </Routes>

  )

}

export default App;
