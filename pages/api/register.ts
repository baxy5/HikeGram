/* import { connect } from "../../utils/database"; */
const client = require("../../utils/database")
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    /* const userData: { userEmail, userPassword } = req.body;
    res.status(201).json(userData); */
    const db = client.db("Hikegram");
    const userData: { userEmail: string, userPassword: string } = req.body;

    const result = await db.collection("users").insertOne({
      userData,
      createdAt: new Date(),
    });

    res.status(201).json(result);
    /* try {
      const { db } = await connect();
      const userData: { userEmail: string, userPassword: string } = req.body;

      const result = await db.collection("users").insertOne({
        userData,
        createdAt: new Date(),
      });

      res.status(201).json(result);
    } catch (e) {
      res.status(500);
      res.json({ error: "Unable to insert..." });
    } */
  }
}

// getting data ✅
// connect to mongodb atlas ✅
// encrypt password ❌
// store user in collection ✅
