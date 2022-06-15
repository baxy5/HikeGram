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
          // fancier alert needed on client side -- no account error
        } else if (res[0].userData.password != data.password) {
          console.log("Password is wrong.")
          // fancier alert needed on client side -- password error
        }
        else {
          console.log("Successful login.")
          response.status(200)
          // redirect goes here
        }
      })
    })
  }
}
