import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Contact/Contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            surname,
            message,
        };

        axios.post('http://localhost:8000/contact/', formData)
            .then(response => {
                console.log(response.data);
                setName('');
                setSurname('');
                setMessage('');
            })
            .catch(error => {
                console.log(error.response.data);
            });
    };

    return (
        <div id="Contact" className={styles.contact_section}>
            <h2 data-aos="fade-down" className={styles.contact_title}>Contact Me</h2>
            <form onSubmit={handleSubmit} className={styles.form_section}>
                <div className="lg:flex gap-6">
                    <input
                        className={styles.forms}
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={styles.forms}
                        type="text"
                        placeholder="Enter your surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <textarea
                    cols="30"
                    rows="10"
                    className={styles.textarea}
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    className={styles.button}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;