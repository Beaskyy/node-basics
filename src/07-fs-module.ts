import {
  appendFile,
  appendFileSync,
  existsSync,
  mkdirSync,
  readFile,
  readFileSync,
  stat,
  statSync,
  writeFile,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import fsPromises from "node:fs/promises";

const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "demo-folder");

const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt");
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-note.txt");
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-note.txt");

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};

const ensureDemoFolderExists = (): void => {
  if (!existsSync(DEMO_FOLDER_PATH)) {
    mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
};

const readFileSyncExample = (): FileResult => {
  writeFileSync(
    SYNC_FILE_PATH,
    "This is a synchronous file write example.",
    "utf-8",
  );
  appendFileSync(SYNC_FILE_PATH, "\nThis is an appended line.", "utf-8");

  const content = readFileSync(SYNC_FILE_PATH, "utf-8");
  const stats = statSync(SYNC_FILE_PATH);

  return {
    style: "Synchronous",
    fileName: path.basename(SYNC_FILE_PATH),
    content,
    sizeInBytes: stats.size,
  };
};

const runCallbackExample = (): Promise<FileResult> => {
  return new Promise((resolve, reject) => {
    writeFile(
      CALLBACK_FILE_PATH,
      "This is a callback-based file write example.",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        appendFile(
          CALLBACK_FILE_PATH,
          "\nThis is an appended line.",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              stat(CALLBACK_FILE_PATH, (statError, stats) => {
                if (statError) {
                  reject(statError);
                  return;
                }

                resolve({
                  style: "Callback-based",
                  fileName: path.basename(CALLBACK_FILE_PATH),
                  content,
                  sizeInBytes: stats.size,
                });
              });
            });
          },
        );
      },
    );
  });
};

const runPromiseExample = async (): Promise<FileResult> => {
  await fsPromises.writeFile(
    PROMISE_FILE_PATH,
    "This is a promise-based file write example.",
    "utf-8",
  );
  await fsPromises.appendFile(
    PROMISE_FILE_PATH,
    "\nThis is an appended line.",
    "utf-8",
  );

  const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: "Promise-based",
    fileName: path.basename(PROMISE_FILE_PATH),
    content,
    sizeInBytes: stats.size,
  };
};

const main = async (): Promise<void> => {
  try {
    ensureDemoFolderExists();
    const syncResult = readFileSyncExample();
    const callbackResult = await runCallbackExample();
    const promiseResult = await runPromiseExample();
    console.log([syncResult, callbackResult, promiseResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in file system example:", message);
  }
};

main();
