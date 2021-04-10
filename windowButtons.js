const remote = require('electron').remote

const win = remote.getCurrentWindow()

document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleWindowControls()

        document.getElementById('electron-ver').innerHTML = `${process.versions.electron}`
    }
}

window.onbeforeunload = (event) => {
    win.removeAllListeners()
}

function handleWindowControls() {
    document.getElementById('app-minimize').addEventListener("click", event => {
        win.minimize()
    })

    document.getElementById('app-maximize').addEventListener("click", event => {
        console.log(win.isMaximized())
        if (win.isMaximized()) {
            win.unmaximize()
        } else {
            win.maximize()
        }
    })

    document.getElementById('app-close').addEventListener("click", event => {
        win.close()
    })

    toggleMaxRestoreButtons()
    win.on('maximize', toggleMaxRestoreButtons)
    win.on('unmaximize', toggleMaxRestoreButtons)

    function toggleMaxRestoreButtons() {
        if (win.isMaximized()) {
            document.body.classList.add('maximized')
        } else {
            document.body.classList.remove('maximized')
        }
    }
}