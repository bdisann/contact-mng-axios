import React from "react";
import "./AddPage.css";
import { Link } from "react-router-dom";

const AddPage = () => {
  return (
    <div className="addPage">
      <div className="addPage__top">
        <h1>ADD CONTACT</h1>
        <Link to="/" className="addPage__buttonCancel">
          Cancel
        </Link>
      </div>
      <div className="addPage__bottom">
        <form method="post">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
