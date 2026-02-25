import worker_threads from 'worker_threads'
import os from 'os'

const performCalculations = async () => {
    const workers = [];
    const results = [];

    for (let i = 0; i < Object.keys(os.cpus()).length; i++) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new worker_threads.Worker('./src/wt/worker.js', {workerData: 10+i});
            worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Stopped, exit code ${code}`));
            });
        }));
    };

    for (const worker of workers) {
        results.push(await worker);
    };

    console.log(results);
};

await performCalculations();