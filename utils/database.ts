import { MongoClient } from "mongodb";

/* const client = new MongoClient(process.env.MONGO_URL);

async function connect() {

  try {
    client.connect()
    const db = client.db("Hikegram")

    return { db, client }
  } catch (err) {
    console.log(err)
  }
}

export { connect }; */

/* if (!client.isConnected()) await client.connect();
  const db = client.db("Hikegram");
  return { db, client }; */


const client = MongoClient.connect(process.env.MONGO_URL, function (err, db) {
  if (err) throw err;

  console.log("Successful connection!");



  /* let dbo = db.db("Hikegram");

  dbo.collection("users").insertOne(userData, (err, res) => {
    if (err) throw err;

    console.log("User added.");
    db.close();
  }); */
});

export default client
