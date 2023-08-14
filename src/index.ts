import "dotenv/config";
import ordersRoutes from "./routes/v1/orders.route.js";
import usersRoutes from "./routes/v1/users.route.js";
import productsRoutes from "./routes/v1/products.route.js";
import categoriesRoutes from "./routes/v1/categories.route.js";
import "./config/dbConfig.js";
import app from "./app.js";
import { Request, Response } from "express";

// Routes
app.use("/api/v1/orders", ordersRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/categories", categoriesRoutes);

// Global Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.all("*", (req: Request, res: Response) => {
  res.send("No Routes Found");
});
