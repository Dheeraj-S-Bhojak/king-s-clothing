const mongoose = require("mongoose");
const connectDB = () => {
    //configure mongoose
    mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://root:asdfvbnm@kingsclothing.vus1gxs.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the Server");
    }
  }
  );
  
    
}
module.exports = connectDB;
