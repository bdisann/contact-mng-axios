import React from "react";
import "./EditPage.css";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <div className="editPage">
      <div className="editPage__top">
        <h1>EDIT CONTACT</h1>
        <Link to="/" className="editPage__buttonCancel">
          Cancel
        </Link>
      </div>
      <div className="editPage__bottom">
        <form method="post">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <button type="submit">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
