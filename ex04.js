function calcular() {
    var i, num, soma = 0;

    for (i = 1; i <= 10; i++) {
        num = parseInt(prompt("Informe um numero - (" + i + "):"));
        soma += num;
    }

    alert("A soma dos números é: " + soma);
}
