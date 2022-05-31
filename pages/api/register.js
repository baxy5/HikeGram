const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    res.status(201).json(data);

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;

      console.log("Successful connection!");

      let userData = {
        email: data.email,
        password: data.password,
      };

      let dbo = db.db("Hikegram");

      dbo.collection("users").insertOne(userData, (err, res) => {
        if (err) throw err;

        console.log("User added.");
        db.close();
      });
    });
  }

  // getting data ✅
  // connect to mongodb atlas ✅
  // encrypt password ❌
  // store user in collection ✅
}
