const mongoose = require("mongoose");

//Create Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowecase: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    activationStatus: {
        type: Boolean,
        required: true,
        default: true,
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;