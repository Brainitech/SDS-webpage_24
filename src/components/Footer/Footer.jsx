import React from 'react'
import "./Footer.css"

const Footer = () => {

  const sendEmail = ()=> {}
  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
  }


  return (
    <footer id="footer">
        <div id="contact">
            <div>
                <div id='contact-us'>
                    <h4>/ Contact Us</h4>
                    <p>sds@bitmesra.ac.in</p>
                </div>
                <div id='find-us' className="find-us">
                    <div>
                        <h4>/ Where to find Us</h4>
                        <p>
                            Birla Institute of Technology, Mesra
                            <br />
                            Ranchi, JH
                            <br />
                            835215, India
                        </p>
                    </div>
                    <div id='follow-us'>
                        <h4>/ Follow Us</h4>
                        <ul className='social-links'>
                            <li><a href="https://www.facebook.com/Society-for-Data-Science-BIT-Mesra-107499150681960"><i className='ri-facebook-box-fill'></i></a></li>
                            <li><a href="https://www.linkedin.com/company/society-for-data-science-bit-mesra"><i className='ri-linkedin-box-fill'></i></a></li>
                            <li><a href="https://www.instagram.com/sds.bitm/"><i className='ri-instagram-line'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='get-in-touch' className='get-in-touch'>
                <h4>/ Get in touch</h4>
                <span>
                    <input type="text" placeholder='Your Name'/>
                    
                    <input type="email" placeholder='Your Email'/>
                </span>
                <input type="text" placeholder='Subject'/>
                <input type="text" placeholder='Your Message'/>
                <button onClick={handleSubmit}>Send</button>
                <br />
            </div>
            <div>
                <center>
                <p className="verticaltext">BACK TO TOP </p>
                <br />
                <div className="arrow">
                    <a href="HOME"><i className="ri-arrow-up-line"></i></a>
                </div>
                </center>
            </div>
        </div>
        <br />
        <div id='copyright'>
            Copyright ©2024 All rights reserved | <span style={{color: "white"}}>Society for Data Science</span>
        </div>
    </footer>
  )
}

export default Footer