const User = require("../models/UserModel");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.render("users", {
            users: users
        });

    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUsers,
};