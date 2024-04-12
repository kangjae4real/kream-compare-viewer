const Axios = require("axios");
const dotenv = require("dotenv");
const { writeFile } = require("node:fs");

dotenv.config();

const axios = Axios.create({
  baseURL: process.env.REST_API_URL,
});

const getDocs = async () => {
  const response = await axios.get("/docs-yaml");
  return response.data;
};

const main = async () => {
  console.log("Generate API Docs");
  console.log("Fetch API Docs...");

  const docs = await getDocs();

  if (!docs) {
    console.log(`Fetch failed. GET ${process.env.REST_API_URL}/docs-yaml`);
    process.exit(1);
  }

  console.log("Write ./docs/docs.yaml...");

  await writeFile("./docs/api-docs.yaml", docs, (err) => {
    if (err) {
      console.log("Write file failed.");
      console.log(err);
      process.exit(1);
    }
  });

  console.log("Generate API Docs Done!");
};

main();
