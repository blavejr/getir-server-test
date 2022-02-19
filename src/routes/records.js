const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController');
const helpers = require('../helpers/index');

router.get('/', (req, res) => {
    res.send('I work bro!')
}).post('/', async (req, res) => {
    const {startDate, endDate, minCount, maxCount} = req.query;
    const data = await recordsController.getAllRecords()
    const filterdByDate = helpers.getRecordsBetweanDate(data, startDate, endDate)
    const filterdByCount = helpers.getRecordsBetweanCount(filterdByDate, minCount, maxCount)
    res.status(200).json({
        code: 0,
        msg: 'askdbkajsdb',
        records: filterdByCount,
        count: filterdByCount.length
    })
})

module.exports = router;
