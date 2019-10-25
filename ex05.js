function calcular() {
    var cont, idade, media = 0, soma = 0;

    do {
        idade = parseInt(prompt("Informe a idade: "));
        if (idade == 0) {
            break;
        }
        soma += idade;
        cont++;
    } while (idade != 0)

    media = soma / cont;

    alert("A média das idades é: " + media);
}
