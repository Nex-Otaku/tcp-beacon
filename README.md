# TCP Beacon

Simple TCP server for network debugging.

![tcp-beacon PNG](https://raw.githubusercontent.com/Nex-Otaku/tcp-beacon/master/img/screenshot.png)

## Features

 - Easiest TCP server ever
 - Sends out messages every second
 
## When to use it

Check that desired port is reachable from another host in two easy steps.

 1. Start dummy TCP server - TCP Beacon!
    ```
    tcp-beacon 9999
    ```
 2. Connect to server from client host, for example via [netcat](https://ru.wikipedia.org/wiki/Netcat) tool:
    ```
    nc my-server 9999
    ```
    
And now every second you will receive a message from TCP server, that appears immediately on screen.
 

## Getting Started

### Prerequisites

For use this tool, you need

  * [Node.js](https://nodejs.org/)

### Installing

You can run tool from its own repo.

```
Clone the repo
cd tcp-beacon
node tcp-beacon.js 9999
```

Or just install it globally to run from anywhere.

```
Clone the repo
cd tcp-beacon
sudo npm link
tcp-beacon 9999
```

## Usage

```
tcp-beacon <PORT_NUMBER>
```

## To Be Done

 - gracefully shutdown on Control + C
 - Treat "read ECONNRESET" error as valid client disconnect

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © Nex Otaku.
