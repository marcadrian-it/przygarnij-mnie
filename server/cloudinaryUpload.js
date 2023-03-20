require("dotenv").config({ path: "./config/.env" });
const kotek = require("./models/Kotek");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const connectDB = require("./config/database");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async () => {
  try {
    await connectDB();
    const Lista = [];
    const Kotek = kotek;
    const kotki = await Kotek.find({});

    const uploadPromises = kotki.map((element) => {
      const image = element.imgUrl;
      const originalName = element.name;
      const originalId = element._id;

      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          image,
          { public_id: originalName, tags: `kotek` },
          function (error, result) {
            if (error) {
              reject(error);
            } else {
              result.originalId = originalId;
              Lista.push(result);
              resolve();
            }
          }
        );
      });
    });

    await Promise.all(uploadPromises);

    fs.writeFileSync("Lista.txt", JSON.stringify(Lista));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
uploadCloudinary();
