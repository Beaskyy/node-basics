import os from "node:os";

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Release:", os.release());
console.log("Uptime:", os.uptime());
console.log("Hostname:", os.hostname());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Home Directory:", os.homedir());
console.log("User Info:", os.userInfo());
console.log("cpu", os.cpus().length);