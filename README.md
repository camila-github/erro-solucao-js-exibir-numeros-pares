## Treinamento Digital Innovation One - Exercicio - Exibindo Números Pares

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Fundamentos Aritméticos em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.


#### Entrada:

Você receberá 1 valor inteiro N, onde N > 0.


#### Saída:

Exiba todos os números pares até o valor de entrada, sendo um em cada linha.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
6 | 2
 | 4
 | 6



#### Javascript

```javascript
//SOLUÇÃO 1
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
```
