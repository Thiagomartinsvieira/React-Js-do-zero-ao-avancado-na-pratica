document.write("</br> Escolha Seu Pedido </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca-Cola / 3 - Agua gelada </br></br>");

// Switch

function pedir(){
    x = prompt("O que deseja Pedir?");

switch(x){

    case "0":
        alert("Voce pediu Sorvete");
        break;
    case "1":
        alert("Voce pediu Suco");
        break;
    case "2":
        alert("Voce pediu uma Coca-Cola");
        break;
    case "3":
        alert("Voce pediu uma Agua gelada");
        break;
    default:
        alert("Ops não temos essa opção");
        break;
    }

}