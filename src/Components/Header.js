import React from "react";
import axios from "axios";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const dlt = async () => {
    try {
      const response = await axios.delete(
        "https://merncrudbackend-9mqg.onrender.com/deleteallusers"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="mainHeader">
      <NavLink to="/ReactCrud" className="NavLink">
        <h1 className="NavLink">Manage Employee</h1>
      </NavLink>
      <div className="hello">
        <button type="button" className="btn btn-danger" onClick={dlt}>
          Delete All
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigate("/add", {
              state: {
                userid: "",
                name: "",
                email: "",
                Phone: "",
                Address: "",
                edit: "post",
              },
            });
          }}>
          Add New
        </button>
      </div>
    </div>
  );
}

export default Header;
