// First Homework

const userName = prompt("Enter your name");
alert(`Hello, ${userName}! How are you? `);

// Second Homework

const randomNumber = prompt("Введіть 3 цифри");
if (randomNumber[0] === randomNumber[1] && randomNumber[1] === randomNumber[2]) {
    alert("Всі цифри однакові.");
} else {
    alert("Не всі цифри однакові.");
}
if (randomNumber[0] === randomNumber[1] || randomNumber[1] === randomNumber[2] || randomNumber[0] === randomNumber[2]) {
    alert("Серед цифр є однакові.");
} else {
    alert("Серед цифр немає однакових");
}

//Если нужно это сделать именно цифрами, то пересдам через Math.floor


//Third Homework

const randomYear = prompt("Введіть свій рік народження");
if ( randomYear === null) {
    alert("Шкода, що Ви не захотіли вказати свій рік народження");
}
const randomCity = prompt("Введіть місто вашого проживання");
if ( randomCity === null) {
    alert("Шкода, що Ви не захотіли вказати своє місце проживання");
}
const randomSport = prompt("Введіть свій улюблений вид спорту");
if ( randomSport === null) {
    alert("Шкода, що Ви не захотіли вказати свій улюбленний вид спорту");
}
if (randomYear != null) {
    alert(`Ваш рік народження ${randomYear}`);
}

switch (randomCity) {
    case 'Київ':
        alert("Ви живете у столиці України!");
        break;
    case 'Вашингтон':
        alert("Ви живете у столиці Сполучених Штатів Америки!")
        break;
    case 'Лондон':
        alert("Ви живете у столиці Англії!")
        break;
    case null:
        break;
    default:
        alert(`Ви живете у місті ${randomCity}!`);
        break;
}

switch (randomSport){
    case 'Брейк-данс':
        alert("Ого, Ви хочеш бути як Hong 10?");
        break;
    case 'Бокс':
        alert("Ого, Ви хочете бути як Олександр Усік?")
        break;
    case 'UFC':
        alert("Ого, Ви хочете бути як Mark Coleman?")
        break;
    case null:
        break;
    default:
        alert(`Ого, бажаю тобі успіхів у ${randomSport} `)
}


// Fourth Homework

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!');
        break;
}