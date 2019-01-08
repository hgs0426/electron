/* main.js */

const {app, BrowserWindow} = require('electron');

let win;  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600});
   /* load local .html file*/
   win.loadURL(`file://${__dirname}/index.html`);
}  

app.on('ready', createWindow); 