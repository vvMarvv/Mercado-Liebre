let express = require('express') //requiero express
let app = express(); //Ejecuto express 
const PORT = 3000;
const path = require('path')

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})


app.listen(PORT, () => console.log(`servidor levantado en el puerto${PORT}
http://localhost:${PORT}
`))