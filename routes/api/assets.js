const express = require('express');
const router = express.Router();
const Assets = require('../../models/Assets');

router.post('/',async (req,res) => {

    const { assetName , serialNumber , category, subCategory , brand , model ,value , custodian , custodianPosition, custodianDivision 
        , custodianUnit ,description , remarks , dateAcquired , estimatedLifespan , condition , nameOfSupplier} = req.body;

    try {

        const newAssets = new Assets ({
            assetName,
            serialNumber,
            category,
            subCategory,
            brand,
            model,
            value,
            custodian,
            custodianPosition,
            custodianDivision,
            custodianUnit,
            description,
            remarks,
            dateAcquired,
            estimatedLifespan,
            condition,
            nameOfSupplier
        });
        const post = await newAssets.save();
        res.json(post)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req,res) => {
    try {
        const assets = await Assets.find();
        res.json(assets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;