const uploader = require("../../helper/fileUploader");

const profileImageUpload = (req, res, next) => {
    const subFolder = "profile_img";
    const max_file_size = 2 * 1024 * 1024;
    const error_msg = "Only JPEG, JPG or PNG allowed";

    const profileUpload = uploader(subFolder, ["image/jpeg", "image/jpg", "image/png"], max_file_size, error_msg);

    // call the middleware function

    profileUpload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    profile: {
                        msg: err.message,
                    },
                },
            });
        } else {
            next();
        }
    });
}

module.exports = profileImageUpload;