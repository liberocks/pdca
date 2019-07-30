const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const path = require('path')
require('dotenv').config()

const port = process.env.SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', require('./routes/views/index'));
app.use('/penyetoran', require('./routes/views/penyetoran'));

// app.use('/api/plan', require('./routes/api/plan'));
// app.use('/api/do', require('./routes/api/do'));
// app.use('/api/check', require('./routes/api/check'));
// app.use('/api/action', require('./routes/api/action'));
// app.use('/api/upload', require('./routes/api/upload'));


app.listen(port, () => console.log(`App listening on port ${port}!`))
