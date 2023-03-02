
const firstList = [23, 80, 33, 77, 22, 98];
const secondList = [92, 67, 11, 3, 121, 0,11];
const thirdList = [88, 20, 11, 0, 44, 99, 1]
const fourthList = [2, 111, 77, 3, 49, 39]

const calc = function(integers) {
    const limit = 111
    let result = 0
    for (let i = 0; i < integers.length; i++){
        const integerList = integers[i]
        if (integerList%11 === 0) {
            result++
        }
        if (integerList >= limit) {
            result = 0;
            break;
        }
    }
    return result

}

const db1 = calc(firstList);
const db2 = calc(secondList);
const db3 = calc(thirdList);
const db4 = calc(fourthList);

console.log(db1, db2, db3, db4)