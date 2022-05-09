const { connect, connection } = require("mongoose");

connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/mySocialNetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
