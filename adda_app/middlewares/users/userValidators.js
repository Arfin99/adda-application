//external imports
const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const path = require("path");
const {} = req 




//internal exports
const User = require("../../models/UserModel");

const addUserValidators = [
    check("name").isLength({ min: 1 }).withMessage("Name is required")
        .isAlpha("en-US", { ignore: " -" }).withMessage("Name must not contain anything other than alphabet")
        .trim(),

    check("email").isEmail().withMessage("Invalid email Address")
        .trim()
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value });
                if (user) {
                    throw createError("Email already is use!");
                }
            } catch (err) {
                throw createError(err.message);
            }
        }),

    check("mobile")
        .isMobilePhone("bn-BD", {
            strictMode: true
        })
        .custom(async (value) => {
            try {
                const user = await User.findOne({ mobile: value });
                if (user) {
                    createError("Mobile Number alreay is use!");
                }
            } catch (err) {
                createError(err.message);
            }
        }),

    check("password")
        .isStrongPassword()
        .withMessage("Passowrd must be add 8 charaters and must be contains one lowercase, one Uppercase, one number and one symbols"),
];

const addUSerValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();

    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        if(req.files.length > 0){
            const {filename} = req.files[0];


        }
    }


}

module.exports = { }