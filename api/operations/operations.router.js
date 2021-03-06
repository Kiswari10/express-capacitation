var express = require("express");
var router = express.Router();

router.use("/receipts", require("./receipt/receipt.router"));
router.use("/payments", require("./payment/payment.router"));

module.exports = router;
