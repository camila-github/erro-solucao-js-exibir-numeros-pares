//SOLUÇÃO 1
var valor = parseInt(gets()); //Leitura da entrada 
for (var i = 0; i <= valor; i++) {
    if (i % 2 == 0) { //verifica se o resto da divisão 
        if (i != 0) { //verifica se o numero é diferente de 0, para nao ser mostrado
            console.log(i);
        }
    }
}


//SOLUÇÃO 2 - Resumido
/* No if verifica se o resto da divisão é 0.
e verifica se o numero é diferente de 0, para nao ser mostrado no console*/
num = parseInt(gets());
for (i = 0; i <= num; i++)
    if (i % 2 == 0 && i != 0) console.log(i);