const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

const {connectDB} = require("./config/db");
const port = process.env.PORT || 5000;
const { COOKIES_SECRET } = process.env;

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

app.listen(port, () => console.log(`Chat Application is listen : ${port}`));

