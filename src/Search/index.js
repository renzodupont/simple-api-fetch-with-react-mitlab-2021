import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ onSearch }) => {
  return (
    <Form.Group>
      <Form.Label>
        <i>
          Please have in mind that each page change will count against the API
          limits.
        </i>
        <p>* Use the Enter key to apply your filter</p>
      </Form.Label>
      <Form.Control
        id="search"
        type="text"
        placeholder="Search by title"
        onKeyPress={(e) => {
          if (e.key === "Enter") onSearch(e);
        }}
      />
    </Form.Group>
  );
};

export default Search;
