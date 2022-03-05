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
    if(e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if(!isValid) {
            setErrMessage('that is an invalid email address');
        } else {
            setErrMessage('');
        }
    } else {
        if (!e.target.vale.length) {
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
    
    <div className="container py-4">
    
      
      <form id="contactForm">
    
        
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-control" id="name" type="text" placeholder="Name" />
        </div>
    
        
        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">Email Address</label>
          <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>
    
        
        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
        </div>
    
        
        <div className="d-grid">
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
    
      </form>
    
    </div>
)


}

export default Contact; 


