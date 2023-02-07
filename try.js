// function mindGame(checkNumberInput) {
//     if (typeof checkNumberInput != "number" || checkNumberInput < 0) {
//         return "Enter a valid input";
//     }
//     else {
//         const result = ((((checkNumberInput * 3) + 10) / 2) - 5);
//         return result
//     }
   
// }
// console.log(mindGame(33));

function findingBadData(inputData) {
    let BadData = 0;
    let GoodData = 0;
    if (Array.isArray(inputData) != true) {
        return "Please Enter a array input";
    } else {
        for (let i = 0; i < inputData.length; i++) {
            if (inputData[i] < 0) {
                BadData++;
            } else {
                GoodData++;
            }
        }
    }

    return BadData;

}
console.log(findingBadData([-4, -9, -5, -33, -55]));