
/**
 * Takes an array of dates and returns an array of dates betwean the start and end date.
 * @param array[Date]
 * @param start the start date
 * @param end the end date
 * @returns an array of dates betwean the start and end date
*/
const getRecordsBetweanDate = (recordsArray, start, end,) => {
    const startDate = new Date(start).valueOf()
    const endDate = new Date(end).valueOf()
    return recordsArray.filter(record => new Date(record.createdAt).valueOf() > startDate && new Date(record.createdAt).valueOf() < endDate)
}

/**
 * Checks if a number (check) is beatwean two numbers (start) and (end)
 * @param check the number we want to check
 * @param start the number at the begining
 * @param end the number at the end
 * @returns boolean
*/
const isNumberBetwean = (check, start, end) => {
    return ((check - start) * (check - end)) <= 0 
}

/**
 * Returns all the records betean a certain count amount
*/
const getRecordsBetweanCount = (recordsArray, startValue, endValue) => {
    return recordsArray.filter((record) => {
        const recordCount = record.counts.reduce((accumulation, currentValue) => accumulation + currentValue)
        return isNumberBetwean(recordCount, startValue, endValue)
    })
}

module.exports = {
    getRecordsBetweanDate,
    isNumberBetwean,
    getRecordsBetweanCount
}
