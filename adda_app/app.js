//external imports

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();


//internal imports

const { connectDB } = require("./config/db");
const port = process.env.PORT || 5000;
const { COOKIES_SECRET } = process.env;
const { notFoundHandler, errorHandler } = require("./middlewares/common/errorHandler");
const loginRouter = require("./routers/loginRouter");
const inboxRouter = require("./routers/inboxRouter");
const usersRouter = require("./routers/usersRouter");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//set view engine
app.set("view engine", "ejs");

//set static folder

app.use('/static', express.static(path.join(__dirname, "public")));

//parse cookies

app.use(cookieParser(COOKIES_SECRET));

//routing setup

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);


//404 not found
app.use(notFoundHandler);

//common default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Chat Application is listen : ${port}`));

