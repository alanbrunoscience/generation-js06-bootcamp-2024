// Interfaces can also have attributes with optional values

import { Person } from "../02_Creating Interface Objects/Person";

export interface NaturalPerson extends Person {
    accountNumber: number;
    cpf: number;
    phoneNumber?: number;
}

const naturalPerson01: NaturalPerson = {
    personName: "Maria",
    personSurname: "Simões",
    accountNumber: 16753432,
    cpf: 46134126569
}

const naturalPerson02: NaturalPerson = {
    personName: "Juliana",
    personSurname: "Silva",
    accountNumber: 11847743,
    cpf: 82177048052,
    phoneNumber: 21345678
}

console.log(naturalPerson01);
console.log(naturalPerson02);