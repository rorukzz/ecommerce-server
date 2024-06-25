const express = require('express');
const { getShippingDetails, addShippingDetails } = require('../controllers/shippingController');
const router = express.Router();

router.route('/')
    .post(addShippingDetails);
router.route('/:email')
    .get(getShippingDetails);

module.exports = router;
