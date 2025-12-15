function test(value){
    if(value){var x = 10; let y = 20}
    console.log(x); console.log(y);
}
test((typeof null) == null);

/* 
    Resultado:
    undefined e ReferenceError
*/