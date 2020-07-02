import electron from 'electron';
import path from 'path';
import url from 'url';
const app = electron.app;


const { BrowserWindow } = require('electron')
let mainWindow;

const fs = require('fs')
const os = require('os')
const ipc = electron.ipcMain;
const shell = electron.shell

// *Funcoes devem ser exportadas pra serem acessiveis ao front-end
// Executa comando do SO e retorna resultado ao front-end
// Outro processo é o IPCMaine IPCRenderer
// https://electronjs.org/docs/api/ipc-main
// https://electronjs.org/docs/api/ipc-renderer
exports.execProcess = (process, callback) => {
  const { exec } = require('child_process');
  const callExec = exec(process)

  callExec.stdout.on('data', function(data){
    callback(data)
  })
  callExec.stderr.on('data', function(data){
    callback("<b>ERROR:</b> \n" + data)
  })
}


const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    
    // Caracteristicas visuais da janela
    // autoHideMenuBar: true,
    //titleBarStyle: 'customButtonsOnHover',
    frame: false, // Retira barra superior
    useContentSize: false, // Inibe mostragem de dimensao da janela

    webPreferences: {
      nodeIntegration: true
    }
  });
  

 
  //mainWindow.removeMenu();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();    
  }
});




console.log('main.js')

ipc.on('print-to-pdf', function(event){
  console.log('iniciou print-to-pd')
  const pdfPath = path.join(os.tmpdir(), 'print.pdf')
  const win = BrowserWindow.fromWebContents(event.sender);

  win.webContents.printToPDF({  }, function(error, data){
    if(error) return console.log(error.message);
    fs.writeFile(pdfPath, data, function(err){
      if(err) return console.log(err.memessage)
      shell.openExternal('file://'+pdfPath);
      event.sender.send('wrote-pdf', pdfPath);
    })
  })

})


ipc.on('print-to-silenc', function(event){
  console.log('iniciou print-to-pd')
  const pdfPath = path.join(os.tmpdir(), 'print.pdf')
  const win = BrowserWindow.fromWebContents(event.sender);

  const options = { silent: true, deviceName: 'Comanda' }
  win.webContents.print(options, (success, errorType) => {
    console.log("win contents print")
    if (!success) console.log(errorType)
    console.log('success')
  })


})


ipc.on('print-to-NotSilenc', function(event){
  console.log('iniciou print-to-pd')
  const pdfPath = path.join(os.tmpdir(), 'print.pdf')
  const win = BrowserWindow.fromWebContents(event.sender);

  win.webContents.print({}, (success, errorType) => {
    console.log("win contents print")
    if (!success) console.log(errorType)
    console.log('success')
  })


})
