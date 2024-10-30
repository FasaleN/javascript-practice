// First Homework

const obj = { name: 'John Smith', age: '45', work: 'Developer',
    getInfo: function (){
    return `Name: ${this.name}, Age: ${this.age}, Work: ${this.work}`
    }};

console.log(obj.getInfo());

//Second Homework

const randomNumbers = [2,3,4,5,6,7,8,9];
const getNumbers = randomNumbers.filter(number => number % 2 === 0);
console.log(getNumbers);

//Third Homework

const contactBook = {
    contacts:[
        {name: 'John Smith', phone: '+242343556', email:'john@gmail.com'},
        {name: 'Elizabet Smith', phone:'+282323596', email: 'elizabet@gmail.com'},
    ],
    findContactName: function(name){
        return this.contacts.find(contact => contact.name === name) ||"Contact not found";
    },
    addNewContact: function(name, phone, email){
        this.contacts.push({ name, phone, email });
    }
};
console.log(contactBook.findContactName('John Smith'));
contactBook.addNewContact('Den Smith', '+244270532', 'den@gmail.com');
console.log(contactBook.contacts);
