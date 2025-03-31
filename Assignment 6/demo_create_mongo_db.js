var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// // // const { MongoClient } = require('mongodb');
// // // const url = "mongodb://localhost:27017";
// // // const dbName = "mydb";

// // // MongoClient.connect(url, function(err, client) {
// // //   if (err) throw err;

// // //   const db = client.db(dbName);
// // //   console.log("Database connected!");

// // //   // Insert a test document to ensure DB is saved
// // //   db.collection("customers").insertOne({ name: "Alice", age: 30 }, function(err, res) {
// // //     if (err) throw err;
// // //     console.log("1 document inserted");
// // //     client.close();
// // //   });
// // // });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// console.log("🔄 Starting connection...");

// MongoClient.connect(url, function(err, client) {
//   if (err) {
//     console.error("❌ Connection error:", err);
//     return;
//   }

//   console.log("✅ Connected to MongoDB!");

//   var db = client.db("mydb");

//   db.collection("customers").insertOne({ name: "Alice", age: 30 }, function(err, res) {
//     if (err) {
//       console.error("❌ Insert error:", err);
//     } else {
//       console.log("✅ Document inserted:", res.insertedId);
//     }

//     client.close();
//     console.log("🔚 Connection closed.");
//   });
// });
