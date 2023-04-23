import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import PopUp from "./Components/PopUp";

import {useEffect, useState} from "react";


function App() {
  function scrollToDiv(divTarget){
    divTarget.scrollIntoView({behavior:"smooth"})
  }

  const [scrollDivs, setScrollDivs] = useState([])
  const [popUp,setPopUp] = useState({isClicked:false}) // * initial value

  useEffect(() =>{ // * invoked when app is rendered
    var lastScrollTop;
    const navbar = document.getElementById('nav');
    window.addEventListener('scroll',function(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollTop > lastScrollTop){
      navbar.style.top='-90px';
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

  // useEffect(() =>console.log("Clcicksed"),popUp)

  return (
    <>
      <NavBar scrollToDiv={scrollToDiv} scrollDivs={scrollDivs}/>
      <Hero/>
      <Skills setPopUp={setPopUp}/>
      <Hero/>
      {popUp.isClicked && <PopUp/>}
    </>
  )
}

export default App;
