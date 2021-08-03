import React from "react";
import { Alert } from "react-bootstrap";
import loading from "./img/loading.gif";

const Results = ({ isLoaded, animeArray }) => {
  console.log(animeArray);
  return (
    <>
      {isLoaded &&
        animeArray.map((item, index) => {
          return (
            <Alert className="quote" key={index}>
              <h4>{item.anime}</h4>
              <p>{item.quote}</p>
              <i>{item.character}</i>
            </Alert>
          );
        })}
      {!isLoaded && <img className="loading" src={loading} alt="loading" />}
    </>
  );
};

export default Results;
