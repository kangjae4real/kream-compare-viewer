import Axios from "axios";
import dotenv from "dotenv";
import { writeFile } from "node:fs";

dotenv.config();

const axios = Axios.create({
  baseURL: process.env.REST_API_URL,
});

console.log("Fetch API Docs...");

const { data: docs } = await axios.get<string>("/docs-yaml");

if (!docs) {
  console.log(`Fetch failed. GET ${process.env.REST_API_URL}/docs-yaml`);
  process.exit(1);
}

console.log("Write ./docs/docs.yaml...");

writeFile("./docs/api-docs.yaml", docs, (err) => {
  if (err) {
    console.log("Write file failed.");
    console.log(err);
    process.exit(1);
  }
});

console.log("Done!");
