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

  // * popUp Tabs
  const [buttons, setButtons] = useState([
    {value:"languages", isClicked:false},
    {value:"frameworks", isClicked:false},
    {value:"databases", isClicked:false},
    {value:"tools", isClicked:false},
])

  useEffect(() =>{ // * handles hiding nav bar
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
    // * web page section
    const heroDiv = document.getElementById("HERO")
    const skillsDiv = document.getElementById("SKILLS")
    setScrollDivs([heroDiv, skillsDiv])


    // *
    const bodyTarget = document.getElementsByTagName("html")[0]
    bodyTarget.style = {margin: "0", height: "100%", overflow: "hidden"}
  },[])

  // useEffect(() =>console.log("Clcicksed"),popUp)

  return (
    <>
      <NavBar scrollToDiv={scrollToDiv} scrollDivs={scrollDivs}/>
      <Hero/>
      <Skills setPopUp={setPopUp}/>
      <Hero/>
      {popUp.isClicked && <PopUp setPopUp={setPopUp}/>}
    </>
  )
}

export default App;
