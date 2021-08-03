import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ page, onChangePage }) => {
  console.log("...." + new Array(10).fill(0));
  return (
    <div className="pagination">
      {new Array(10).fill(0).map((item, index) => {
        return (
          <Button
            variant={page !== index + 1 ? "secondary" : "primary"}
            key={index}
            onClick={() => onChangePage(index + 1)}
          >
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
