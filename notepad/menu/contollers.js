const {dialog, ipcMain} = require('electron'); 
const fs = require('fs'); 

const saveText = () => {

};

const openText = () => {
  dialog.showOpenDialog( (fileNames) => { 
      
    if(fileNames === undefined) { 
       console.log("No file selected"); 
    } else { 
      readFile(fileNames[0]); 
    } 
  });

  const readFile = (filepath) => {
    fs.readFile(filepath, 'utf-8', (err, data) => { 
      if(err){ 
         alert("An error ocurred reading the file :" + err.message); 
         return; 
      } 
      win.webContents.send('fileData', data);
   }); 
  };
};

module.exports = {
  saveText,
  openText
}