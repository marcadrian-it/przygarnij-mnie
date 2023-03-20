const pieski = require("./scrape/Pieski.json");
const addingPieski = require("./controllers/addingPieski.js");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" });
connectDB();

const batchSize = 10; // Set the number of objects to insert at once
const delayMs = 1000; // Set the delay between batches in milliseconds

async function insertBatch(startIndex) {
  const endIndex = Math.min(startIndex + batchSize, pieski.length);
  const batch = pieski.slice(startIndex, endIndex);

  for (const piesek of batch) {
    await addingPieski.createPiesek(piesek);
    console.log(piesek);
  }

  if (endIndex < pieski.length) {
    setTimeout(() => {
      insertBatch(endIndex);
    }, delayMs);
  }
}

insertBatch(0);
