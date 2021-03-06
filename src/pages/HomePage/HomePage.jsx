import React from "react";
import { Link } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__top">
        <h1 className="homePage__contactList">CONTACT LIST</h1>
        <Link to="/add" className="homePage__buttonAdd">
          Add Contact
        </Link>
      </div>
      <div className="homePage__bottom">
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
        <ContactList name="Budi Santoso" email="bdisanttoso@gmail.com" />
      </div>
    </div>
  );
};

export default HomePage;
