const express = require('express')
const app = express()

var path = require('path')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script defer src="main.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <link rel="stylesheet" href="styles.css">
        <title>Heat-Check</title>
    </head>
    <body id="container" class="cold hot">
        <div>
            <center>
            <div class="container">
                <form id="form">
                <input id="inputField" type="text" placeholder="Search for a city..." class="input"></input>
                </form>
                <div class="state-date-container">
                <div id="city" class="city">California</div>
                <div id="date" class="date">${new Date().toLocaleString()}</div>
                </div>
                <div class="weather-container">
                <div id="weather" class="weather">Windy</div>
                <div id="temperature" class="temperature">80°</div>
                <img class="icon-img" id="img" src="http://openweathermap.org/img/wn/50n@2x.png">        
                </div>
                </div>
            </center>
            </div>
        </div>
    </body>
    </html>
    `)
})

app.listen(process.env.PORT)