const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Animal model
const animalSchema = new Schema({
    img: String,
    title: String,
    popular: Boolean,
    target: String,
    intro: String,
    meal: String,
    meal_2_3: String,
    meal_3_6: String,
    meal_6: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Create the Animal model from the schema
const Animal = mongoose.model('animal', animalSchema);

// Export the Animal model
module.exports = Animal;