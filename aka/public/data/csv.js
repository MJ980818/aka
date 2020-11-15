var path = require("path");
var fs = require("fs");
const iconv = require("iconv-lite");
var filePath = path.join(__dirname, "data.csv");

module.exports = function(filePath){

    //const stream = fs.createWriteStream(filePath);
    //var data = iconv.encode('euc-kr');
    var data = fs.readFileSync(filePath);
    // var data = fs.readFileSync(filePath, {encoding: "utf8"});
    
    let euckrStr = iconv.decode(data, 'euc-kr');
    //console.log(data);
    // console.log(euckrStr);
    //var rows = data.split(",");
    var rows = euckrStr.split(",");
    var result = [];

    for (var rowIndex in rows){
        var row = rows[rowIndex].split(",");

        if(rowIndex === "0"){
            var columns = row;
        }else{
            var output = {};
            for(var columnIndex in columns){
                var column = columns[columnIndex];
                output[column] = row[columnIndex];

            }
            result.push(output);
        }
    }
    //console.log("csv.js")
    console.log(result);
    fs.writeFileSync('result.csv', result, {encoding:'binary'});
    
}