import express from "express";
import AuthRoutes from "./routes/auth.routes";
import morgan from "morgan";
import cors from "cors";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors());

// Serve static files correctly
const publicPath = path.join(__dirname, "../src/public");
app.use("/public", express.static(publicPath));

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/api/test", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/auth", AuthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
