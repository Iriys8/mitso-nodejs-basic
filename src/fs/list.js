import fs from "fs"

const list = async () => {
    await fs.readdir("./src/fs/files", (err, files) => {
        if (err) {
            console.log("FS operation failed");
            return;
        }
        for (const item of files)
            console.log(item);
    });
};

await list();