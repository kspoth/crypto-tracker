import axios from "axios";

export default {
  getBooks: function (q) {
    return axios.get("/api/coingecko", { params: { q: "title:" + q } });
  },

  getSavedBooks: function () {
    return axios.get("/api/coins");
  },

  deleteBook: function (id) {
    return axios.delete("/api/coins/" + id);
  },

  saveBook: function (coinData) {
    return axios.post("/api/coinss", coinData);
  },
};
