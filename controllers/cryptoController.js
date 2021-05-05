const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;

    function App() {
      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState("");
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",

          {
            params,
          }
        )
        .then((res) => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch((error) => console.error(error));
    }
    [];

    const handleChange = (e) => {
      setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  },
};
