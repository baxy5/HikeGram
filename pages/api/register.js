import { connect } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // runs the "connect" function then return "db"
      const { db } = await connect();
      const { userEmail, userPassword } = JSON.parse(req.body);

      const result = await db.collection("users").insertOne({
        userData: [userEmail, userPassword],
        createdAt: new Data(),
      });

      res.status(201).json(result);
    } catch (e) {
      res.status(500);
      res.json({ error: "Unable to insert..." });
    }
  }
}

// getting data ✅
// connect to mongodb atlas ✅
// encrypt password ❌
// store user in collection ✅
