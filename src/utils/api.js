//call upon API toget list of random users. randomuser.me uses axios https://randomuser.me/api/?results=200&nat=us
import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

