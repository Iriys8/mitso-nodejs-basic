import fs from "fs"

const rename = async () => {
    fs.rename("./src/fs/files/wrongFilename.txt", "./src/fs/files/properFilename.md",(err)=>{
        if (err)
            console.log("FS operation failed)");
    });
};

await rename();