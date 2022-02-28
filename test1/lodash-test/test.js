const _ = require('lodash')
const arr = [1,2,3]
const otherarr =  _.concat(arr,4,5,6)
console.log(otherarr)//[ 1, 2, 3, 4, 5, 6 ]