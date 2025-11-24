const os = require("os");

// 1. Platform
console.log("Platform:", os.platform());

// 2. CPU Architecture
console.log("CPU Architecture:", os.arch());

// 3. CPU Details
console.log("CPU Details:", os.cpus());

// 4. Free Memory (bytes)
console.log("Free Memory:", os.freemem());

// 5. Total Memory (bytes)
console.log("Total Memory:", os.totalmem());

// 6. Home Directory
console.log("Home Directory:", os.homedir());

// 7. Host Name
console.log("Host Name:", os.hostname());

// 8. OS Type
console.log("OS Type:", os.type());

// 9. Uptime (in seconds)
console.log("System Uptime:", os.uptime(), "seconds");

// 10. Network Interfaces
console.log("Network Interfaces:", os.networkInterfaces());

// 11. Temp Directory
console.log("Temp Directory:", os.tmpdir());

// 12. OS Release Version
console.log("OS Release:", os.release());
