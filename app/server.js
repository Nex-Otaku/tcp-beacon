const Net = require('net');

// https://github.com/sepmein/infiniteLoop
const InfiniteLoop = require('./infiniteLoop');

let connectedCount = 0;

const getConnectedCount = () => {
    return connectedCount;
}

const incrementConnectedCount = () => {
    connectedCount++;
}

const acceptClient = (socket) => {
    const clientIp = socket.remoteAddress;

    incrementConnectedCount();
    const clientId = getConnectedCount();
    console.log(`[${clientIp}] #${clientId} Connected.`);

    let connected = true;

    socket.on('data', function (chunk) {
        process.stdout.write(`[${clientIp}] #${clientId} <<< ${chunk.toString()}`);
    });

    socket.on('error', function (err) {
        connected = false;
        il.stop();
        console.log(`Error: ${err}`);
    });

    const il = new InfiniteLoop;

    let elapsedSeconds = 0;

    function writeElapsedtime() {
        if (!connected) {
            return;
        }

        elapsedSeconds++;
        const message = `Channel: ${clientId}. Seconds elapsed: ${elapsedSeconds}\n`;
        socket.write(message);
        process.stdout.write(`[${clientIp}] #${clientId} >>> ${message}`);
    }

    socket.on('end', function () {
        connected = false;
        il.stop();
        console.log(`[${clientIp}] #${clientId} Closed.`);
    });

    il.add(writeElapsedtime, [])
        .setInterval(1000)
        .run();
}

const startServer = (port) => {
    const server = new Net.Server();

    server.on('connection', function (socket) {
        acceptClient(socket);
    });

    server.listen(port, function () {
        console.log(`Server listening on localhost:${port}`);
    });
}

module.exports = {
    start: startServer,
};