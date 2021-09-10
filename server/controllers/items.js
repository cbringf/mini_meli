const CircuitBreaker = require("opossum");
const config = require("../config.json");
const fetch = require("node-fetch");

module.exports = {
  async findItems(req, res) {
    const breaker = new CircuitBreaker(async () => {
      const query = req.query || {};
      const response = await fetch(
        `${config.api.host}/sites/MLA/search?q=${query.q || ""}`
      );
      const jsonResponse = await response.json();

      res.json({
        items: jsonResponse.results.slice(0, 4).map((i) => ({
          id: i.id,
          title: i.title,
          price: {
            amount: i.price,
            currency: i.currency_id,
          },
          picture: i.thumbnail,
          condition: i.condition,
          free_shipping: i.shipping.free_shipping,
          address: i.address.state_name,
        })),
      });
    }, {});

    breaker.fire();
  },

  async getItem(req, res) {
    const breaker = new CircuitBreaker(async () => {
      const apiUrl = `${config.api.host}/items/${req.params.id}`;

      const responses = await Promise.all([
        fetch(apiUrl),
        fetch(`${apiUrl}/description`),
      ]);
      const itemResult = await responses[0].json();
      const itemDescResult = await responses[1].json();

      res.send({
        item: {
          title: itemResult.title,
          id: itemResult.id,
          price: {
            amount: itemResult.price,
            currency: itemResult.currency_id,
          },
          picture: (itemResult.pictures || [{}])[0].url,
          condition: itemResult.condition,
          free_shipping: itemResult.shipping.free_shipping,
          sold_quantity: itemResult.sold_quantity,
          description: itemDescResult.plain_text,
        },
      });
    }, {});

    breaker.fire();
  },
};
