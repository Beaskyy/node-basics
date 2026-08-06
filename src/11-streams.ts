import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

const readableSteam = Readable.from([
  "Hello ",
  "from ",
  "Node.js ",
  "streams!",
]);

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString();
    callback(null, text.toUpperCase());
  },
});

const writeableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log("Recieved chunk", chunk.toString());
    callback();
  },
});

const main = async (): Promise<void> => {
  try {
    await pipeline(readableSteam, uppercaseTransform, writeableStream);
    console.log("Pipeline completed successfully");
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in streams example:", msg);
  }
};

main();
