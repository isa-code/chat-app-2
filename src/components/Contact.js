import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }
  render() {
    return (
      <div className="Contact">
        <img
          className="avatar"
          src={this.props.avatar}
          alt={this.props.character}
        />

        <div className="status">
          <div className="name">{this.props.name}</div>

          <p
            className={this.state.online ? "status-online" : "status-offline"}
            onClick={(event) => {
              const newStatus = !this.state.online;

              this.setState({ online: newStatus });
            }}
          ></p>
          <p className="status-text">
            {this.state.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  Online: PropTypes.string,
};

export default Contact;
