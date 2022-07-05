import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body

        MongoClient.connect(process.env.MONGO_URL, (err, client) => {
            if (err) throw err;

            console.log("Successful connection with Database.")

            const db = client.db("Hikegram")

            db.collection("post").insertOne({
                data,
                createdAt: new Date(),
            });

            res.status(201).json({ "message": "Post stored." })
            console.log("Post stored.")
        })
    }
}