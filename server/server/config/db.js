const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log("MongoDB Connected".cyan.underline.bold);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
