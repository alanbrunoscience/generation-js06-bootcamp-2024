export interface Person {
    personName: string;
    personSurname: string;
}

const person1: Person = {
    personName: "Maria",
    personSurname: "Simões"
}

const person2: Person = {
    personName: "Juliana",
    personSurname: "Silva"
}

console.log(person1);
console.log(person2);