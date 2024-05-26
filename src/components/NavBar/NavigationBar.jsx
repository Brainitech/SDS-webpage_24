import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import MenuIcon from "./MenuIcon/MenuIcon.jsx"
import ParticlesComponent from "../Particlesbg/particles.jsx"
import "./NavBar.css"

function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className="Home">
          <a href="HOME">
            <img src="/sds.png"></img>
          </a>
        </div>
        <div className="dropdown">
          <MenuIcon />
        </div>
        <ul className="pages">
          <CustomLink href="/ABOUT#about" className="pagesli">
            About
          </CustomLink>
          <CustomLink href="/ABOUT#whut" className="pagesli">
            Services
          </CustomLink>
          <CustomLink href="/TEAM" className="pagesli">
            Team
          </CustomLink>
          <CustomLink href="https://sdsbitmesra.netlify.app/blogs/" className="pagesli">
            Blogs
          </CustomLink>
          {/* <CustomLink href="/ALUMINI" className="pagesli">
            Alumni
          </CustomLink>
          <CustomLink href="/EVENTS" className="pagesli">
            Events
          </CustomLink> */}
          <CustomLink href="/ABOUT#footer" className="pagesli">
            Contact
          </CustomLink>
        </ul>
        <ul className="social">
          <li className="socialli">
            <a href="https://www.instagram.com/sds.bitm?igsh=MTY2czdicDJpczN6OA==">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="socialli">
            <a href="https://www.linkedin.com/company/society-for-data-science-bit-mesra">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="socialli">
            <a href="https://www.facebook.com/people/Society-for-Data-Science-BIT-Mesra/100063931007042/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

function CustomLink({ href, children, className, ...props }) {
  const path = window.location.pathname
  const activeClass = path === href ? "active" : ""
  const combinedClassName = `${className} ${activeClass}`.trim()
  return (
    <li className={combinedClassName}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}
export default NavBar
