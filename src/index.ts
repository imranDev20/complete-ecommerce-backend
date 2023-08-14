import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import ordersRoutes from "./routes/v1/orders.route.js";
import usersRoutes from "./routes/v1/users.route.js";
import productsRoutes from "./routes/v1/products.route.js";
import categoriesRoutes from "./routes/v1/categories.route.js";
import "./config/dbConfig.js";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __parentdir = path.join(__dirname, ".."); // Go one step back

dotenv.config({ path: path.join(__parentdir, ".env") });

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
