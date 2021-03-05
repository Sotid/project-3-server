const express = require("express");
const router = express.Router();
const Kanji = require("../models/kanji.model");


// Shows the dictionary
router.get("/", (req, res, next) => {
  Kanji.find({grade:1})
    .limit(30)
    .then((allKanjis) => {
      res.status(200).json(allKanjis);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Shows search results

// router.get("/search",  (req, res, next) => {
// const searchKanji = req.query.search;

//   Kanji.find({ kanji:  {searchKanji} })
//   .then(
//     (found) => {

//         res.status(200).json(found);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });

// });

router.get("/search", (req, res, next) => {
  const searchKanji = req.query.meanings;
  Kanji.find({ meanings: { searchKanji } })
    .then((found) => {
      res.status(200).json(found);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
