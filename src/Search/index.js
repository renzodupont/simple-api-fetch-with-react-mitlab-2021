import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ onSearch }) => {
  return (
    <Form.Group>
      <Form.Control
        id="search"
        type="text"
        placeholder="Search by title"
        onInput={onSearch}
      />
    </Form.Group>
  );
};

export default Search;
