//Ties whole app together, renders all components. state about results in here so that can sort and search as per requirements in readme.

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import Table from "./components/Table";
import { getUsers } from "./utils/api";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((users) => {
        setUsers(users.data.results);
    });
  }); 
        return ( 
        <div>
          <Header />
          <Search />
          <Table users = { users }/> 
          <Results />          
        </div>
    );
  }
  

export default App;
