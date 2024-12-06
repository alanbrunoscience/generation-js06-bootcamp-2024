"use strict"

/*

Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:

Idade (Número inteiro)

Identidade de Gênero (Número Inteiro): 

1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros

Pessoa Desenvolvedora (Número Inteiro):

1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack

Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

O número de pessoas desenvolvedoras Backend
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa

*/

const input = require("readline-sync");

let age,
    gender,
    jobTitle,
    wantToContinue = true,
    countDevBack = 0,
    cisTransWomenDevFront = 0,
    cisTransMenDevMobOver40 = 0,
    nBDevFullStackUnder30 = 0,
    countPartipants = 0,
    sumAges = 0,
    averageAges = 0;

while(wantToContinue) {

    age = input.questionInt("1) Enter your age: ");
    sumAges += age;

    do {
        gender = input.questionInt("\n2) Enter your gender:\n\n\t1 - Cis Woman;" +
            "\n\t2 - Cis Man;" +
            "\n\t3 - Non-Binary;" +
            "\n\t4 - Trans Woman;" +
            "\n\t5 - Trans Man;" +
            "\n\t6 - Others.\n\n-> "
        );

        if(gender < 1 || gender > 6)
            console.log("\n-> Invalid gender! Enter a value between 1 and 6 (including).");

    } while(gender < 1 || gender > 6);
    
    do {
        jobTitle = input.questionInt("\n3) Enter your job title:\n\n\t1 - Backend;" +
            "\n\t2 - Frontend;" +
            "\n\t3 - Mobile;" +
            "\n\t4 - Full Stack.\n\n-> "
        );

        if(jobTitle < 1 || jobTitle > 4)
            console.log("\n-> Invalid job title! Enter a value between 1 and 4 (including).");

    } while (jobTitle < 1 || jobTitle > 4);
    

    if(jobTitle === 1) {
        countDevBack++;
    }

    if((gender === 1 || gender === 4) && jobTitle === 2) {
        cisTransWomenDevFront++;
    }

    if((gender === 2 || gender === 5) && jobTitle === 3 && age > 40) {
        cisTransMenDevMobOver40++;
    }

    if(gender === 3 && jobTitle === 4 && age < 30) {
        nBDevFullStackUnder30++;
    }

    countPartipants++;

    wantToContinue = input.keyInYNStrict("\n-> Do you want to continue? ");

    console.log("\n\n====================================\n\n");

}

averageAges = sumAges / countPartipants;

console.log("========== Survey Results ==========\n\n");
console.log(`-> The number of Backend developers: ${countDevBack};`);
console.log(`-> The number of cis and trans women Frontend developers: ${cisTransWomenDevFront};`);
console.log(`-> The number of cis and trans men Mobile developers over 40: ${cisTransMenDevMobOver40};`);
console.log(`-> The number of non-binary FullStack developers under 30: ${nBDevFullStackUnder30};`);
console.log(`-> The total number of people who responded to the survey: ${countPartipants};`);
console.log(`-> The average age of people who responded to the survey: ${averageAges.toFixed(2)}.\n`);