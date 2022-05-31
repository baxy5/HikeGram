/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://bakszy:bakszy@cluster0.ov4ny.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
