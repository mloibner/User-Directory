//call upon API toget list of random users. randomuser.me uses axios https://randomuser.me/api/?results=200&nat=us
import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
