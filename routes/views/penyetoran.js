const router = require('express').Router();
const path = require('path')

router.get('/', async (req, res) => {
    res.sendFile('p.html', {
        root: path.join(__dirname, '../../static')
    })
})

module.exports = router