import { NextApiRequest, NextApiResponse } from "next"
import { MongoClient } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {

        MongoClient.connect(process.env.MONGO_URL, (err, client) => {
            if (err) throw err;

            console.log("Successful connection with Database.")

            const db = client.db("Hikegram")

            db.collection("post").find({}).toArray((err, result) => {
                if (err) throw err;

                res.status(200).send(result)
                console.log("Data retrieve successful: " + result.length)
            })
        })
    }
}