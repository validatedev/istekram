const { app, shell, BrowserWindow, Notification} = require('electron')
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + '/res/img/icon.png'); 

image.setTemplateImage(true);

function createWindow () {

  let win = new BrowserWindow({
    width: 1024,
    height: 768,
    title: "Istekram",

    icon: image,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.on('page-title-updated', (evt) => {
    evt.preventDefault();
  });
  win.removeMenu()

  win.loadURL("https://www.instagram.com/", {
      userAgent: 
      win.webContents.getUserAgent().replace(/(Electron|Istekram)\/([0-9\.]+)\ /gi, "")})
    win.webContents.on('new-window', function(event, url){
    event.preventDefault();
    shell.openExternal(url);
    });
}

app.whenReady().then(createWindow)


 
