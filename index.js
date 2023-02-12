require("dotenv").config();
const jwt = require("jsonwebtoken");
const toolsRoutes = require("./routes/v1/tools.route.js");
const { connectToServer } = require("./utils/dbConnect");

const app = require("./app");
const port = process.env.PORT || 5000;

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.log(err);
  }
});

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("No Routes Found");
});
