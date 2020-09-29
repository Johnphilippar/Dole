const express = require('express');
const router = express.Router();
const Stocks = require('../../models/Stocks');


router.post('/',async (req,res) => {

    const { onhand , allocated , inStock, minStockLevel , onOrder , orderTo ,orderStatus , itemPrice , totalOrder , orderBy } = req.body;

    try {

        const newStocks = new Stocks ({
            onhand,
            allocated,
            inStock,
            minStockLevel,
            onOrder,
            orderTo,
            orderStatus,
            itemPrice,
            totalOrder,
            orderBy
        });
        const post = await newStocks.save();
        res.json(post)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req,res) => {
    try {
        const stocks = await Stocks.find();
        res.json(stocks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;