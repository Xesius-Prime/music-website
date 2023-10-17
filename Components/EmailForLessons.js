import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import globalStyle from '../styles/Home.module.css'

export default function EmailForLessons() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8pi7jdt', 'template_idcv1bf', form.current, '7CyHMkO5OaynCZoQ3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} >
                <label>Name</label> <br />
                <input type="text" name="user_name" /> <br />
                <label>Email</label> <br />
                <input type="email" name="user_email" /> <br />
                <label>Message</label> <br />
                <textarea name="message" className={globalStyle.formInput} /> <br /> <br />
                <input type="submit" value="Send" className={globalStyle.formBtn} />
            </form>
        </div>
    )
}
