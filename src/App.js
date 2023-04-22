import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";

import { useEffect, useState} from "react";


function App() {
  const [navBarIsRendered, setNavBarIsRendered] = useState(false)

  useEffect(() =>{ // * invoked when navbar is rendered
    var lastScrollTop;
    const navbar = document.getElementById('nav');
    window.addEventListener('scroll',function(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log("styke: ", navbar.style)
      if(scrollTop > lastScrollTop){
      navbar.style.top='-80px';
      }
      else{
      navbar.style.top='0';
      }
      lastScrollTop = scrollTop;
    });
  }, [navBarIsRendered])





  return (
    <>
      <NavBar setNavBarIsRendered={setNavBarIsRendered}/>
      <Hero/>
      <Skills/>
    </>
  )
}

export default App;
