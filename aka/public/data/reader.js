var filePath = process.argv[2];
var iconv = require('iconv-lite');
var fs = require("fs");
var csv = require("./csv");
csv(filePath);
fs.readFile(filePath,{encoding:"utf-8"}, function(error, data){
    
    console.log("reader.js실행");
});
// fs.readFile(filePath,{encoding:"utf-8"}, function(error, data){
//     //console.log(data);
//     //console.log("good");
// });
