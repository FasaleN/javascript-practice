
//First Homework

function getSumNumbers(){
    let sum = 0;
    return function(randomNumbers){
        sum += randomNumbers;
        return sum;
    };
}
const finalSum = getSumNumbers();
console.log(finalSum(4));
console.log(finalSum(6));
console.log(finalSum(10));
console.log(finalSum(45));

//Second Homework

function multiplySum(firstNumber){
    return (secondNumber) => {
        return firstNumber * secondNumber;
    }
}
console.log(multiplySum(5)(2));

//Third Homework

function getRandomNumbers(){
    let userNumber;
    for(let i = 0; i < 10; i++) {
        userNumber = +prompt('Введіть число більше 100')
        if (userNumber > 100) {
            console.log(`Введене число більше 100 ${userNumber}`);
            return;
        }
        if (userNumber === null)break;
    }
}
getRandomNumbers();
