import worker_threads from 'worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const result = nthFibonacci(worker_threads.workerData);
        worker_threads.parentPort.postMessage(result);
    } catch (error) {
        worker_threads.parentPort.postMessage(null);
    }
};

sendResult();