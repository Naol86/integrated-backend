import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { User } from "@prisma/client";

configDotenv();

export const generateAccessToken = (user: User) => {
  try {
    const accessTokenSecret = process.env.JWT_SECRET as string;
    const payload = {
      email: user.email,
      id: user.id,
      profile_picture: user.profilePicture,
    };
    const token = jwt.sign(payload, accessTokenSecret, { expiresIn: "1d" });
    return token;
  } catch (error) {
    return;
  }
};
