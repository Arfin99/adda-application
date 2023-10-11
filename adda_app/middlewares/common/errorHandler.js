const createError = require("http-errors");
const { NODE_ENV } = process.env;


//404 not found handler
const notFoundHandler = (req, res, next) => {
    const error = createError(404, "Your requested content was not found");
    next(error);
};


//default error handler

const errorHandler = (err, req, res, next) => {

    res.locals.error = NODE_ENV === "development" ? err : { message: err.message };
    res.locals.status = res.status || 500;

    if (res.locals.html) {
        res.render('error', {
            title: "Error Page"
        });
    }
    else {
        res.json(res.locals.error);
    }
};

module.exports = {
    notFoundHandler,
    errorHandler
};