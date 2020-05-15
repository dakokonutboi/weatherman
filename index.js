const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const remote = require('electron').remote

const closer = document.getElementById('closer')

closer.addEventListener('click', function(event) {
  let w = remote.getCurrentWindow()
  w.close()
})
