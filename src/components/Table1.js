import React from "react";
import "./Table.css";
import data from "../mock-data.json";
import Table from "./Table";
import { useState } from "react";
function Table1() {
  const [Contacts, setContacts] = useState(data);
  const [addFormData, setaddFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setaddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const NewContact = {
      Name: addFormData.Name,
      Email: addFormData.Email,
      Phone: addFormData.Phone,
    };
    const newContacts = [...Contacts, NewContact];
    setContacts(newContacts);
  };
  return (
    <>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {Contacts.map((contact) => (
              <tr>
                <td>{contact.Name} </td>
                <td>{contact.Email}</td>
                <td>{contact.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Table />
        <h2>Enter details</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter Name"
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="Email"
            required="required"
            placeholder="Enter Email"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="Phone"
            required="required"
            placeholder="Enter Phone No."
            onChange={handleAddFormChange}
          />
        </form>
        <button className="btn" type="submit">
          Check Availability
        </button>
      </div>
    </>
  );
}

export default Table1;
