//Ties whole app together, renders all components. state about results in here so that can sort and search as per requirements in readme.

import React from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import TableRow from "./components/Table-Row";
import Table from "./components/Table";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <Header />
          <Search />
          <Table />
          <TableRow />
          <Results />          
        </div>
      </Router>
    );
  }
  

export default App;
