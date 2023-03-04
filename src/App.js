import React, { useState } from "react";
import "./index.css";


export default function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
 
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false);


function handleChange(event){
  const {name, value} = event.target;
  setValues((prevValue) => {
    return {
      ...prevValue,
      [name]: value,
    };
  });
}

function handleSubmit(event) {
  event.preventDefault();
  if (values.firstName && values.lastName && values.email) {
    setValid(true);
  }
  setSubmitted(true);
}

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message">Success! Thank you for registering!</div> : null }
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
        onChange={handleChange}
        value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
        onChange={handleChange}
        value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
        onChange={handleChange}
        value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
