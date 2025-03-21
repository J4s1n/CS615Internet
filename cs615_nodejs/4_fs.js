var fs = require('fs'); 

// Read the file synchronously
var readMe = fs.readFileSync('readMe.txt', 'utf8');

// Output the contents of the file to the console
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     console.log('File read!');
//     });
//     console.log('After Reading.');
    

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log('File read!');
    fs.writeFile('writeMe.txt', data, function(err, data){
    console.log('File written!');
    });
   });
   console.log('This is some code after the read-write code');