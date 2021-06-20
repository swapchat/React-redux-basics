import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addContact } from "../actions/contactActions";
import { v4 as uuidv4 } from "uuid";

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, phone } = contact;
    if (firstName !== "" && lastName !== "" && phone !== "") {
      console.log(firstName, lastName, phone);
      props.dispatch(
        addContact({
          id: uuidv4(),
          firstName,
          lastName,
          phone,
        })
      );
      setErrorMsg("");
      props.history.push("./list");
    } else {
      setErrorMsg("All fields are required");
    }
  };

  return (
    <Form onSubmit={onSubmitHandler} className="contact-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="firstName"
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={onInputChangeHandler}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="lastName"
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={onInputChangeHandler}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className="phone"
          type="number"
          name="phone"
          value={contact.phone}
          onChange={onInputChangeHandler}
        />
      </Form.Group>
      <Form.Group controlId="submit">
        <Button variant="primary" type="submit" className="submit-btn">
          Add Contact
        </Button>
      </Form.Group>
    </Form>
  );
};

export default connect()(ContactForm);
