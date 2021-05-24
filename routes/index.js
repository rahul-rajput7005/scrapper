var express = require("express");
var router = express.Router();
var Meta = require("html-metadata-parser");

/* GET home page. */
router.post("/scrapper", function (req, res, next) {
  Meta.parser(
    req.body.url,
    function (err, result) {
      
      res.status(200).json({...result.meta, ...result.og});
    }
  );
});

module.exports = router;
