// import file json files from scrape folder
const Piesek = require("../models/Piesek");

module.exports = {
  createPiesek: async (piesek) => {
    try {
      await Piesek.create({
        name: piesek.name,
        id: piesek.id,
        registration_date: piesek.registration_date,
        species: piesek.species,
        size: piesek.size,
        description: piesek.description,
        imgUrl: piesek.imgUrl,
      });
      console.log("Piesek has been added!");
    } catch (err) {
      console.log(err);
    }
  },
};
