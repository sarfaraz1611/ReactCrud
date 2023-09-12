import React, { useEffect, useState } from "react";
// import { addUser } from "../service/api";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Adduser() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setphone] = useState("");
  const [edit, setedit] = useState(false);
  // const location = useLocation();/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      Address,
      Phone,
    };
    console.log("formdata", formData);
    if (user.state.edit == "edit") {
      console.log("edit");
      try {
        await axios
          .put(
            `${process.env.REACT_APP_backend}post/${user.state.userid}`,
            formData
          )
          .then(console.log("Form data submitted successfully"));

        // Handle the success response
        console.log("Form data submitted successfully");
      } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error submitting form data:", error);
      }
    } else {
      try {
        await axios
          .post(`${process.env.REACT_APP_backend}/post`, formData)
          .then(console.log("Form data submitted successfully"));

        // Handle the success response
        console.log("Form data submitted successfully");
      } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error submitting form data:", error);
      }
    }
  };
  const user = useLocation();
  // console.log(user.state);
  function loading() {
    if (user.state.edit == "edit") {
      setName(user.state.name);
      setemail(user.state.email);
      setphone(user.state.Phone);
      setAddress(user.state.Address);
    }
  }
  // if (!user.state) {
  // console.log(user.state.userid);

  useEffect(() => {
    loading();
  }, []);

  // } else {
  // }

  return (
    <div className="Container">
      <h2>Add Item</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="Phone"
            value={Phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Adduser;
