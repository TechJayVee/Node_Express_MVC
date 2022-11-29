const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friend",
    friend: "Elon Musk",
  });
  // res.send(path.join(__dirname, "..", "public", "images", "website.jpg"));
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
