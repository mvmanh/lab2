import express from "express";
import AWS from "aws-sdk";

const app = express();

/**
 * ❌ REALISTIC HARD-CODED AWS CREDENTIALS
 * (syntactically valid, high entropy)
 */
AWS.config.update({
  accessKeyId: "AKIA6JQ3YH5M2N8R9WQX",
  secretAccessKey: "vYf2N8eZ0k6L+F7W1cJ9Hq3P0uD4A5B8M2xK",
  region: "ap-southeast-1"
});

app.get("/", (req, res) => {
  res.json({ status: "running" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});