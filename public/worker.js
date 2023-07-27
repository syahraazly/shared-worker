// const ctx = self;

/* eslint-disable no-restricted-globals */
// addEventListener("message", (event) => {
//     console.log(event.data);
//     for (let i = 0; i < 100; i++) {
//         // _.chunk(["a", "b", "c", "d"], 2);
//         console.log(i)
//     }

//     postMessage("Worker done work!");
// });
const test = [];

onconnect = (e) => {
    const port = e.ports[0];
    test.push(port);

    port.onmessage = (e) => {
        // const workerResult = `Result: ${e.data[0] * e.data[1]}`;
        test.map((item) => {
            port.postMessage("Worker done work!")

        })
    };
};