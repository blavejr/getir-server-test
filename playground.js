const helpers = require('./src/helpers/index');

const arr = [
    {
        "_id": "5ee21587e07f053f990ceafd",
        "key": "hCXxyuAu",
        "value": "hfJAfcGGizzJ",
        "createdAt": "2015-11-28T11:47:29.706Z",
        "counts": [
            864,
            509,
            712
        ]
    },
    {
        "_id": "5ee21587e07f053f990ceb33",
        "key": "cqgTPAdM",
        "value": "JaugKbZRIJSG",
        "createdAt": "2015-10-14T08:43:13.661Z",
        "counts": [
            854,
            1793,
            127
        ]
    },
    {
        "_id": "5ee21587e07f053f990ceb5e",
        "key": "wgDZfKYA",
        "value": "fqkQYKzZguYo",
        "createdAt": "2016-12-27T03:12:14.477Z",
        "counts": [
            2,
            1340,
            651
        ]
    },
    {
        "_id": "5ee21587e07f053f990ceb9e",
        "key": "ZWYNnfiR",
        "value": "ESdCQOjqHGCI",
        "createdAt": "2015-03-05T12:16:12.862Z",
        "counts": [
            991,
            1955,
            797
        ]
    },
    {
        "_id": "5ee21587e07f053f990cebfd",
        "key": "hxltXBrS",
        "value": "NegsVBzzjhoo",
        "createdAt": "2015-03-09T17:57:09.148Z",
        "counts": [
            542,
            615,
            386
        ]
    },
    {
        "_id": "5ee21587e07f053f990cec0a",
        "key": "zGnqCPfy",
        "value": "SwKtNAPADOAY",
        "createdAt": "2016-02-03T22:29:06.578Z",
        "counts": [
            1739,
            1805,
            96
        ]
    },
    {
        "_id": "5ee21588e07f053f990cec45",
        "key": "ZRUTBQxA",
        "value": "lGgAfxufQkrb",
        "createdAt": "2016-02-23T13:34:35.687Z",
        "counts": [
            1949,
            377,
            1689
        ]
    },
    {
        "_id": "5ee21588e07f053f990cec5d",
        "key": "oMLktkgd",
        "value": "wvuKPlmrpRil",
        "createdAt": "2015-04-16T11:55:08.878Z",
        "counts": [
            1083,
            700,
            1820
        ]
    }]

console.log(helpers.getRecordsBetweanDate(arr, '2010-04-16','2015-04-16').length);
// .reduce((acc, curr) => acc + curr)

// console.log(helpers.getRecordsBetweanCount(arr, 2000, 3000));