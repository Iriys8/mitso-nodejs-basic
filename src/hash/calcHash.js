import crypto from 'crypto'
import fs from 'fs'

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    hash.update(fs.readFileSync('./src/hash/files/fileToCalculateHashFor.txt'));

    console.log(hash.copy().digest('hex'));
};

await calculateHash();