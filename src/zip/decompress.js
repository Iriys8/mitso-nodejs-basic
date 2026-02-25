import zlib from 'zlib'
import fs from 'fs'
import stream from 'stream'

const decompress = async () => {
    const gzip = zlib.createUnzip();
    const source = fs.createReadStream('./src/zip/files/archive.gz');
    const destination = fs.createWriteStream('./src/zip/files/archived.txt'); 

    stream.pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            return;
        }
    });
};

await decompress();