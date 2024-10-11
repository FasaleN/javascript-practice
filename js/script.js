
//First Homework

function removeLetter(userText, letterToRemove) {
    for (let char of letterToRemove) {
        userText = userText.split(char).join('');
    }
    return userText;
}

let userText = prompt('Введіть текст');
let letterToRemove = prompt ('Введіть символи для видалення').split('');

let result = removeLetter(userText, letterToRemove);
alert(result);

//Second Homework

function getSumOfNumbers(sumNumbers) {
    let numbers = sumNumbers.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0
    let sum = numbers.reduce((sum, num) => sum + num, 0);
    return sum / numbers.length;
}

let sumOfNumbers = [1, 'hello', true, 5, 8, null, 'world', 10];
let resultSum = getSumOfNumbers(sumOfNumbers);
alert(resultSum);

//Third Homework

function removeElement(array, item){
    const newArray = array.indexOf(item);
    if (newArray !== -1) array.splice(newArray, 1);
    return array;
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array);