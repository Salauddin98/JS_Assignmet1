function mindGame(checkNumberInput) {
    if (typeof checkNumberInput != "number" || checkNumberInput < 0) {
        return "Enter a valid input";
    }
    else {
        const result = ((((checkNumberInput * 3) + 10) / 2) - 5);
        return result
    }
   
}
console.log(mindGame(33));

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

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
console.log(newProducts);
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining)


// Important concept--->
var a = 12;
function tryScop(){
    // var a = 10;
    console.log(a)
}

console.log(a)
tryScop();