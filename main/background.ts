import { app,ipcMain } from 'electron';
import { useState } from 'react';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600, titleBarStyle: 'hidden' 
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    mainWindow.webContents.openDevTools({mode: 'detach'});
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
ipcMain.on('windowsStates',() => {

})





