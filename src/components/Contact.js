import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar"
                src="https://randomuser.me/api/portraits/women/19.jpg" 
                alt="avatar"
            />
            <p className="name">
                Madison Stanley
            </p>

            <article className="status">
                <p className="status-text">Online</p>
                <p className="status-online"></p>
            </article>
        </div>
    )
}

export default Contact;