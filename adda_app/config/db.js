const mongoose = require("mongoose");
const { MONGODB_CONN_STR } = process.env;

const DB = function(){};

DB.connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(MONGODB_CONN_STR);
        console.log(`Database Connected : ${dbConnect.connection.host}`);
    } catch (error) {
        console.log(`Database Connection Error : ${error.message}`);
        process.exit(1);
    }
}

module.exports = DB;