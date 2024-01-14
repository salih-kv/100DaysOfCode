import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import session from "express-session";
import { mockUsers } from "./utils/constants.js";

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

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  const user = mockUsers.find((user) => user.username == username);
  if (!user || user.password !== password) {
    return res.status(401).send({ msg: "BAD CREDENTIALS" });
  }

  req.session.user = user;
  return res.status(200).send(user);
});

app.get("/api/auth/status", (req, res) => {
  req.sessionStore.get(req.sessionID, (err, session) => {
    console.log(session);
  });

  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "Not Authenticated" });
});

app.post("/api/cart", (req, res) => {
  if (!req.session.user) return res.sendStatus(401);

  const { body: item } = req;
  const { cart } = req.session;
  if (cart) {
    cart.push(item);
  } else {
    req.session.cart = [item];
  }

  return res.send(201).send(item);
});

app.get("/api/cart", (req, res) => {
  if (!req.session.user) return res.sendStatus(401);
  return res.send(req.session.cart ?? []);
});

/** */
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
