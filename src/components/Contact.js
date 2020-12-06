import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
    return (

        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.character} />
            
            <div className="status">
                <div className="name">{props.name}
                </div>

                <p className={props.online ? "status-online" : "status-offline"}></p>
                
                <a className="status-text">{props.online ? "Online" : "Offline"}</a>         

            </div>
        </div>

    )
}

Contact.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    Online: PropTypes.string
  };

export default Contact;