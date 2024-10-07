// First Homework

let number = 20;

while (number <= 30) {
    console.log(number);
    number+=0.5;
}

//Second Homework

const result = 8;

for(let value = 10; value <= 100; value+=10){
    console.log(value*result);
}

//Third Homework

const N = prompt("Введіть число");

for(let value = 1; value <= 100; value++){
    if(value*value <= N){ // Можно ли это условие записать просто в цикл?
        console.log(value);
    }
}

//Fourth Homework

const randomNumber = prompt("Введіть число");
if (+randomNumber < 2) {
    alert("Число не э простим")
}  else {
    let simpleNumber = true;
    for (let i = 2; i < +randomNumber; i++) {
        if (+randomNumber % i === 0) {
            simpleNumber = false;
            break;
        }
    }
    if (simpleNumber) {
        alert("Число э простим");
    } else {
        alert("Число не э простим");
    }
}

