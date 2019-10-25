function calcular(){
    var opcao = document.getElementById("opcao").value;
    var num;
    var num1;
    var num2; 
    if (opcao == 1)
    {
        num1 = prompt ("Digite um número: ");
        num2 = prompt ("Digite um número: ");
        soma = parseInt(num1) + parseInt(num2);
        alert("A soma dos números é: " + soma);
    }

    if (opcao == 2)
    {
        num = prompt ("Digite um número: ");
        raiz = Math.sqrt(num);
        alert("A raíz desse número é: " + raiz);
    }

    else{
        alert("Opção Inválida!")
    }
}