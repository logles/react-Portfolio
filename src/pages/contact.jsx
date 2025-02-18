import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  function handleNameChange(event) {
    setName(event.target.value);
    setErrors({ ...errors, name: "" });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setErrors({ ...errors, email: "" });
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
    setErrors({ ...errors, message: "" });
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    }
  }

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, please fill out the form below:</p>

      <form
        action="https://formspree.io/f/yourFormID"
        method="POST"
        className="contact-form"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          onBlur={handleBlur}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
