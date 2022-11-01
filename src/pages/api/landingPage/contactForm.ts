// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  console.log("req!!!!", req.body)
    try {
      if(req.method === 'POST') {
        return res.status(200).json({name: 'success'})
      }
      res.status(200).json({ name: 'John Doe' })
    } catch (e){
      console.log("Error:" ,e)
    }
  
}
