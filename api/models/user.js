const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Define the User schema with snake_case fields
const userSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    this.updated_at = Date.now();
    next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Create the User model from the schema
const User = mongoose.model('user', userSchema);

// Export the User model
module.exports = User;
