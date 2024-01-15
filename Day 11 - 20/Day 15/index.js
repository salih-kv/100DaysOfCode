import express from "express";
import passport from "passport";
import "./strategies/local-strategy.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

app.get("/api/auth/status", (req, res) => {
  console.log(`Inside /auth/status endpoint`);
  console.log(req.user);
  console.log(req.session);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post("/api/auth/logout", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.send(200);
  });
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
