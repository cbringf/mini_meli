const router = require("express").Router();
const itemsController = require("../controllers/items");

router.get("/items", itemsController.findItems);

router.get("/items/:id", itemsController.getItem);

module.exports = router;
