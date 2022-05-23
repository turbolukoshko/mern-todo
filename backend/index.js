const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.NODE_PORT || 5000;

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
