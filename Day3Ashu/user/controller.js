exports.signup = (req, res) => {
  console.log("Reached Signup Page", req.body);
  res.send("Signed up");
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
