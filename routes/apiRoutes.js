
const router = require("express").Router();

// get to only display data
router.get("/api", function (req, res) {
  result = [
    {
      message: "hi there",
      count: 10
    }
  ];
  console.log(result);
  res.json(result);
});

// post to handle data from user
// router.post("/api", function (req, res) {
//   result = [{message: "hi there"}];
//   res.json(result);
// });

module.exports = router;
