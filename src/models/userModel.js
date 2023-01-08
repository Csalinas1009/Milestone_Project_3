const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 15,
        unique: true,

    },
    description: {
        type: String,
        max: 50,
        default: "",
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    }
});

module.exports = mongoose.model("User", UserSchema)