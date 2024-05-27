import React, { useState, useEffect, useRef } from "react"
import "./Team.css"
import defpfp from "/src/components/Team/images/default_pfp.png"
import sds from "/src/components/Team/images/rsz_3sds.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ParticlesComponent from "../Particlesbg/particles.jsx"
import "./dots.css"

import Manoj from "/src/components/Team/images/Member_Pictures/Manoj Kumar.jpeg"
import Yaagik from "/src/components/Team/images/Member_Pictures/Yaagik Maurya.jpeg"
import Rachit from "/src/components/Team/images/Member_Pictures/Rachit Bansal.jpg"
import Apurv from "/src/components/Team/images/Member_Pictures/Apurva Mishra.jpg"
import Tejas from "/src/components/Team/images/Member_Pictures/Tejas Kumar.jpg"
import Aditya from "/src/components/Team/images/Member_Pictures/Aditya Nahata.jpg"
import Debspandan from "/src/components/Team/images/Member_Pictures/Debspandan.jpg"
import Vanisha from "/src/components/Team/images/Member_Pictures/Vanisha Kandhway.jpg"
import Ritesh from "/src/components/Team/images/Member_Pictures/Ritesh Murmu.jpg"
import Naman from "/src/components/Team/images/Member_Pictures/Naman Khatwani.jpg"
import Amarjeet from "/src/components/Team/images/Member_Pictures/Amarjeet.png"
import Harshwardhan from "/src/components/Team/images/Member_Pictures/harsh wardhan.jpg"
import Animesh from "/src/components/Team/images/Member_Pictures/Animesh Kumar.jpg"
import Harsh from "/src/components/Team/images/Member_Pictures/Harsh Ranjan.jpg"
import Pragya from "/src/components/Team/images/Member_Pictures/Pragya Singh.jpg"
import Vishal from "/src/components/Team/images/Member_Pictures/VISHAL KUMAR SINGH.jpg"
import Gaurav from "/src/components/Team/images/Member_Pictures/Gaurav Singh.jpeg"
import Rounak from "/src/components/Team/images/Member_Pictures/Rounak Kumar.png"
import Aayushii from "/src/components/Team/images/Member_Pictures/Aayushii Singh.jpeg"
import Debasmita from "/src/components/Team/images/Member_Pictures/Debasmita Das.jpg"
import NikhilVerma from "/src/components/Team/images/Member_Pictures/Nikhil Verma.jpg"
import Sreejan from "/src/components/Team/images/Member_Pictures/Sreejan Nidhi.jpeg"
import SagarThakur from "/src/components/Team/images/Member_Pictures/Sagar_Thakur.jpg"

