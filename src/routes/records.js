const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController');
const helpers = require('../helpers/index');

router.get('/', (req, res) => {
    res.send('I work bro!')
}).post('/', async (req, res) => {
    try {
    const {startDate, endDate, minCount, maxCount} = req.query;
    const data = await recordsController.getAllRecords();
    const filterdByDate = helpers.getRecordsBetweanDate(data, startDate, endDate)
    const filterdByCount = helpers.getRecordsBetweanCount(filterdByDate, minCount, maxCount)
    res.status(200).json({
        code: 0,
        msg: 'success',
        records: filterdByCount,
        count: filterdByCount.length
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            code: 1,
            msg: 'Internal server error',
            records: [],
            count: 0
        })
    }
})

module.exports = router;
