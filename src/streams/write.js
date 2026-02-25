import fs from 'fs'

const write = async () => {
    const stream = fs.createWriteStream('./src/streams/files/fileToWrite.txt', 'utf8');
    process.stdin.pipe(stream);
};

await write();