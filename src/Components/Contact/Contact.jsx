import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        const formData = {
            name,
            surname,
            message,
        };

        axios.post('http://localhost:8000/contact/', formData)
            .then(response => {
                console.log(response.data);  // Log the response data
                // Optionally reset the form
                setName('');
                setSurname('');
                setMessage('');
            })
            .catch(error => {
                console.log(error.response.data);  // Log the error response
            });
    };

    return (
        <div id="Contact" className="p-4 my-8 lg:p-20 flex flex-col items-center justify-center">
            <h2 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2 w-full mx-auto">
                <div className="lg:flex gap-6">
                    <input
                        className="w-full my-3 rounded-lg bg-white p-4 border-4 border-x-red-200"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="w-full my-3 rounded-lg bg-white p-4 border-4 border-x-red-200"
                        type="text"
                        placeholder="Enter your surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>
                <textarea
                    cols="30"
                    rows="10"
                    className="my-3 rounded-lg p-4 border-2 border-x-red-200"
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    className="neno-button shadow-x1 hover:shadow-red-300 text-black border-2 hover:bg-red-200 border-red-200 rounded-lg py-4 px-8 uppercase overflow-hidden mx-auto"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
