const date = new Date();
console.log(date);

const dateBrazil = date.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
console.log("Date and Hour - Brasilia:", dateBrazil);