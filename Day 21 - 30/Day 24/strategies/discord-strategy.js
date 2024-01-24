import dotenv from "dotenv";
import passport from "passport";
import { Strategy } from "passport-discord";
import { DiscordUser } from "../models/discord-user.js";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await DiscordUser.findById(id);
    return user ? done(null, user) : done(null, null);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/discord/redirect",
      scope: ["identify"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let user;

      try {
        user = await DiscordUser.findOne({ discordId: profile.id });
      } catch (err) {
        return done(err, null);
      }

      try {
        if (!user) {
          const newUser = await DiscordUser.create({
            username: profile.username,
            discordId: profile.id,
          });
          return done(null, newUser);
        }
        return done(err, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
