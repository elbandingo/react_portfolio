import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

//create a function that will handle the form, its submission, and ensure its return is the html tags and content
function Contact() {
    //hook for the forms content, and sets state to blank by default, run everytime setContent is executed
    const [formContent, setContent] = useState({name:'', email:'', message:''});
    //hook for error message
    const [errMessage, setErrMessage] = useState('');
    //declare an object as formContent to initialize the variables
    const { name, email, message } = formContent;

    //function for handling a the submit button
    const submitHandler = (e) => {
        e.preventDefault();
        if(!errMessage) {
            console.log('form submitted', formContent);
        }
    }

    //function for handling changes in form, validating emails, and ensuring fields are filled out
    const formHandler = (e) => {
    if(e.target.name === email) {
        const isValid = validateEmail(e.target.value);
        if(!isValid) {
            setErrMessage('that is an invalid email address');
            console.log(errMessage);
        } else {
            setErrMessage('');
        }
    } else {
        if (!e.target.value.length) {
            setErrMessage(`${e.target.name} is mandatory!`)
        } else {
            setErrMessage('');
        }
    }

    //if there is no error message, set the content of the form to the appropriate values for return
    if(!errMessage) {
        setContent({...formContent, [e.target.name]: e.target.value });
        console.log('form handled!', formContent);
    }
}

return (
    <div className="bg-dark text-light text-center p-5 " style={{height: "1080px"}}>
      <p className="fs-2">Contact Me Today!</p>
      <hr />
      <form id="contact-form" onSubmit={submitHandler}>
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={formHandler} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={formHandler} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={formHandler} />
        </div>
        <button className="btn btn-danger" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );

}

export default Contact; 


