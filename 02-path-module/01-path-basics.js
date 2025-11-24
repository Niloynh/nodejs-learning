const path = require("path");

// join 
console.log("JOIN:", path.join("folder", "test", "file.txt"));

// resolve
console.log("RESOLVE:", path.resolve("folder", "file.txt"));

// normalize
console.log("NORMALIZE:", path.normalize("folder/../test/file.txt"));

// absolute check
console.log("IS ABSOLUTE:", path.isAbsolute("/user/docs"));

// basename
console.log("BASENAME:", path.basename("/home/niloy/app.js"));

// dirname
console.log("DIRNAME:", path.dirname("/home/niloy/app.js"));

// extname
console.log("EXTENSION:", path.extname("video.mp4"));

// parse
console.log("PARSED:", path.parse("/home/niloy/project/app.js"));

// format
const obj = { dir: "/home/niloy/project", name: "app", ext: ".js" };
console.log("FORMAT:", path.format(obj));

// relative
console.log("RELATIVE:", path.relative("/home/niloy", "/home/niloy/project/app.js"));

// sep
console.log("SEP:", path.sep);

// delimiter
console.log("DELIMITER:", path.delimiter);
