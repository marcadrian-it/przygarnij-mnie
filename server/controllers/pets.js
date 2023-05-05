const Kotek = require("../models/Kotek");
const Piesek = require("../models/Piesek");

module.exports = {
  getPets: async (req, res) => {
    try {
      if (!req.query.id) {
        const animal = req.query.animal?.toLowerCase();
        const name = req.query.name;
        const date = req.query.date;
        if (!animal) {
          const koteks = await Kotek.find({
            name: { $regex: name, $options: "i" },
            registration_date: { $gte: date },
          }).sort({ registration_date: 1 });

          const pieseks = await Piesek.find({
            name: { $regex: name, $options: "i" },
            registration_date: { $gte: date },
          }).sort({ registration_date: 1 });

          pets = koteks.concat(pieseks);
          pets.sort((a, b) =>
            a.registration_date.localeCompare(b.registration_date)
          );
        } else if (animal === "kot") {
          pets = await Kotek.find({
            species: animal,
            name: { $regex: name, $options: "i" },
            registration_date: { $gte: date },
          }).sort({ registration_date: 1 });
        } else if (animal === "pies") {
          pets = await Piesek.find({
            species: animal,
            name: { $regex: name, $options: "i" },
            registration_date: { $gte: date },
          }).sort({ registration_date: 1 });
        } else {
          return res.status(400).json({ message: "Nieprawidłowy gatunek" });
        }
      } else {
        const id = req.query.id;
        const kotek = await Kotek.findOne({ _id: id });
        const piesek = await Piesek.findOne({ _id: id });
        pets = [kotek, piesek];
        pets = pets.filter((pet) => pet !== null);
      }

      let newDict = {
        numberOfResults: pets.length,
        startIndex: 0,
        endIndex: pets.length - 1,
        hasNext: false,
        pets: [],
      };

      pets.forEach((obj) => {
        let newPet = {
          id: obj["_id"],
          name: obj["name"],
          animal: obj["species"],
          registration_date: obj["registration_date"],
          description: obj["description"],
          imgUrl: obj["imgUrl"],
        };
        newDict["pets"].push(newPet);
      });

      res.json(newDict);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
