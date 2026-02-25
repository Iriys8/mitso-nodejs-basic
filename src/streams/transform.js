const transform = async () => {
    process.stdin.on('data', (chunk) => {
        process.stdout.write(chunk.reverse() + '\n');
    });
};

await transform();