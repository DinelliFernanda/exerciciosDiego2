function calcular(){
    var codigo = document.getElementById("codigo").value;
    var salario = document.getElementById("salario").value;

    if (codigo == 1)
    {
        aumento = parseFloat(salario) * 0.5;
        novosalario = parseFloat(aumento) + parseFloat(salario);
        alert("Cargo: Escriturário" 
            + "\nValor do Aumento: " + aumento 
            + "\nNovo Salário: " + novosalario);
    }

    else if (codigo == 2)
    {
        aumento = parseFloat(salario) * 0.35;
        novosalario = parseFloat(aumento) + parseFloat(salario);
        alert("Cargo: Secretário" 
            + "\nValor do Aumento: " + aumento 
            + "\nNovo Salário: " + novosalario);
    }

    else if (codigo == 3)
    {
        aumento = parseFloat(salario) * 0.20;
        novosalario = parseFloat(aumento) + parseFloat(salario);
        alert("Cargo: Caixa" 
            + "\nValor do Aumento: " + aumento 
            + "\nNovo Salário: " + novosalario);
    }

    else if (codigo == 4)
    {
        aumento = parseFloat(salario) * 0.10;
        novosalario = parseFloat(aumento) + parseFloat(salario);
        alert("Cargo: Gerente" 
            + "\nValor do Aumento: " + aumento 
            + "\nNovo Salário: " + novosalario);
    }

    else if (codigo == 5)
    {
        alert("Cargo: Diretor" 
            + "\nNão tem aumento. " 
            + "\nSalário: " + salario);
    }

    else{
        alert("Código Inválido!")
    }
}