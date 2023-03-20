const connectDB = require("./config/database");
const piesek = require("./models/Piesek");
require("dotenv").config({ path: "./config/.env" });

const updateDB = async () => {
  try {
    await connectDB();

    const Piesek = piesek;
    await Piesek.updateMany(
      {},
      {
        $set: {
          registration_date: JSON.stringify({
            $regexReplace: {
              input: "$registration_date",
              find: "Data rejestracji: ",
              replacement: "",
            },
          }),
        },
      }
    );

    console.log("Successfully updated database.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

updateDB();
