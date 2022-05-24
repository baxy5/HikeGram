/* function handler(req, res) {
  const body = req.body;

  console.log("body: ", body);

  res.status(200).json({ data: `${body.email} ${body.password}` });
}

export default handler; */

export default function handler() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/register";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`You data: ${result.data}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Submit</button>
    </form>
  );
}
