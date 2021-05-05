const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

const mongodb =
  // "mongodb+srv://kspoth08:Scooter%231@cluster0.lpwr4.mongodb.net/crypto?retryWrites=true&w=majority";
  // mongodb+srv://<username>:<password>@cluster0.lpwr4.mongodb.net/myFirstDatabase?retryW"rites=true&w=majority
  "mongodb+srv://kspoth08:Scooter%231@budget.svtlf.mongodb.net/crypto?retryWrites=true&w=majority";

// Connect to the Mongo DB
mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(function () {
    console.log("MongoDB Connected");
  })
  .catch(function () {
    console.log("MongoDB not connected");
  });

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
