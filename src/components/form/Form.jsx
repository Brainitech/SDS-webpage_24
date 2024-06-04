import React, { useState, useRef } from "react"
import "./form.css"
import "./dots.css"

const RegForm = () => {
  const [checkState, setCheckState] = useState("showForm")
  const formRef = useRef(null)
  const numberRef = useRef(null)
  const emailRef = useRef(null)

  const scriptURL = "https://script.google.com/macros/s/AKfycbzzYzkBN1II6pLvtzN4pdWBRPkUBlDmahDCzLVO2qg0GqdpPq12Ywbw1epukqNi3soA5g/exec"

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!emailRef.current || !numberRef.current) {
      console.error("Refs not properly assigned.")
      return
    }

    const emailValid = validateEmail(emailRef.current.value)
    const phoneValid = validatePhoneNumber(numberRef.current.value)

    if (emailValid && phoneValid) {
      await submitData()
    }
  }

  const validateEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) {
      return true
    } else {
      alert("You have entered an invalid email address!")
      return false
    }
  }

  const validatePhoneNumber = (phoneNumber) => {
    const phoneno = /^\d{10}$/
    if (phoneNumber.match(phoneno)) {
      return true
    } else {
      alert("You have entered an invalid Mobile Number!")
      return false
    }
  }

  const submitData = async () => {
    setCheckState("validating")

    try {
      const check = await fetch(`${scriptURL}?action=getData`)
      const checkResult = await check.json()
      let checked = true

      for (let i = 0; i < checkResult.length; i++) {
        if (numberRef.current.value === checkResult[i]?.Number || emailRef.current.value === checkResult[i]?.Email) {
          checked = false
          break
        }
      }

      if (checked) {
        try {
          setCheckState("loading")
          const response = await fetch(scriptURL, {
            method: "POST",
            body: new FormData(formRef.current),
          })
          const result = await response.json()

          if (result?.result === "success") {
            console.log("Success!")
            setCheckState("success")
            formRef.current.reset()
          } else {
            throw new Error("Submission failed")
          }
        } catch (error) {
          console.log("Error:", error)
          alert("Seems heavy traffic for registration. Please refresh the page and try once again.")
        } finally {
          setCheckState("success")
        }
      } else {
        setCheckState("error")
      }
    } catch (err) {
      console.log("Error:", err)
      alert("Seems heavy traffic for registration. Please refresh the page and try once again.")
      setCheckState("showForm")
    }
  }

  return (
    <div className="fcontainer">
      <div className="background">
        {[...Array(30)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <div className="form_wrapper" style={{ display: checkState === "showForm" ? "flex" : "none" }}>
        <div className="form_container">
          <div className="title_container">
            <h2 style={{ background: "#7242ff" }}>Registration For Rag Bootcamp</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form ref={formRef} name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-font"></i>
                  </span>
                  <input type="text" name="Name" placeholder="Your Name" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-graduation-cap"></i>
                  </span>
                  <input type="text" name="College" placeholder="College Name" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input ref={emailRef} type="email" name="Email" placeholder="Email" required />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-id-badge"></i>
                  </span>
                  <input ref={numberRef} type="number" name="Number" placeholder="Mobile Number" required />
                </div>
                <button className="button" type="submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {checkState === "loading" && (
        <div className="loading-container1">
          <img src="Loading.gif" width="200" height="200" alt="Loading" />
          <p>Registering</p>
        </div>
      )}

      {checkState === "validating" && (
        <div className="loading-container2">
          <img src="Validating.gif" width="150" height="150" alt="Validating" />
          <p>Validating</p>
        </div>
      )}

      {checkState === "success" && (
        <div className="SuccessPage" style={{ margin: "10px" }}>
          <h1>REGISTERED SUCCESSFULLY</h1>
          <div className="githublnkd">
            <h4 className="githublnk">Star these GitHub repos as we'll reference these during the course:</h4>
            <div className="githublnks">
              <a href="https://github.com/pathwaycom/pathway">Pathway Github</a>
              <a href="https://github.com/pathwaycom/llm-app">LLM App Github</a>
            </div>
          </div>
          <h2>Join the Whatsapp group using the link given below</h2>
          <div style={{ color: "white", margin: "40px" }} className="whatsapp">
            <span>
              <i className="fa fa-whatsapp"></i>
            </span>
            <a href="https://chat.whatsapp.com/Exfzup3UWJb2YxFIPWWhBm">SDSxPathway Bootcamp</a>
          </div>
          <div className="GoBack">
            <i className="fa-solid fa-arrow-left"></i>
            <a href="HOME">Go Back</a>
          </div>
        </div>
      )}

      {checkState === "error" && (
        <div className="reEnter">
          <h1>Mobile No. / Email Already Registered</h1>
          <div className="GoBack">
            <i className="fa-solid fa-arrow-left fa-shake"></i>
            <a href="bootcamp">Re Fill The Form</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default RegForm
