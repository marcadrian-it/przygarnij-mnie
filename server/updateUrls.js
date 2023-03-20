require("dotenv").config({ path: "./config/.env" });
const piesek = require("./models/Piesek");
const connectDB = require("./config/database");
const lista = [];
const updateDB = async () => {
  try {
    await connectDB();
    const Piesek = piesek;
    for (const el of lista) {
      const doc = await Piesek.findByIdAndUpdate(
        el.originalId,
        { $set: { imgUrl: el.secure_url } },
        { new: true }
      );
      console.log(doc);
    }
  } catch (error) {
    console.log(error);
  }
};
updateDB();
