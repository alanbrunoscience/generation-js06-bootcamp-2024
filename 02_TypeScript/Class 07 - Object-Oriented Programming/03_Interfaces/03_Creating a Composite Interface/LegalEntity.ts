// Interfaces can also inherit other Interfaces to compose more complex types, just like Classes.

import { Person } from "../02_Creating Interface Objects/Person";

export interface LegalEntity extends Person {
    accountNumber: number;
    cnpj: number;
}

const legalEntity: LegalEntity = {
    personName: "Maria",
    personSurname: "Simões",
    accountNumber: 12345,
    cnpj: 123456000123
}

console.log(legalEntity);