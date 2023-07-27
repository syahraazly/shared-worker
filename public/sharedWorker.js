const connections = [];

onconnect = (e) => {
    const port = e.ports[0];
    connections.push(port);

    port.onmessage = (event) => {
        counter = event.data; // Update counter with received data, or keep the current value
        // Broadcast the updated counter value to all connected ports
        connections.forEach(conn => conn.postMessage(counter));
    };

    port.start();
};