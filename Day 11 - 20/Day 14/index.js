import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import session from "express-session";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser("secret-msg"));
app.use(
  session({
    secret: "EdhYenNfeOJiLfIE",
    saveUninitialized: false, // prevent saving uninitialized sessions
    resave: false, // prevent unnecessary writes for unmodified sessions
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
//
app.use(routes);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
  req.session.visited = true;
  res.cookie("msg", "hello world", { maxAge: 60000 * 60, signed: true }); // 1h
  res.send("Hello World");
});

/** */
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
