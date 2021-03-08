//SOLUCAO 1 - Resumido
const numEntrada = parseInt(gets());
for (let num = 1; num <= numEntrada; num++) if (num % 2 == 0) console.log(num);


// SOLUCAO 2
var num = parseInt(gets());  
for (var i = 0; i <= num; i++) {
    if (i != 0) {
        if (i % 2 == 0) {         
        console.log(i);
        }
    }
}