const fs = require("fs")

// Append does not replace the file, it just adds it to the end.
fs.appendFile("append.txt", "Hello I'm Appendfff", (err) => {

    if(err) {
        console.log("Error", err);
        
    } else {
        console.log("File Append Successfully");
        
    }
})