import axios from "axios";


const APIKEY = "d43b233934ad487eb5ab375694ab246f";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query, begin_date, end_date) {
    return axios.get(BASEURL + query + "&begin_date=" + begin_date + "&end_date=" + end_date);
  }
};