import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import PopUp from "./Components/PopUp";

import {useEffect, useState} from "react";
import skills from "./Data/skills.json"



function App() {
  function scrollToDiv(divTarget){
    divTarget.scrollIntoView({behavior:"smooth"})
  }

  const [scrollDivs, setScrollDivs] = useState([])
  const [popUp,setPopUp] = useState({isClicked:false}) // * initial value

  // * popUp Tabs
  function handlePopUpData(value){
    console.log("value: ", value)
    setPopUpData({
        name:value,
        skills:skills[value]
    })
  }

  function handleTabButtons(value){
    setTabButtons((prevState)=>{
      return prevState.map((button) => ({...button, isClicked: value === button.value ? true : false}) )
    })
  }

  const [tabButtons, setTabButtons] = useState([
    {value:"Languages", isClicked:false},
    {value:"Frameworks", isClicked:false},
    {value:"Databases", isClicked:false},
    {value:"Tools", isClicked:false},
  ])

  const [popUpData,setPopUpData] = useState({})

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

  useEffect(()=> console.log("data buttons: ", tabButtons),[tabButtons])

  // useEffect(() =>console.log("Clcicksed"),popUp)

  return (
    <>
      <NavBar scrollToDiv={scrollToDiv} scrollDivs={scrollDivs}/>
      <Hero/>
      <Skills setPopUp={setPopUp} handlePopUpData={handlePopUpData} handleTabButtons={handleTabButtons}/>
      <Hero/>
      {popUp.isClicked && <PopUp setPopUp={setPopUp} popUpData={popUpData} handlePopUpData={handlePopUpData} handleTabButtons={handleTabButtons}/>}
    </>
  )
}

export default App;
