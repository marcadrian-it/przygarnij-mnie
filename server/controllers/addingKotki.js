// import file json files from scrape folder
const Kotek = require("../models/Kotek");

module.exports = {
  createKotek: async (kotek) => {
    try {
      await Kotek.create({
        name: kotek.name,
        id: kotek.id,
        registration_date: kotek.registration_date,
        species: kotek.species,
        size: kotek.size,
        description: kotek.description,
        imgUrl: kotek.imgUrl,
      });
      console.log("Kotek has been added!");
    } catch (err) {
      console.log(err);
    }
  },
};
