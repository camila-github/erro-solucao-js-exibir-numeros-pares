//SOLUCAO 1
var num = parseInt(gets());
for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        if (i != 0) {
            console.log(i);
        }
    }
}

//SOLUCAO 2 - Resumido
num = parseInt(gets());
for (i = 1; i <= num; i++)
    if (i % 2 == 0) console.log(i);