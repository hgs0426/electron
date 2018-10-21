/* main.js */

const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  /* load local .html file*/
  win.loadURL(`file://${__dirname}/index.html`);
}

/* Event handler for asynchronous incoming messages */
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);

  /* Event emitter for sending asynchronous messages */
  event.sender.send('asynchronous-reply', 'async pong');
});

/* Event handler for synchronous incoming messages */
ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg); 

  /* Synchronous event emmision in 10 sec */
  setTimeout(()=> { 
    event.returnValue = 'sync pong';
  }, 10*1000);
  
});

app.on('ready', createWindow);