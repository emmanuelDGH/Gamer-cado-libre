const express = require("express");
const users = require("./users.js");
const products = require("./products.js");
const carts = require("./carts.js");
const genres = require("./genres");
const orders = require("./orders");

const router = express.Router();

router.use("/genres", genres);
router.use("/users", users);
router.use("/products", products);
router.use("/cart", carts);
router.use("/order", orders);

module.exports = router;
