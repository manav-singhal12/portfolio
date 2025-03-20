import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_manav1324', 'template_manav1324', form.current, 'bW1aCrv9W4fOATvom')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setSuccessMessage('Message Sent Successfully');
                    form.current.reset();  // Reset form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="flex flex-col md:flex-row py-10 px-5 md:py-40 md:px-20 font-mono md:h-[100vh]">
            {/* Left Section */}
            <div className="left md:w-1/2 md:pr-10">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4" data-aos="zoom-in">Let's Work Together</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8" data-aos="zoom-in">Have any questions or want to discuss a project? <br />I'd love to hear from you.</p>
                <div className="mb-8">
                    <div className="my-4" data-aos="fade-up">
                        <p>Mail</p>
                        <p>manavsinghal165@gmail.com</p>
                    </div>
                    <div className="my-4" data-aos="fade-up">
                        <p>Address</p>
                        <p>Ghaziabad, Uttar Pradesh</p>
                    </div>
                    <div className="my-4" data-aos="fade-up">
                        <p>Phone No</p>
                        <p>+91 9871610915</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="right md:w-1/2 md:pl-10">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4" data-aos="zoom-in">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg p-8 border rounded-lg cusshadow" data-aos="fade-left">
                    <div className="mb-4">
                        <label className="block text-blue-400 text-lg md:text-xl font-bold mb-2" htmlFor="from_name">
                            Name
                        </label>
                        <input
                            placeholder='Enter your name'
                            type="text"
                            name="from_name"
                            id="from_name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-400 text-lg md:text-xl font-bold mb-2" htmlFor="from_email">
                            Email
                        </label>
                        <input
                            placeholder='Enter your email'
                            type="email"
                            name="from_email"
                            id="from_email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-400 text-lg md:text-xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            placeholder='Enter your query'
                            name="message"
                            id="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <input
                            type="submit"
                            value="Send"
                            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer"
                        />
                    </div>
                    {successMessage && (
                        <div className="mt-4 text-white text-center">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
