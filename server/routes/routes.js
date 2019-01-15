const Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = Datastore();



var appRouter = function (app) {
    app.get("/", function(req, res) {
      console.log(datastore);
      res.status(200).send("Welcome to our restful API");
    });
}
  
module.exports = appRouter;