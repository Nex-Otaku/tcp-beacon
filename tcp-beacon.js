#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length < 1) {
    console.log('Usage: tcp-beacon <port>');
    return;
}

const port = args[0];

if (!/^\d+$/.test(port)) {
    console.log('Port parameter must be integer number');
    return;
}

const intPort = parseInt(port);

const Server = require('./app/server');

Server.start(intPort);

