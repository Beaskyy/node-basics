import path from "node:path";

const projectRoot = process.cwd();

console.log("Project Root:", projectRoot);

const userId = "42";
const originalName = "profile.photo.png";

// path.join does not create a folder, it only creates the path string. You need to create the folder using fs.mkdirSync or fs.promises.mkdir before saving the file.
// it does not check if the file exists
const uploadFilePath = path.join(
  projectRoot,
  "uploads",
  "users",
  userId,
  originalName,
);
console.log("Upload File Path:", uploadFilePath);

const fileName = path.basename(uploadFilePath);
console.log("File Name:", fileName);

const fileExtension = path.extname(uploadFilePath);
console.log("File Extension:", fileExtension);

const directoryPath = path.dirname(uploadFilePath);
console.log("Directory Path:", directoryPath);

const normalizedPath = path.normalize(uploadFilePath);
console.log("Normalized Path:", normalizedPath);

const relativePath = path.relative(projectRoot, uploadFilePath);
console.log("Relative Path:", relativePath);

const isAbsolutePath = path.isAbsolute(uploadFilePath);
console.log("Is Absolute Path:", isAbsolutePath);


