import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";

import { useEffect, useState} from "react";


function App() {
  function scrollToDiv(divTarget){
    console.log("target: ", divTarget)
    divTarget.scrollIntoView({behavior:"smooth"})
  }

  const [scrollDivs, setScrollDivs] = useState([])
  useEffect(() =>{ // * invoked when app is rendered
    var lastScrollTop;
    const navbar = document.getElementById('nav');
    window.addEventListener('scroll',function(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollTop > lastScrollTop){
      navbar.style.top='-80px';
      }
      else{
      navbar.style.top='0';
      }
      lastScrollTop = scrollTop;
    });
  }, [])

  useEffect(() =>{
    const heroDiv = document.getElementById("HERO")
    const skillsDiv = document.getElementById("SKILLS")
    setScrollDivs([heroDiv, skillsDiv])
  },[])

  return (
    <>
      <NavBar scrollToDiv={scrollToDiv} scrollDivs={scrollDivs}/>
      <Hero/>
      <Skills/>
      <Hero/>
    </>
  )
}

export default App;