function Card({ member, id }) {
  const { name, role, pfp, gt, ld } = member
  const cardContRef = useRef(null)
  const [flipped, setFlipped] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipped(true)
    }, 900)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current)
    setFlipped(false)
  }

  useEffect(() => {
    const cardCont = cardContRef.current
    cardCont.addEventListener("mouseenter", handleMouseEnter)
    cardCont.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cardCont.removeEventListener("mouseenter", handleMouseEnter)
      cardCont.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cardContRef} className="card-cont">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="front">
          <img className="fprofile" src={pfp || defpfp} alt="person" />
          <h3 className="frole">{role}</h3>
        </div>
        <div className="back">
          <ParticlesComponent id={`particles-${id}`} />
          <img className="logo" src={sds} alt="sds" />
          <img className="tprofile" src={pfp || defpfp} alt={name} />
          <h5 className="name">{name}</h5>
          <h6 className="role">{role}</h6>
          <div className="socials">
            <a href={ld} className="socialt">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={gt} className="socialt">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const teamMembers = [
    {
      name: "Manoj Kumar",
      role: "President",
      pfp: Manoj,
      gt: "https://github.com/Matheletss",
      ld: "https://www.linkedin.com/in/sagar-thakur-223829259",
    },
    {
      name: "Yaagik Maurya",
      role: "Joint President",
      pfp: Yaagik,
      gt: "https://github.com/YaagikMaurya",
      ld: "https://www.linkedin.com/in/yaagik-maurya-1a47a0230",
    },
    {
      name: "Rachit Bansal",
      role: "General Secretary",
      pfp: Rachit,
      gt: "https://github.com/this-is-rachit",
      ld: "https://www.linkedin.com/in/rachit-bansal-960829253",
    },
    {
      name: "Apurva Mishra",
      role: "Joint Secretary",
      pfp: Apurv,
      gt: "https://github.com/Apooorv69",
      ld: "https://www.linkedin.com/in/apooorv",
    },
    {
      name: "Tejas Kumar",
      role: "Joint Secretary",
      pfp: Tejas,
      gt: "https://github.com/ktejas04",
      ld: "https://www.linkedin.com/in/tejas-kumar-00323324b/",
    },
    {
      name: "Aditya Nahata",
      role: "Director",
      pfp: Aditya,
      gt: "#",
      ld: "#",
    },
    {
      name: "Debspandan Chakraborty",
      role: "Treasurer",
      pfp: Debspandan,
      gt: "https://github.com/DebspandanC2911",
      ld: "https://www.linkedin.com/in/debspandan-chakraborty",
    },
    {
      name: "Vanisha Kandhway",
      role: "Joint Treasurer",
      pfp: Vanisha,
      gt: "https://github.com/vanishakandhway",
      ld: "https://www.linkedin.com/in/vanisha-kandhway-2b1831255/",
    },
    {
      name: "Ritesh Murmu",
      role: "Design Coordinator",
      pfp: Ritesh,
      gt: "https://github.com/vanishakandhway",
      ld: "https://www.linkedin.com/in/vanisha-kandhway-2b1831255/",
    },
    {
      name: "Naman Khatwani",
      role: "Content Coordinator",
      pfp: Naman,
      gt: "https://github.com/namankhatwani",
      ld: "https://in.linkedin.com/in/naman-khatwani-a7a749244",
    },
    {
      name: "Amarjeet",
      role: "Vice President - Industry Relations",
      pfp: Amarjeet,
      gt: "https://www.github.com/jeetamar28",
      ld: "https://www.linkedin.com/in/jeetamar",
    },
    {
      name: "Sagar Thakur",
      role: "Industry Relation Coordinator",
      pfp: SagarThakur,
      gt: "https://github.com/Matheletss",
      ld: "https://www.linkedin.com/in/sagar-thakur-223829259",
    },
    {
      name: "Kumar Harshwardhan",
      role: "Vice President - Academic Affairs",
      pfp: Harshwardhan,
      gt: "https://github.com/harshwardhan5",
      ld: "https://www.linkedin.com/in/kumar-hrshwrdhn/",
    },
    {
      name: "Animesh Kumar",
      role: "Academic Coordinator",
      pfp: Animesh,
      gt: "https://github.com/04CodingAnimesh",
      ld: "https://www.linkedin.com/in/animesh-kumar-240b56240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Harsh Ranjan",
      role: "Vice President - Events & Resources",
      pfp: Harsh,
      gt: "https://github.com/harshr28",
      ld: "https://www.linkedin.com/in/harsh-ranjan-34a5531b7",
    },
    {
      name: "Pragya Singh",
      role: "Events & Resources Coordinator",
      pfp: Pragya,
      gt: "https://github.com/PragyaSingh17075",
      ld: "https://www.linkedin.com/in/pragya-singh-6a961b28b",
    },
    {
      name: "Vishal Kumar Singh",
      role: "Finance and Sponsorship Coordinator",
      pfp: Vishal,
      gt: "#",
      ld: "https://www.linkedin.com/in/vishal-kumar-singh-ba675b260",
    },
    {
      name: "Gaurav Kumar Singh",
      role: "Vice President - Web and Tech",
      pfp: Gaurav,
      gt: "https://github.com/stark1144",
      ld: "https://www.linkedin.com/in/gaurav-kumar-singh-45986b236",
    },
    // {
    //   name: "Nikhil Singh",
    //   role: "Web and Tech Coordinator",
    //   pfp: Nikhil,
    //   gt: "https://github.com/aayushii31",
    //   ld: "https://www.linkedin.com/in/aayushii-singh-522606234/"
    // },
    {
      name: "Rounak Kumar",
      role: "Social Media Coordinator",
      pfp: Rounak,
      gt: "https://github.com/raw9k",
      ld: "https://www.linkedin.com/in/guptarounak",
    },
    {
      name: "Aayushii Singh",
      role: "Senior Executive Member",
      pfp: Aayushii,
      gt: "https://github.com/aayushii31",
      ld: "https://www.linkedin.com/in/aayushii-singh-522606234/",
    },
    {
      name: "Debasmita Das",
      role: "Senior Executive Member",
      pfp: Debasmita,
      gt: "https://github.com/aayushii31",
      ld: "https://www.linkedin.com/in/aayushii-singh-522606234/",
    },
    {
      name: "Nikhil Verma",
      role: "Senior Executive Member",
      pfp: NikhilVerma,
      gt: "https://github.com/aayushii31",
      ld: "https://www.linkedin.com/in/aayushii-singh-522606234/",
    },
    {
      name: "Sreejan Nidhi",
      role: "Senior Executive Member",
      pfp: Sreejan,
      gt: "https://github.com/aayushii31",
      ld: "https://www.linkedin.com/in/aayushii-singh-522606234/",
    },
  ]

  return (
    <div className="body">
      <div className="container">
        <div className="background">
          {[...Array(30)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
        <h1 className="heading">Meet Our Team</h1>
        <div className="item-container">
          {teamMembers.map((member, index) => (
            <Card key={index} member={member} id={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
