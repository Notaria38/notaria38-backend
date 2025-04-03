const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const corsOptions = require("./application/util/corsOptions");
const logger = require("./application/util/logger");
const errorHandler = require("./infrastructure/api/errorHandler");
const authRoutes = require("./interface/routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.use(logger);
app.use(express.json());

// Routes
app.use("/api", authRoutes);

app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
