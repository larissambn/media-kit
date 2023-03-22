import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  username: { type: Schema.Types.ObjectId, required: true, trim: true, unique: true },
  phoneNumber: { type: Number },
  event: { type: String, enum: ["HOSTESS", "CERIMONAL", "STAFF"], default: "HOSTESS"},  
});

export const UserModel = model("User", userSchema);


