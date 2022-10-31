// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require("express");
const { db, Country, TuristActivities } = require("../db.js");
const controller = require("../controller/index.js");
const router = Router();

//GET COUNTRIES
router.get("/getAllCountries", async (req, res) => {
  try {
    res.status(200).json(await controller.DBCountries());
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

//DETAIL ROUTE
router.get("/getCountryById/:idParams", async (req, res) => {
  const { idParams } = req.params;

  try {
    const findById = await Country.findOne({
      where: {
        id: idParams,
      },
      include: [TuristActivities],
    });

    res.status(200).json(!findById ? "country not found" : findById);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

//FIND COUNTRY BU QUERY
router.get("/getCountryByName", async (req, res) => {
  const { countryName } = req.query;
  try {
    const findByQuery = await Country.findOne({
      where: {
        name: countryName,
      },
    });
    res.status(200).json(!findByQuery ? "Name not found" : findByQuery);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
});

//CREATE ACTIVITIES
router.post("/createActivities", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  console.log(req.body);

  try {
    const searchCountries = await Country.findAll({
      where: {
        name: countries,
      },
    });

    const activity = await TuristActivities.create({
      name,
      difficulty,
      duration,
      season,
      countries,
    });

    activity.addCountries(searchCountries);

    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
