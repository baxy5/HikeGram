import { connect } from "../../utils/database";

export default function handler(req, res) {

  try {
    const {db} = await connect()
    const {
      userData: { email, password },
    } = req.body;

    const result = await db.collection("users").insertOne({
      data: [email,password],
      createdAt: new Data()
    })

  res.status(201).json(result);


  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to insert..." });
  }

  /* if (req.method === "POST") {
    
 } */
}

// getting data ✅
// connect to mongodb atlas ✅
// encrypt password ❌
// store user in collection ✅
