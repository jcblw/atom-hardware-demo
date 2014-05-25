/* global require, __dirname, process */

'use strict';

var app = require('app'), 
    BrowserWindow = require('browser-window'),
    j5 = require('johnny-five'),
    board = new j5.Board( {
        // repl act weird when in an atom-shell app
        repl : false
    });

board.on('ready', function ( err ){
        
    // https://github.com/rwaldron/johnny-five/blob/master/docs/accelerometer.md
    // accel used in demo => https://www.sparkfun.com/products/9652
    var accel = new j5.Accelerometer({
        pins: ["A2", "A1", "A0"]
    });

    // pumping change event out to app
    accel.on( "change", app.emit.bind( app, 'accel:change') );

});
// reports crashes to github
require('crash-reporter');

app.on( 'ready', function ( ) {
    var mainWindow = new BrowserWindow({ 
        width : 800, 
        height : 600 
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.on( 'closed', function ( ) {
        mainWindow = null;
    });
});

