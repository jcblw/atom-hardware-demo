## Atom Hardware Demo

This app is a very simple app that intergrates hardware ( [Arduino](http://www.arduino.cc/) with [accelerometer](https://www.sparkfun.com/products/9652) ) using [`johnny-five`](https://github.com/rwaldron/johnny-five) into an atom-shell app.

## Installation

To install the this app just clone this repo and enter the directory.

    $ cd hardware-demo

## Running

First you will need [atom-shell](https://github.com/atom/atom-shell), macs have a prebuilt binary, but everyone else read you os's documentation in the [development docs](https://github.com/atom/atom-shell/tree/master/docs/development).

Then to install the proper dependecies you need to install with [`apm`](https://github.com/atom/apm). Why so, [read here](https://github.com/atom/atom-shell/blob/master/docs/tutorial/use-native-node-modules.md)?

    $ cd src
    $ apm install .
    $ cd ..

When hooking up hardward please use [schematic here](https://github.com/rwaldron/johnny-five/blob/master/docs/accelerometer.md#breadboardillustration).

To run the app its super simple just run the atom binary given to you while installing [atom-shell](https://github.com/atom/atom-shell) against the `src` directory. Note: you will need to run as sudo to get access to the usb/serialport

    $ sudo ~/path-to/atom src

A window will open that has the text 'Hardware Demo' in white, after a second or so the background will start flashing a greyish color. If you move around the boards the background color should change.

## Development

To build on the the app all the files reside in the `src` directory.

    atom-hardware-demo
    └── src
        ├── package.json
        ├── main.js*
        └── index.html

With atom-shell the entry point is a javascript file specified in the `package.json` and in this application it is `main.js`

ready for more [atom-shell docs](https://github.com/atom/atom-shell/tree/master/docs)
