const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf-8");
// console.log("sync Output");


fs.readFile("data.txt", "utf-8", (err, data) => {
    if(err) {
        // console.log("Error", err);
    }else {
        console.log("Async Output:");
        // console.log(data);
    }
    
})
