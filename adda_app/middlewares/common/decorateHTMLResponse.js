const { APP_NAME } = process.env;

const decorateHTMLResponse = (pageTitle) => {
    return (req, res, next) => {
        res.locals.html = true;
        res.locals.title = `${pageTitle} - ${APP_NAME}`;
        next();
    }
}

module.exports = { decorateHTMLResponse };