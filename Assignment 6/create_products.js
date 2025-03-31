var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  // Drop the collection if it exists
  dbo.collection("products").drop(function(err, dropSuccess) {
    // Ignore error if collection doesn't exist
    
    // Create the collection and insert data
    var productsData = [
      { _id: 154, name: 'Chocolate Heaven' },
      { _id: 155, name: 'Tasty Lemons' },
      { _id: 156, name: 'Vanilla Dreams' }
    ];
    
    dbo.collection("products").insertMany(productsData, function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " products inserted");
      db.close();
    });
  });
});