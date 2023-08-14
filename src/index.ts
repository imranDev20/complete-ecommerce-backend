import ordersRoutes from "./routes/v1/orders.route.ts";
import usersRoutes from "./routes/v1/users.route.ts";
import productsRoutes from "./routes/v1/products.route.ts";
import categoriesRoutes from "./routes/v1/categories.route.ts";
// import colors from "colors";
import app from "./app.js";

require("dotenv").config();

// Database Connect
require("./config/dbConfig");

// Routes
app.use("/api/v1/orders", ordersRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/categories", categoriesRoutes);

// Global Routes
app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});
app.all("*", (req: any, res: any) => {
  res.send("No Routes Found");
});
