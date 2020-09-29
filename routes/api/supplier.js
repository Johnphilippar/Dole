const express = require('express');
const router = express.Router();
const Supplier = require('../../models/Supplier');

router.post('/',async (req,res) => {

    const { category , subCategory , address, philgepsRegistration , authorizedRepresentative , contactNumber ,status , numberOfAwardedProjects } = req.body;

    try {

        const newSupplier = new Supplier ({
            category,
            subCategory,
            address,
            philgepsRegistration,
            authorizedRepresentative,
            contactNumber,
            status,
            numberOfAwardedProjects
        });
        const post = await newSupplier.save();
        res.json(post)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req,res) => {
    try {
        const supplier = await Supplier.find();
        res.json(supplier);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;