import React from 'react';
import './Contact.css';

function Contact() {
    return (

        <div className="Contact">
            <img className="avatar"
                src="https://randomuser.me/api/portraits/women/19.jpg"
                alt="ID photo"
            />
            <div>
                <div className="name">
                    Madison Stanley
                </div>

                <div className="status">
                    <p className="status-online"></p>
                    <a className="status-text">Online</a>
                </div>
            </div>
        </div>

    )
}

export default Contact;