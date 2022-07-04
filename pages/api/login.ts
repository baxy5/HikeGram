import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const data: {
      email: String,
      password: String
    } = request.body

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err;

      console.log("Successful connection with Database.")

      const db = client.db("Hikegram")

      const query = { "userData.email": data.email }

      db.collection("users").find(query).toArray((err, res) => {
        if (err) throw err;


        if (res.length == 0) {
          console.log("Account not found. Sign up!")
          response.status(404).json({ "message": "Account not found." })
        } else if (res[0].userData.password != data.password) {
          console.log("Password is wrong.")
          response.status(401).json({ "message": "Wrong password." })
        }
        else {
          console.log("Successful login.")
          response.status(200).json({ "message": "OK" })
        }
      })
    })
  }
}
