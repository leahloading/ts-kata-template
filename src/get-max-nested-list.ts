
/*
Given a list of LIST of numbers, get max for each nested list. 
Return the list of maximums.

getMaximums([[10, 70, 30], [40], [20, -30, 80]]) → [70, 40, 80]

Pseudocode:

let maxValue
let maxArray = []

for each item in the inputArray 
    find the max of item, set maxValue to max of item
    maxArray.push(maxValue)
end for

return maxArray
*/

/**
 * 
 * @param {number[]} nestedList 
 * @returns {number[]} maxArray
 */
 function getMaximums(nestedList: number[][]): number[] {
    let maxValue;
    let maxArray = [];

    for (let item of nestedList) {
        maxValue = Math.max(...item)
        maxArray.push(maxValue)
    }

    return maxArray;
}


export default getMaximums;