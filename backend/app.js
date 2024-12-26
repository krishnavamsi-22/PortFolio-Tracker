const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/db");
const stockRoutes = require("/routes/stockRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", stockRoutes);

// Database connection and server start
sequelize.sync().then(() => {
  app.listen(5000, () =>
    console.log("Server running on http://localhost:5000")
  );
});
