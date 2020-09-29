const express = require('express');
const connectDB = require('./config/db');
const app = express();
// Connect Database
connectDB();

app.get('/', (req,res) => res.send('API RUNNING'));

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.listen(PORT , () => console.log(`Server started on port ${PORT}`));

// Routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/employee',require('./routes/api/employee'));
app.use('/api/auth',require('./routes/api/auth'));