const Express = require("express");
const router = Express.Router();

router.post("/signup", (req, res) => {
  console.log("Reached post route for signup");
  res.send({
    message: "Signed up",
  });
});

router.get("/", (req, res) => {
  res.send("This is HomePage");
});

module.exports = router;
