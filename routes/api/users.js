const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { check,validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config')
const bcrypt = require('bcryptjs');

    //THIS IS HOW TO MAKE A REGISTER
    //@route    POST api/users
    //@desc     Register a user
    //@access   Public
router.post('/', [
    check('firstName','First Name is Required').not().isEmpty(),
    check('lastName','Last Name is Required').not().isEmpty(),
    check('email','Email is Required').isEmail(),
    check('password','Password is Required with 5 or more characters').isLength({ min: 5}),
] ,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName , middleName , lastName, email , password } = req.body;

    try {

        // See if user exists
        // Get users gravatar
        // Encrypt password
        // Return Json Web Token

        // See if user exists

        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({errors: [{msg:'User already exists'}]});
        }

        user = new User ({
            firstName,
            middleName,
            lastName,
            email,
            password
        });

        // Encrypted Password

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();

        // Return Json Web Token
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn: 36000 },
            (err,token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/',async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;