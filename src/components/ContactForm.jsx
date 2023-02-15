import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  let user_name = false
  let user_email = false
  let message = false

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)

    if (user_name && user_email && message) {
      emailjs.sendForm('service_kt0zcbc', 'template_hkbwh75', form.current, 'CFw5W8fX7X9BgljAD')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
    }

  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues)
  }

  const handleClick = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
  };

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }
  , [formErrors]
  )
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(!values.user_name) {
      errors.user_name = "J'ai besoin de votre nom!"
      user_name = false
    } else {
      user_name = true
    }
    if(!values.user_email) {
      errors.user_email = "J'ai besoin de votre email!"
      user_email = false
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Ce n'est pas un email valide ..."
      user_email = false
    } else {
      user_email = true
    }
    if(!values.message) {
      errors.message = "J'ai besoin de votre message!"
      message = false
    } else {
      message = true
    }
    return errors
  }

  return (
    <div>
      <form className='contact__form' ref={form} onSubmit={handleSubmit}>
        <input className='input__contact__form'
          placeholder='Nom *'
          type="text"
          name="user_name"
          value={form.user_name}
          onChange={handleChange}
          />
          <p className='error__message__form'>{ formErrors.user_name }</p>
        <input className='input__contact__form'
          placeholder='Email *'
          type="text"
          name="user_email"
          value={form.user_email}
          onChange={handleChange}
          />
          <p className='error__message__form'>{ formErrors.user_email }</p>
        <textarea className='textarea__input__contact__form input__contact__form'
          placeholder='Votre message *'
          name="message"
          value={form.message}
          onChange={handleChange}
          />
          <p className='error__message__form'>{ formErrors.message }</p>
        <button className='input__submit__contact__form' 
          type="submit"
          value="Envoyer"
          onClick={handleClick}>
            Envoyer
        </button>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className={`message__contact__form ${showAlert ? "show" : "hide"}`}>
            Votre message à bien été envoyé
          </div>
          ) : (      
            <div></div>
          )}
      </form>
    </div>
  );
}

export default ContactForm;