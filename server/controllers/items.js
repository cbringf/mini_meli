const CircuitBreaker = require("opossum");
const config = require("../config.json");
const fetch = require("node-fetch");

module.exports = {
  async findItems(req, res) {
    const breaker = new CircuitBreaker(async () => {
      const query = req.query || {};
      const response = await fetch(
        `${config.api.host}/sites/MLA/search?q=${query.search || ""}`
      );
      const jsonResponse = await response.json();

      res.json({
        categories: jsonResponse.available_filters
          .find((f) => f.id === "category")
          .values.map((c) => c.name),
        items: jsonResponse.results.map((i) => ({
          id: i.id,
          title: i.title,
          price: {
            amount: i.price,
            currency: i.currency_id,
          },
          picture: i.thumbnail,
          condition: i.condition,
          free_shipping: i.shipping.free_shipping,
        })),
      });
    }, {});

    breaker.fire();
  },

  async getItem(req, res) {},
};
