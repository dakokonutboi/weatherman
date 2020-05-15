const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const remote = require('electron').remote
const axios = require('axios')

const closer = document.getElementById('closer')

var temperature = document.getElementById('tempdisplay')
var comment = document.getElementById('commentdisplay')
var loca = document.getElementById('locationdisplay')
var illust = document.getElementById('illust')
var datep = document.getElementById('datep')


function getweather() {
  axios.get('https://api.weatherapi.com/v1/current.json?key=64df6dc97daf4cafabb172031201505&q=Casablanca')
    .then(res => {
      const temperaturec = res.data.current.temp_c
      temperature.innerHTML = temperaturec.toLocaleString('en')+'&deg;C'
      const commentor = res.data.current.condition.text
      comment.innerHTML = commentor.toLocaleString('en')
      const img = res.data.current.condition.icon
      illust.src = "http:"+img.toLocaleString('en')
      const poto = res.data.location.localtime
      datep.innerHTML = poto.toLocaleString('en')
    })
}
getweather()

closer.addEventListener('click', function(event) {
  let w = remote.getCurrentWindow()
  w.close()
})
