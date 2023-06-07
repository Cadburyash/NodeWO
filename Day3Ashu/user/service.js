const fs = require("fs");

exports.createuser = (data,callback) => {
  fs.appendFile("users.txt", JSON.stringify(data) + "/n", (error) => {
    if (error) {
      callback(error,null)
      console.log("Error in saving the file", error);
    } else {
      callback(null,"success")
      console.log("User is saved", data);
    }
  });
};
