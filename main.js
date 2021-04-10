const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height: 800,
		frame: false,
        webPreferences: {
            nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
        }
	})

	win.loadFile('index.html')
}

app.on('ready', function() {
	createWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})