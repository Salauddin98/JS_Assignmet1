//Problem Number 1---->
/* 
In this function do work on some calculations of the number. And return the result. If the user inputs any data without a number the function shows an error message.
*/
function mindGame(checkNumberInput) {
    if (typeof checkNumberInput != "number" || checkNumberInput < 0) {
        return "Enter a valid input";
    }
    else {
        const result = ((((checkNumberInput * 3) + 10) / 2) - 5);
        return result
    }

}
console.log(mindGame("33"));


//Problem Number 2------>
/*This function shows whether the string length is even or odd. If the string length is even its returns an even output. otherwise, it returns the odd output. If the user gives any input without a string it shows an error message. */
function evenOdd(inputString) {
    let stringLength = inputString.length;
    if (typeof inputString != "string") {
        return ("please enter a valid input");
    }
    else if (stringLength % 2 == 0) {
        return ("even");
    } else {
        return ("odd");
    }
}
console.log(evenOdd("salauddin"));



//Problem Number 3------->
/*The function shows a difference of seven. If the given value is less than seven then it shows the return difference value. otherwise, it shows double the value of the given value. if the user has given any input without a number then the function shows an error message. */
function isLGSeven(checkNumber) {
    let storeResult = checkNumber - 7;
    if (typeof checkNumber != "number") {
        return ("please Enter a valid input");
    }
    else if (storeResult < 7) {
        return storeResult;
    } else {
        return checkNumber * 2;
    }

}
console.log(isLGSeven(-15));



//Problem Number 4------->
/*This function shows the return of the total negative amount number from an array. If the result is below then zero then count them and this function returns the result. If the user gives any input without an array then the function returns the error message. */
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



//Problem Number 5------->
/* The function returns the remaining jams if the total diamonds are over 2000. And below 2000 then this function returns total diamonds. And if the user gives any input without a number this time function shows the error message.*/
function gemsToDiamond(firstDiamond, secondDiamond, thirdDiamond) {
    let firstJamsLoad = firstDiamond * 21;
    let secondJamsLoad = secondDiamond * 32;
    let thirdJamsLoad = thirdDiamond * 43;
    let totalDiamond = firstJamsLoad + secondJamsLoad + thirdJamsLoad;
    if (typeof firstDiamond != "number" || typeof secondDiamond != "number" || typeof thirdDiamond != "number") {
        return "You should input valid data"
    }
    else if (totalDiamond >= 1000 * 2) {
        let remainingJams = totalDiamond - 2000;
        return remainingJams;
    } else {
        return totalDiamond;
    }

}
console.log(gemsToDiamond(100, 5, "salauddin"));


