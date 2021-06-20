import React from "react";

export default function Contact({
  firstName,
  lastName,
  phone,
  id,
  handleDeleteContact,
}) {
  const handleDelete = (event) => {
    event.preventDefault();
    handleDeleteContact(id);
  };
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <a href="/#" onClick={handleDelete}>
          Remove
        </a>
      </td>
    </tr>
  );
}
