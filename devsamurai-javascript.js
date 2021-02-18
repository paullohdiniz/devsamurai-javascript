https://www.youtube.com/watch?v=e-5obm1G_FY&ab_channel=JSConf
https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org

prompt
confirmS

function soma(x,y){
    return x+y;
}
function subst(x,y){
    return x-y;
}
function calcular(x,y,operacao){
    return operacao(x,y);
}

calcular(5,6,soma);
calcular(5,6,subst);

----------------------------------------------------

var nomes = [];

var qtes = Number(prompt("Digite a quantidade"));

for(var i=0; i<qtes; i++){
    nomes[i] = prompt("Digite o nome" + i);
}

nomes.forEach(function(nome){
    console.log(nome);
});

var nomes = ["Ana"];

nomes.push("Paulo");
nomes.push("João");
var removido = nomes.pop();
nomes.push("Renato");

nomes.unshift("Bruno");
nomes.shift();

console.log(nomes);
console.log(removido);

nomes.forEach(function(nome){
    console.log(nome);
});

var nomes = ["Ana", "Bruno", "Leticia", "Lucas"];

nomes.splice(1,1);
var index = nomes.indexOf("Ana"); // index = 0

console.log(nomes);

-------------------------------------------------------------------

var qtes = Number(prompt("Digite a quantidade de dados"));
var numbers = [qtes];
for(i=0; i < qtes; i++){
    var number = Number(prompt("Digite o número " + i));
    numbers.push(number);
}

var soma = 0;
numbers.forEach(function(valor){
    soma+=valor;
});

console.log("Média é: " + Number(soma/qtes));

-------------------------------------------------------------------
Objeto 

var convidados = [];

var convidado = {
    nome: "Paulo",
    idade: 22
}
var convidado1 = {
    nome: "Henrique",
    idade: 32
}

convidados.push(convidado);

var convidados = [];
//ideal pra busca hash
convidados["RGABCD"] = {nome: "Paulo", idade: 32, rg: "RGABCD"};
convidados["RGCCCC"] = {nome: "Paulo", idade: 32, rg: "RGCCCC"};

console.log(convidados["RGCCCC"]);

Parametro: arguments nativo JS

[ARRAY]
 
 -- FILTER: filtra os dados do array : >10 CONDICIONAL
    

    var numeros = [10,18,22];
    var maiorQ10 = function(item){ 
        return item > 10;
    }
    var resul = numeros.filter(maiorQ10);
    console.log(resul);
    
    ou
    
    var resul = numeros.filter(function(item){
        return item > 10;
    });

    var produtos = [
        {id:1, nome: "Paulo", cor: "Preta", tamanho: "P", categoria:"vestuário"},
        {id:2, nome: "Leticia", cor: "Preta", tamanho: "G", categoria:"vestuário"},
        {id:3, nome: "Karen", cor: "Branca", tamanho: "M", categoria:"vestuário"}
    ];

    var resul = produtos.filter(function(item){
        return item.tamanho == "P";
    });

-- MAP: modificar valor (executa operação)

    var numeros = [10,18,22];
    var dobrar = function(item){ 
        return item * 2;
    }
    var resul = numeros.map(dobrar);
    console.log(resul);
    
    ou
    
    var resul = numeros.map(function(item){
        return item * 10;
    });

    var produtos = [
        {id:1, nome: "Paulo", cor: "Preta", tamanho: "P", categoria:"vestuário"},
        {id:2, nome: "Leticia", cor: "Preta", tamanho: "G", categoria:"vestuário"},
        {id:3, nome: "Karen", cor: "Branca", tamanho: "M", categoria:"vestuário"}
    ];

    ---Função anonima
    var resul = produtos.map(function(item){
        var nome = {nome: item.nome.toUpperCase()};
        return Object.assign(item, nome);
        //Substitui apenas o atributo em questao no objeto
    });

-- REDUCE: Agregacao

    var numeros = [10,18,22];

    var cal = function(total,item,indice){
        console.log('T: ${total}' 'I: ${item}' 'Ind: ${indice}');
        return total + item;
    }

    var somatoria = numeros.reduce(cal, 0);


    var produtos = [
        {id:1, nome: "Paulo", cor: "Preta", tamanho: "P", categoria:"vestuário"},
        {id:2, nome: "Leticia", cor: "Preta", tamanho: "G", categoria:"vestuário"},
        {id:3, nome: "Karen", cor: "Branca", tamanho: "M", categoria:"vestuário"},
        {id:4, nome: "Karen", cor: "Branca", tamanho: "M", categoria:"vestuário"}

    ];

    function groupBy(array, prop){
        var value = array.reduce(function(total,item){
            var key = item[prop];
            total[key] = (total[key] || []).concat(item);
            return total;
        }, {});
        return value;
    };
    var agrupador = groupBy(produtos,'nome');
    console.log(agrupador);

     --Prototype

     Array.prototype.groupBy = function(prop){
        var value = this.reduce(function(total,item){
            var key = item[prop];
            total[key] = (total[key] || []).concat(item);
            return total;
        }, {});
        return value;
    };

    var prodFiltrados = produtos.filter(function(item){
        return item.tamanho = "G";
    }).filter(function(item){
        return item.cor = "preta";
    }).groupBy('nome');
