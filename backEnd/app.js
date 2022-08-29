const express = require("express");
const categoryRouter = require("./routes/CategoryRoutes");
const productRouter = require("./routes/ProductRoutes");
const connectDB = require("./config/db.js");
const cors = require("cors");
const PORT = 3005;
const app = express();


app.use(express.json());

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));

app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);



module.exports = app;