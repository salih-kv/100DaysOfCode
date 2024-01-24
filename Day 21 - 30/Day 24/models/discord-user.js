import { Schema, model } from "mongoose";

const DiscordUserSchema = Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  discordId: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
});

export const DiscordUser = model("DiscordUser", DiscordUserSchema);
