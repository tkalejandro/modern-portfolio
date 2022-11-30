// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import ApiError from "../../../types/Api/ApiError";
import { ContactFormRequest, ContactFormResponse } from "../../../types/ContactPage";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactFormResponse | ApiError>
) {
  if (req.method === "POST") {
    try {
      const {
        name,
        email,
        message,
      }: ContactFormRequest = JSON.parse(req.body);
  
      if(name == null || name === '') {
        res.status(422).json({ code: 422,error: `Please write your name`});
        return
      }
  
      if(email == null || email === '') {
        res.status(422).json({ code: 422,error: `Please write your email`});
        return
      }
  
      if(message == null || message === '') {
        res.status(422).json({ code: 422,error: `Please write your message`});
        return
      }
  
      const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
      const data = {
        to: "tk.jalejandro@gmail.com",
        from: "alejandro@100best.guide",
        subject: `${name.toUpperCase()} sent you a message from Contact Form`,
        text: `Email => ${email}`,
        html: msg.replace(/\r\n/g, "<br>"),
      };

      await sgMail.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
    
      res.status(500).json({ code: 500, error: `There was an error sending your message. ${err}`});
    }
  }
}