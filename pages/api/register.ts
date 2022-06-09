import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {

    const userData: { userEmail: string, userPassword: string } = req.body;

    MongoClient.connect(process.env.MONGO_URL, (err, client) => {
      if (err) throw err

      console.log("Successful connection with Database.")

      const db = client.db("Hikegram")

      db.collection("users").insertOne({
        userData,
        createdAt: new Date(),
      });

      res.status(201).json({ "message": "User added" });
      res.redirect("/")
    })
  }
}

// getting data ✅
// connect to mongodb atlas ✅
// encrypt password ❌
// store user in collection ✅
