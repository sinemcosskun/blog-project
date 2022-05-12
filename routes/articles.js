const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('articles burada ')
})




module.exports = router // her yerde rahatlıkla kullanabilmemiz için module.export önemlidir.
