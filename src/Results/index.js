import React from "react";
import { Card } from "react-bootstrap";
import loading from "./img/loading.gif";

const Results = ({ isLoaded, animeArray }) => {
  console.log(animeArray);
  return (
    <>
      {isLoaded &&
        animeArray.map((item, index) => {
          return (
            <Card className="quote" key={index}>
              <Card.Body>
                <Card.Title>
                  <h4>{item.anime}</h4>
                </Card.Title>
                <Card.Text>
                  {item.quote}
                  <br />
                  <i>{item.character}</i>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      {!isLoaded && <img className="loading" src={loading} alt="loading" />}
    </>
  );
};

export default Results;
