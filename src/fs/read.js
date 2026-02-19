import fs from "fs"
import path from "path"

const read = async () => {
    const filePath = path.resolve("./src/fs/files/fileToRead.txt");
    await fs.readFile(filePath, { encoding: 'utf8' }, (err, content) => {
        if (err) {
            console.log("FS operation failed");
            return;
        }
        console.log(content);
    });
};

await read();