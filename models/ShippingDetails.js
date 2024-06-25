const mongoose = require('mongoose');

const shippingDetailsSchema = new mongoose.Schema({
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = ShippingDetails;
