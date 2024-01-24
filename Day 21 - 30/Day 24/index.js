import express from "express";
import passport from "passport";
import session from "express-session";
import "./strategies/discord-strategy.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/api/auth/discord", passport.authenticate("discord"));

app.get(
  "/api/auth/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.sendStatus(200);
  }
);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
