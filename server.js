const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const eventRoute = require("./routes/eventRoutes");
const regRoute = require("./routes/registrationRoutes");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE).then(() => console.log("DB connected"));

app.listen(port, () => {
  console.log(`server is running on port: ${port} `);
});

app.use("/event", eventRoute);
app.use("/reg", regRoute);
