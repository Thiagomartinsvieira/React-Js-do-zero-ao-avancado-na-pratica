const pessoa = {
    nome: "Thiago",
    sobrenome: "Martins Vieira",
    idade: 22,
    cargo: "Desenvolvedor"
};

let {nome} = pessoa;



let  {sobrenome} = pessoa;

let  {idade, cargo} = pessoa;

let {cargo:programador} = pessoa;

cargo = "louco";

console.log(pessoa);

let nomes = ["Agatha", "Dos santos", 21];
let {1:segundonome} = nomes;
console.log(segundonome);

l