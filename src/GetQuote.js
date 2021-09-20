import React, { useState } from 'react';
import db from './firebase';
import firebase from 'firebase';


function GetQuote() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('repair');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleServiceChange = (event) => {
        setService(event.target.value)
    }

    const handleMesssageChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${name} ${email} ${phone} ${service} ${message}`);
        addToDb();
        clearForm();
        window.scrollTo(0, 0);
    }

    const clearForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setService('repair');
    }

    const addToDb = () => {
        db.collection('inquiries').add({
            name: name,
            email: email,
            phone: phone,
            service: service,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }).then((docRef) => {
              console.log("Document written with ID: ", docRef.id)
          }).catch((error) => {
              console.error("Error adding document: ", error)
          });
    }

    return (
        <div className='getQuote flex alignCenter white' id='getQuote'>
            <div className='pictureBox'></div>
            <div className='quoteBox flexCol mt10 alignCenter'>
                <h5 className='font'>Schedule a free consulation Today!</h5>
                <form onSubmit={handleSubmit}>
                    <div className='flex spaceBetween' id='leftFormFields'>
                        <div className='flexCol'>
                            <label for='name' className='font'>Full Name</label>
                            <input name='name' value={name} type='text' onChange={handleNameChange}></input>
                        </div>
                        <div className='flexCol'>
                            <label for='email' className='font'>Email</label>
                            <input name='email' value={email} type='text' onChange={handleEmailChange}></input>
                        </div>
                    </div>
                    <div className='flex mt10 spaceBetween' id='rightFormFields'>
                        <div className='flexCol'>
                            <label for='phone' className='font'>Phone</label>
                            <input name='phone' value={phone} type='text' onChange={handlePhoneChange}></input>
                        </div>
                        <div className='flexCol'>
                            <label for='selectDrop' className='font'>What service do you need?</label>
                            <select name='selectDrop' value={service} onChange={handleServiceChange}>
                                <option value='lighting'>Lighting</option>
                                <option value='wiring'>Wiring</option>
                                <option value='repair'>Repair</option>
                            </select>
                        </div>
                    </div>
                    <div className='flexCol mt10'>
                            <label for='txtArea' className='font'>Message</label>
                            <textarea name='txtArea' value={message} className='font mt10' onChange={handleMesssageChange}></textarea>
                     </div>
                     <input name='submit' type='submit' value='Submit' className='submitBtn mt10 square_btn'/>
                    
                    
                </form>
            </div>
            
        </div>
    )
}

export default GetQuote
