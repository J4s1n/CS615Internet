var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  // First create the collection
  dbo.createCollection("orders", function(err, res) {
    if (err) throw err;
    console.log("Orders collection created!");
    
    // Then insert the order data
    var ordersData = [
      { _id: 1, product_id: 154, status: 1 }
    ];
    
    dbo.collection("orders").insertMany(ordersData, function(err, res) {
      if (err) throw err;
      console.log(res.insertedCount + " orders inserted");
      db.close();
    });
  });
});