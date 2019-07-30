const router = require('express').Router();
const path = require('path')

router.get('/', async (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '../static')
    })
})

module.exports = router