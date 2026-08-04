const bufferText = Buffer.from("Node");
console.log(bufferText);
console.log(bufferText.toString("utf-8"));
console.log(bufferText.length);

// alloc
const fixedBuffer = Buffer.alloc(5);
console.log("empty buffer:", fixedBuffer);

fixedBuffer.write("API")
console.log("fixed buffer after write:", fixedBuffer);
console.log("fixed buffer to string:", fixedBuffer.toString("utf-8"));

// chunks

const chunks = [Buffer.from("Hello "), Buffer.from("Node "), Buffer.from("JS")];

const combinedBuffer = Buffer.concat(chunks);
console.log("combined buffer:", combinedBuffer);
console.log("combined buffer to string:", combinedBuffer.toString("utf-8"));