import fs from 'fs'

const read = async () => {
    const stream = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf8');
    stream.on('data', (chunk) => {
        process.stdout.write('data: ' + chunk + '\n');
    });
};

await read();