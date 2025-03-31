var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://127.0.0.1:27017/";

// // Add the options object with useUnifiedTopology
// const options = { useUnifiedTopology: true };

// MongoClient.connect(url, options, function(err, db) {
//   if (err) throw err;
//   const dbo = db.db("mydb");
  
//   // Products collection data
//   const productsData = [
//     { _id: 154, name: 'Chocolate Heaven' },
//     { _id: 155, name: 'Tasty Lemons' },
//     { _id: 156, name: 'Vanilla Dreams' }
//   ];
  
//   // Orders collection data
//   const ordersData = [
//     { _id: 1, product_id: 154, status: 1 }
//   ];
  
//   // Create products collection
//   dbo.collection("products").insertMany(productsData, function(err, res) {
//     if (err) throw err;
//     console.log(`${res.insertedCount} products inserted`);
    
//     // Create orders collection
//     dbo.collection("orders").insertMany(ordersData, function(err, res) {
//       if (err) throw err;
//       console.log(`${res.insertedCount} orders inserted`);
      
//       // Now demonstrate a $lookup (left join)
//       dbo.collection("orders").aggregate([
//         {
//           $lookup: {
//             from: "products",
//             localField: "product_id",
//             foreignField: "_id",
//             as: "product_details"
//           }
//         }
//       ]).toArray(function(err, result) {
//         if (err) throw err;
//         console.log("\nJoin result:");
//         console.log(JSON.stringify(result, null, 2));
//         db.close();
//       });
//     });
//   });
// });