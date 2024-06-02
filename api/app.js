const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Animal = require('./models/animal');
const Shop = require('./models/shop');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Secret key for JWT
const jwtSecret = 'your_secret_key';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/final', {})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Access denied, token missing!' });
    }
    try {
        const verified = jwt.verify(token, jwtSecret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Token is not valid' });
    }
};

app.get('/api/check-token', (req, res) => {
    const token = req.headers.authorization; // Assuming the token is sent in the Authorization header

    // Your logic to verify token expiration
    if (tokenIsValid(token)) {
        // Token is still valid
        return res.status(200).json({ message: 'Token is not expired' });
    } else {
        // Token has expired, log out the user
        return res.status(401).json({ message: 'Token has expired, user logged out' });
    }
});

// Register route
app.post('/api/v1/register', async (req, res) => {
    try {
        const { user_name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ user_name, email, password });
        const savedUser = await newUser.save();

        res.status(201).json({ user: savedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login route
app.post('/api/v1/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Check if the password is correct
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ message: "Success", token, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Protected route example
app.get('/api/v1/get-me', authenticateJWT, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json(user);
});

// Get Shop route
app.get('/api/v1/shop', async (req, res) => {
    let query = {};
    if (req.query.is_popular) {
        query.popular = true;
    }
    if (req.query.target) {
        query.target = req.query.target;
    }

    const shop = await Shop.find(query);
    res.status(200).json({message: 'Success', data: shop});
});

// Get Animal route
app.get('/api/v1/animal', async (req, res) => {
    let query = {};
    if (req.query.target) {
        query.target = req.query.target;
    }
    const animal = await Animal.find(query);
    res.status(200).json({message: 'Success', data: animal});
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
