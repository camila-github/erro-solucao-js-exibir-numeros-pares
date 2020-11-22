//SOLUÇÃO 1
var num = parseInt(gets()); //Leitura da entrada 
for (var i = 0; i <= num; i++) {
    if (i % 2 == 0) { //verifica se o resto da divisão 
        if (i != 0) { //verifica se o numero é diferente de 0, para nao ser mostrado
            console.log(i);
        }
    }
}


//SOLUÇÃO 2 - Resumido
/* Na estrutura de repetição (for) o i começa com 1, para não mostrar o zero no console*/
num = parseInt(gets());
for (i = 1; i <= num; i++)
    if (i % 2 == 0) console.log(i);