import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const userData: {
      userEmail: String,
      userPassword: String
    } = req.body

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err;

      console.log("Successful connection with Database.")

      const db = client.db("Hikegram")

      const query = { userData: userData.userEmail }

      db.collection("users").findOne(query, (err, res) => {
        if (err) throw err;

        console.log(res)
      })

      // res.status(201).json({ "message": "Successful login." });
    })
  }
}
