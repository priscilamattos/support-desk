const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
require("colors");
require("dotenv").config();
// const { errorHandler } = require("./middleware/errorMiddleware");
// const connectDB = require("./config/db");
const PORT = process.env.PORT || 5005;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // FIX: below code fixes app crashing on refresh in deployment
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome to the Support Desk API" });
  });

  app.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: "Message coming from Postman" });
  });
}

// app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
