import dotenv from "dotenv";
dotenv.config();
import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxa6cfa532199f4e4abb76ccc33d474d37.mailgun.org",
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "kko0831@hanmail.net", // 본인의 이메일로 변경
    to: "kko0831@hanmail.net", // 본인의 이메일로 변경
    subject,
    html,
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello~ ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://number.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
