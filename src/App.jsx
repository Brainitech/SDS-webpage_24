import { useState } from "react"
import "font-awesome/css/font-awesome.min.css"
import NavBar from "./components/NavBar/NavigationBar.jsx"
import Team from "./components/Team/Team.jsx"
import ParticlesComponent from "./components/Particlesbg/particles.jsx"
import RegForm from "./components/form/Form.jsx"
import ABT from "./components/abt pg/abt.jsx"
import Blank from "./components/blank/blank.jsx"
import Alumini from "./components/Alumini/Alumini.jsx"
import "./App.css"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  console.log(window.location.pathname)
  // const [count, setCount] = useState(0)
  let component
  switch (window.location.pathname) {
    case "/":
      component = <ABT />
      break
    case "/HOME":
      component = <ABT />
      break
    case "/ABOUT":
      component = <ABT />
      break
    case "/TEAM":
      component = <Team />
      break
    case "/ALUMINI":
      component = <Alumini />
      break
    case "/bootcamp":
      component = <RegForm />
      break
    default:
      component = <Blank />
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      {component}
    </>
  )
}

export default App
