const obj = { nome: "Ana" };
obj.nome = "Maria";
console.log(obj.nome);
obj = { nome: "Joao" };
console.log(obj.nome);

/* 
    Resultado:
    Maria e TypeError
*/