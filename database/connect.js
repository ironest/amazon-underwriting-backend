const mongoose = require("mongoose");

/*
 Current Server Discovery and Monitoring engine is deprecated,
 and will be removed in a future version. To use the new Server Discover
 and Monitoring engine, pass option { useUnifiedTopology: true }
 to the MongoClient constructor.
*/

mongoose.connect(
  process.env.DB_HOST,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);