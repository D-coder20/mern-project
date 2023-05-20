const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://debpriya20:admin@cluster0.zia2l3i.mongodb.net/mernapp?retryWrites=true&w=majority"
    );
    //console.log(conn);
    console.log(`Mongodb Connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1); //we are ending with failure that because of we are using 1
  }
};

module.exports = connectDB;
