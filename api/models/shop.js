const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Define the User schema with snake_case fields
const userSchema = new Schema({
    name: String,
    img: String,
    weight: Number,
    target: String,
    price: Number,
    type: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Create the User model from the schema
const User = mongoose.model('shop', userSchema);

// Export the User model
module.exports = User;
