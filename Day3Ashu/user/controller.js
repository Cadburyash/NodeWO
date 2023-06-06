exports.Signup = (req, res) => {
  console.log("Reached Signup Page", req.body);
  res.send("Signed up");
};

exports.Login = (req, res) => {
  console.log("Reached Login Page", req.body);
  res.send("Logged in");
};
