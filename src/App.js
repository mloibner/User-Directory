//Ties whole app together, renders all components. state about results in here so that can sort and search as per requirements in readme.

import React, { useState, useEffect } from "react";
import {Header} from "./components/Header";
import {Results} from "./components/Results";
import {Search} from "./components/Search";
import {Table} from "./components/Table";
import { getUsers } from "./utils/api";
import axios from "axios"


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=15&nat=us").then((users) => {
        setUsers(users.data.results);
        setFilteredUsers(users.data.results);
    }).catch(e => {
      console.error(e)
    });
  }, []); 
  function handleInputChange(value) {
    const searchedUsers = users.filter(user =>
  user.name.first.includes(value)
);
setFilteredUsers(searchedUsers)
  }
        return ( 
        <div>
          <Header />
          <Search handleInputChange = { handleInputChange}/>
          <Table users = { filteredUsers }/> 
          <Results />          
        </div>
    );
  }
  

export default App;
