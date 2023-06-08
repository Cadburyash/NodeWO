const service = require("./service");

exports.signup = (req, res) => {
  console.log("Reached Signup Page", req.body);
  
  service.createuser(req.body, (error, result) => {
    if (error) {
      res.status(500).send({
        error: "Internal Server Error",
      });
    } else {
      res.send({
        message: "Signed Up",
      });
    }
  });
};

exports.login = (req, res) => {
  console.log("Reached Login Page", req.body);
  res.send("Logged in");
};

exports.alluser = (req, res) => {
  res.send({
    users: ["ashish", "bijlee", "niru"],
  });
};
 