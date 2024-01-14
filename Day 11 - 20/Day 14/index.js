import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser("secret-msg"));
app.use(routes);

app.get("/", (req, res) => {
  res.cookie("msg", "hello world", { maxAge: 60000, signed: true }); // 1m
  res.send("Hello World");
});

/** */
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
