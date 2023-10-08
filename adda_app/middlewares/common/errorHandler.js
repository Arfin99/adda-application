const createError = require("http-errors");


//404 not found handler
const notFoundHandler = (req, res, next) => {
    const error = createError(404, "Your requested content was not found");
    next(error);
}

const errorHandler = (err, req, res, next) => {
    res.render('error',{
        title: "Error Page"
    });
}