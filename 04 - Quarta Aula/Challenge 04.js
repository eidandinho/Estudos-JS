/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
    return !!a;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(undefined));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(''));
console.log(isTruthy(""));
console.log(isTruthy(false));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("--------------")
console.log(isTruthy("Teste"));
console.log(isTruthy('Valor Verdadeiro'));
console.log(isTruthy(true));
console.log(isTruthy(1));
console.log(isTruthy([]));
console.log(isTruthy({}));
console.log(isTruthy("100"));
console.log(isTruthy(function(){}));
console.log(isTruthy("-0"));
console.log(isTruthy(20 * 3));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "McLaren",
    modelo: "Senna",
    placa: "FFF-0F00",
    ano: 2018,
    cor: "Azul Petróleo",
    quantasPortas: "2",
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

    carro.mudarCor = function(cor){
        carro.cor = cor;
    };

    carro.mudarCor("Verde");
    console.log(carro.cor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
    carro.obterCor = function(){
        return carro.cor;
    };

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
    carro.obterModelo = function(){
        return carro.modelo;
    };

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
    carro.obterMarca = function(){
        return carro.marca;
    };

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
    carro.obterMarcaModelo = function(){
        return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
    };

    console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

    carro.add = function(addPessoas){

        var totalPessoas = carro.quantidadePessoas + addPessoas;
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';

        if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
            return "O carro já está lotado!";
        };

        if(totalPessoas > carro.assentos){
            return "Só cabem mais " + quantasPessoasCabem + pluralOuSingular + "!";
        };
        
        carro.quantidadePessoas += addPessoas;
        return "Já temos " + carro.quantidadePessoas + " pessoas no carro!"
    }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
    carro.obterCor(); // Verde

// Mude a cor do carro para vermelho.
    carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
    carro.obterCor(); // Vermelho
    console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
    carro.mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
    carro.obterCor(); // Verde Musgo
    console.log(carro.obterCor());

// Qual a marca e modelo do carro?
    carro.obterMarcaModelo(); // Esse carro é um McLaren Senna
    console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.add(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.add(4)); // Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.add(3)); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
console.log(carro.add(-4)); // Já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
console.log(carro.add(10)); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
carro.quantidadePessoas;
console.log(carro.quantidadePessoas); // 1