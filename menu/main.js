const {app, BrowserWindow, Menu} = require('electron');
const menuTemplate = require('./menuTemplate');

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  /* load local .html file*/
  win.loadURL(`file://${__dirname}/index.html`);
}

const menu = Menu.buildFromTemplate(menuTemplate);

Menu.setApplicationMenu(menu);
app.on('ready', createWindow);