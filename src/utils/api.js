//call upon API toget list of random users. randomuser.me uses axios https://randomuser.me/api/?results=200&nat=us
import axios from "axios";

export function getUsers() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
};

export function sortHeading() {
  return [{
      name: {name: "Name", id: 1},
      surname: {surname: "Surname", id: 2},
      email: {email: "Email", id: 3},
      username: {username: "Userame", id: 4}
    }];
};
