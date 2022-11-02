// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import { Transporter } from 'nodemailer'
import { ContactInformation } from '../../../constants'
import { ContactFormRequest, ContactFormResponse } from '../../../types/LandingPage'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ContactFormResponse | unknown>
) => {
  try {
    if (req.method === 'POST') {
      
      const request: ContactFormRequest = req.body
      const { name, email, message } = request

      const nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        secure: true,
      });

      const mailData = {
        from: email,
        to: process.env.EMAIL,
        subject: `Message From ${name}`,
        text: req.body.message,
        //html: `<div>${message}</div>`
      }

      transporter.sendMail(mailData, function (err: unknown, info: unknown) {
        if (err) {
          console.log("email not sent")
          console.log(err)
          return res.status(500).json({message: 'Email not sent'})
        }
        console.log("info ------>", info)
        console.log("Email was sent")
        return res.status(200).json({ message: 'Email was sent' })
      })
    }
  } catch (e) {
  
    console.log("Error:", e)
    return res.status(500).json(e)
  }
}

export default handler