const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://bakszy:futball7@cluster0.ov4ny.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  console.log("Successful connection!");
  db.close();
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    res.status(201).json(data);
  }

  // getting data ✅
  // connect to mongodb atlas ❌
  // encrypt password ❌
  // store user in collection ❌
}
