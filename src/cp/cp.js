import child_process from 'child_process'

const spawnChildProcess = async (args) => {
    const child = new child_process.spawn('node', ['./src/cp/files/script.js', ...args], {stdin: ['pipe', 'pipe', 'inherit'] });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdin);

    child.on('error', (error) => {
        console.log('error: ' + error);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2','someArgument1', 'someArgument2','someArgument1', 'someArgument2','someArgument1', 'someArgument2']);
