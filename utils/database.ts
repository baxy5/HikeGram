import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("Hikegram");
  return { db, client };
}

export { connect };

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
