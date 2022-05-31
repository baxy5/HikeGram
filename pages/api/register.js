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
