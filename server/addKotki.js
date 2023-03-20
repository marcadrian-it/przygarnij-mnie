const kotki = require("./scrape/Kotki.json");
const addingKotki = require("./controllers/addingKotki.js");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" });
connectDB();

const batchSize = 10; // Set the number of objects to insert at once
const delayMs = 1000; // Set the delay between batches in milliseconds

async function insertBatch(startIndex) {
  const endIndex = Math.min(startIndex + batchSize, kotki.length);
  const batch = kotki.slice(startIndex, endIndex);

  for (const kotek of batch) {
    await addingKotki.createKotek(kotek);
    console.log(kotek);
  }

  if (endIndex < kotki.length) {
    setTimeout(() => {
      insertBatch(endIndex);
    }, delayMs);
  }
}

insertBatch(0);
