("use strict");
const express = require("express");
const app = express();
const axios = require("axios");
const { URL } = require("url");
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  res.json({ Message: "Welcome to my Express App" });
});

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: "URL parameter is missing" });
  }

  const validUrls = [];
  const invalidUrls = [];

  for (const url of urls) {
    try {
      new URL(url);
      validUrls.push(url);
    } catch (error) {
      invalidUrls.push(url);
    }
  }

  const responses = await Promise.allSettled(
    validUrls.map((url) =>
      axios
        .get(url)
        .then((response) => response.data.numbers)
        .catch(() => [])
    )
  );

  const validResponses = responses
    .filter((response) => response.status === "fulfilled")
    .map((response) => response.value)
    .flat();

  const uniqueSortedNumbers = [...new Set(validResponses)].sort(
    (a, b) => a - b
  );

  if (invalidUrls.length > 0) {
    return res
      .status(400)
      .json({ error: "Invalid URLs: " + invalidUrls.join(", ") });
  }

  return res.json({ numbers: uniqueSortedNumbers });
});
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}!`);
});

module.exports = app;
