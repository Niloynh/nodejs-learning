const fs = require("fs");
const path = require("path");

const targetFolder = path.join(__dirname, "files");
const organizedFolder = path.join(__dirname, "organized");

// create organized folder
if (!fs.existsSync(organizedFolder)) {
    fs.mkdirSync(organizedFolder);
    console.log("Organized folder created");
}

// category mapping
const categories = {
    images: [".png", ".jpg", ".jpeg"],
    videos: [".mp4", ".mkv"],
    music: [".mp3"],
    documents: [".txt", ".pdf"],
    json: [".json"],
    code: [".js", ".ts"]
};

// read files from folder
const files = fs.readdirSync(targetFolder);

files.forEach(file => {

    const filePath = path.join(targetFolder, file);

    // skip if directory
    if (fs.lstatSync(filePath).isDirectory()) return;

    // extension
    const ext = path.extname(file).toLowerCase();

    let category = "others";

    // match extension
    for (let key in categories) {
        if (categories[key].includes(ext)) {
            category = key;
            break;
        }
    }

    // destination folder
    const destFolder = path.join(organizedFolder, category);

    if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder);
    }

    const destPath = path.join(destFolder, file);

    fs.rename(filePath, destPath, (err) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log(`${file} → ${category}`);
        }
    });
});
