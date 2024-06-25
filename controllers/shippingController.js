const ShippingDetails = require('../models/ShippingDetails');

exports.getShippingDetails = async (req, res) => {
    const { email } = req.params;
    try {
        const details = await ShippingDetails.findOne({ email });
        if (!details) {
            return res.status(404).json({ message: 'Shipping details not found' });
        }
        res.json(details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addShippingDetails = async (req, res) => {
    const { email, address, city, postalCode, country } = req.body;
    try {
        const newDetails = new ShippingDetails({ email, address, city, postalCode, country });
        const savedDetails = await newDetails.save();
        res.status(201).json(savedDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
