import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import Bored from "./components/Bored";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <Bored />
    </>
  );
}

export default App;
