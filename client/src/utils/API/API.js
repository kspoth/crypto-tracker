import axios from "axios";

export default {
  getCoins: function (q) {
    return axios.get("/api/coingecko", { params: { q: "title:" + q } });
  },

  getSavedCoins: function () {
    return axios.get("/api/coins");
  },

  deleteCoin: function (id) {
    return axios.delete("/api/coins/" + id);
  },

  saveCoin: function (coinData) {
    return axios.post("/api/coinss", coinData);
  },
};
