const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.get("/stocks", stockController.getAllStocks);
router.post("/stocks", stockController.addStock);
router.put("/stocks/:ticker", stockController.updateStock);
router.delete("/stocks/:ticker", stockController.deleteStock);

module.exports = router;
