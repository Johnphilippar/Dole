const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

router.post('/',async (req,res) => {

    const { firstName , middleName , lastName, position , division , email ,unit , sex , role } = req.body;

    try {

        const newEmployee = new Employee ({
            firstName,
            middleName,
            lastName,
            position,
            division,
            email,
            unit,
            sex,
            role
        });
        const post = await newEmployee.save();
        res.json(post)
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req,res) => {
    try {
        const employee = await Employee.find();
        res.json(employee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:emp_id' , async (req,res) => {
    try {
        // Remove Index
        const employee = await Employee.findOne();
        const removeIndex = employee.map(item => item.id).indexOf(req.params.emp_id)

        employee.splice(removeIndex,1);
        await employee.save();
        res.json(employee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;