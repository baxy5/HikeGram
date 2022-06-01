import { connect } from "../../utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userData = req.body;
    res.status(201).json(userData);
    /* try {
      // runs the "connect" function then return "db"
      const { db } = await connect();
      const {
        userData: { email, password },
      } = req.body;

      const result = await db.collection("users").insertOne({
        data: [email, password],
        createdAt: new Data(),
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
