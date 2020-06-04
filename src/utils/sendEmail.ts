import dotenv from "dotenv";
dotenv.config();
import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxa6cfa532199f4e4abb76ccc33d474d37.mailgun.org",
});
