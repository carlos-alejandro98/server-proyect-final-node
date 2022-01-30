const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors"); // Protocolo de conexión segura
const { readdirSync } = require("fs"); // Lectura dinamica de directorios
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerConfig = require("./documentation/swagger.config.json");
require("dotenv").config();

// app-server
const app = express();

// db-connection
connectDB();

// middlewares-server
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));
const swaggerDocs = swaggerJsdoc(swaggerConfig);
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));
app.use(cors());

// routes middlewares-fs option 2 (optime)
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));