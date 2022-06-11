import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const data: {
      email: String,
      password: String
    } = request.body

    let loginSuccess: boolean = false;

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err;

      console.log("Successful connection with Database.")

      const db = client.db("Hikegram")

      const query = { "userData.email": data.email }

      db.collection("users").find(query).toArray((err, res) => {
        if (err) throw err;


        if (res.length == 0) {
          console.log("Unsuccessful login.")
          loginSuccess = false
        } else {
          console.log("Successful login.")
        }
      })
    })
  }
}
