const Express = require("express");
const router = Express.Router();

router.post("/signup", (req, res) => {
  console.log("Reached post route for signup");
  res.send({
    message: "Signed up",
  });
});

module.exports = router;
