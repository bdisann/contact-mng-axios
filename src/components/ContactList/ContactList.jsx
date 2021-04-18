import React from "react";
import "./ContactList.css";

const ContactList = ({ name, email, id }) => {
  return (
    <div className="contactList">
      <div className="contactList__left">
        <div className="contactList__profile">
          <i className="fas fa-user-tie icon"></i>
        </div>
        <div className="contactList__bio">
          <h3 className="contactList__name">{name}</h3>
          <p className="contactList__email">{email}</p>
        </div>
      </div>
      <div className="contactList__right">
        <div className="contactList__panel">
          <i className="fas fa-edit icon"></i>
        </div>
        <div className="contactList__panel">
          <i className="fas fa-trash icon"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
