import { MongoClient } from "mongodb";
const url = process.env.MONGO_URL;

const client = new MongoClient(url, {
  useNewUrlParser: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("hikegram");
  return { db, client };
}

export default connect;

/* MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  console.log("Successful connection!");

  

  let dbo = db.db("Hikegram");

  dbo.collection("users").insertOne(userData, (err, res) => {
    if (err) throw err;

    console.log("User added.");
    db.close();
  });
}); */
