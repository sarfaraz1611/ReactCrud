import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

function Alldata(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3100/alluser");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3100/user/${userId}`);
      fetchUsers();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const navigate = useNavigate();
  const data = (user) => {
    navigate("/add", {
      state: {
        userid: user._id,
        name: user.name,
        email: user.email,
        Phone: user.Phone,
        Address: user.Address,
        edit: "edit",
      },
    });
    console.log(user);
  };

  return (
    <div>
      <table className="Table tabelcheclk">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.Address}</td>
              <td>{user.Phone}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}>
                  Delete
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    data(user);
                  }}>
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alldata;
