import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import PopUp from "./Components/PopUp";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

import {useEffect, useState} from "react";
import skills from "./Data/skills.json"



function App() {

  function handleFormChange(event){
    const target = event.target
    const {name,value} = target

    console.log("Value: ", value)

    // dynamically changes the values for the form data
    setFormData(prevFormData =>({
      ...prevFormData,
      [name]: value
    }))

    console.log(formData)
  }

  async function submitForm(event){
    const api = "/api/sendEmail"
    event.preventDefault()
    console.log("Form submitted")
    const requestQuery = process.env.REACT_APP_PROXY + api
    
    const requestOptions ={
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }

    const response = await fetch(requestQuery, requestOptions)
    const data = await response.json()
    const isSuccsessful = data.isSuccsessful
    console.log(isSuccsessful)
  }
  function scrollToDiv(divTarget){
    divTarget.scrollIntoView({behavior:"smooth"})
  }

  // * popUp Tabs
  function handlePopUpData(value){
    setPopUpData({
        name:value,
        skills:skills[value]
    })
  }

  function handleTabButtons(value){
    setTabButtons((prevState)=>{
      return prevState.map((button) => ({...button, isClicked: value === button.name ? true : false}) )
    })
  }

  const [formData,setFormData] = useState({
    subject:"",
    name:"",
    email:"",
    message:""
    
  })

  const [scrollDivs, setScrollDivs] = useState([])
  const [popUp,setPopUp] = useState({isClicked:false}) // * initial value

  const [tabButtons, setTabButtons] = useState([
    {name:"Languages", isClicked:false},
    {name:"Frameworks", isClicked:false},
    {name:"Databases", isClicked:false},
    {name:"Tools", isClicked:false},
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

  useEffect(() =>{ // * Handles getting divs for nav bar to jumpt to
    // * web page section
    const heroDiv = document.getElementById("HERO")
    const skillsDiv = document.getElementById("SKILLS")
    const projectsDiv = document.getElementById("PROJECTS")
    const aboutDiv = document.getElementById("ABOUT")
    const contactDiv = document.getElementById("CONTACT")
    setScrollDivs([heroDiv, aboutDiv, skillsDiv,projectsDiv, contactDiv])
  },[])

  useEffect(()=> {
    const body = document.querySelector('body');
    if (popUp.isClicked){
      // Add a class to the body element to disable scrolling
      body.classList.add('no-scroll');
    }

    else{
        // Remove the class to re-enable scrolling
        body.classList.remove('no-scroll')
    }
  },[popUp.isClicked])

  // useEffect(() =>console.log("Clcicksed"),popUp)

  return (
    <>
      <NavBar scrollToDiv={scrollToDiv} scrollDivs={scrollDivs}/>
      <Hero/>
      <About/>
      <Skills setPopUp={setPopUp} handlePopUpData={handlePopUpData} handleTabButtons={handleTabButtons}/>
      <Projects/>
      <Contact formData={formData} handleFormChange={handleFormChange} submitForm={submitForm} />
      <Footer scrollToDiv={scrollToDiv} scrollDivs={scrollDivs} />
      {popUp.isClicked && <PopUp setPopUp={setPopUp} popUpData={popUpData} handlePopUpData={handlePopUpData} handleTabButtons={handleTabButtons} tabButtons={tabButtons}/>}
    </>
  )
}

export default App;
