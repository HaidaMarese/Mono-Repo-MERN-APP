import path from "path";
import url from "url";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import db from "./src/config/connection.js";
import usersRouter from "./src/routes/users.js";
import postsRouter from "./src/routes/posts.js";

dotenv.config();

// Constants
const app = express();
const PORT = process.env.PORT || 3000;
const _fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(_fileName);

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

// Serves frontend app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// Starts server and connects to database
db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
