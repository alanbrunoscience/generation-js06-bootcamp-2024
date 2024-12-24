console.log(new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
}).format(new Date()));

// Result: 24 de dezembro de 2024 às 15:30
