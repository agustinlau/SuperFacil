const Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore({
  projectId: 'superfacilapp',
  // keyFilename: '/path/to/keyfile.json'
});



var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.get("/test", function(req, res) {
      console.log(req);
      const key = datastore.key('test');
      const entity = {
        key: key,
        data: [
          {
            name: 'created',
            value: new Date().toJSON(),
          },
          {
            name: 'description',
            value: 'description test',
            excludeFromIndexes: true,
          },
          {
            name: 'done',
            value: false,
          },
        ],
      };

      datastore.save(entity)
      .then(() => {
        console.log(`Task ${key.id} created successfully.`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
      res.status(200).send("Welcome to our restful API");
    });
    
}
  
module.exports = appRouter;