const toolsRoutes = require("./routes/v1/tools.route.js");
const ordersRoutes = require("./routes/v1/orders.route.js");
const usersRoutes = require("./routes/v1/users.route.js");
const productsRoutes = require("./routes/v1/products.route.js");

const colors = require("colors");
require("dotenv").config();

const app = require("./app");

// Database Connect
require("./config/dbConfig");

// Routes
app.use("/api/v1/tools", toolsRoutes);
app.use("/api/v1/orders", ordersRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/products", productsRoutes);

// Global Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.all("*", (req, res) => {
  res.send("No Routes Found");
});
