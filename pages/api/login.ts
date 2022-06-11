import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data: {
      email: String,
      password: String
    } = req.body

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err;

      console.log("Successful connection with Database.")

      const db = client.db("Hikegram")

      const query = { "userData.email": data.email }

      db.collection("users").find(query).toArray((err, res) => {
        if (err) throw err;

        console.log(res)
      })
    })
  }
}
