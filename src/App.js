import React, { useState, useEffect } from "react";
import "./App.css";
import { Card, Container, Row } from "react-bootstrap";
import axios from "axios";

import Results from "./Results";
import Search from "./Search";
import Pagination from "./Pagination";

function App() {
  const [animeArray, setAnimeArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const query = document.getElementById("search");
    fetchData(query.value ? query.value : "naruto");
  }, [page]);

  const fetchData = async (query) => {
    setIsLoaded(false);
    console.log(page);
    try {
      const result = await axios.get(
        `https://animechan.vercel.app/api/quotes/anime?title=${encodeURIComponent(
          query
        )}&page=${page}`
      );
      setAnimeArray(result.data);
    } catch (error) {
      setAnimeArray([
        {
          anime: "Error",
          quote:
            "No entries or API limit exceeded. Try with a different query in some minutes.",
          character: "",
        },
      ]);
    }
    setIsLoaded(true);
  };

  const handleOnSearch = (e) => {
    const text = e.target.value;
    fetchData(text);
  };

  const handleOnChangePage = (i) => {
    setPage(i);
  };

  return (
    <Container>
      <Card>
        <Search onSearch={handleOnSearch} />
      </Card>
      <Row>
        <Pagination page={page} onChangePage={handleOnChangePage} />
      </Row>
      <Card>
        <Results animeArray={animeArray} isLoaded={isLoaded} />
      </Card>
      <Row>
        <Pagination page={page} onChangePage={handleOnChangePage} />
      </Row>
    </Container>
  );
}

export default App;
