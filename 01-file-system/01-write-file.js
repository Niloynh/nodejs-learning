const fs = require("fs")

// write replaces the file
fs.writeFile("text.txt", "hello Niloy!!", (err) => {

   if(err) {
      console.log("Error", err);
   }else {
      console.log("File Created & written Successfully");
   }
   
});

