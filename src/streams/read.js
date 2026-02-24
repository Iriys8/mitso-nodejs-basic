import fs from 'fs'

const read = async () => {
    const stream = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf8');
    stream.pipe(process.stdout);
    // process.stdout.write('111\n')
};

await read();