const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check,validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config')
const bcrypt = require('bcryptjs');

    //@route    GET api/auth
    //@desc     Test route
    //@access   Public
router.get('/', async (req,res) => {
    try {
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

    //THIS IS HOW TO MAKE A LOGIN
    //@route    GET api/auth
    //@desc     Authenticate user & get token
    //@access   Public
router.post('/', [
    check('email','Email is Required').isEmail(),
    check('password','Password is Required').exists(),
] ,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email , password } = req.body;

    try {

        // See if user exists
        // Get users gravatar
        // Encrypt password
        // Return Json Web Token

        // See if user exists

        let user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({errors: [{msg:'Invalid Cretendials'}]})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }]})
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 36000},
            (err,token) => {
                if(err) throw err;
                res.json({token});
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;