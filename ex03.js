function calcular() {
    var num = document.getElementById("num").value;
    var multiplicador = 1;
    document.getElementById("conteudo").innerHTML = "";
    
    while (multiplicador <= 10) {
        document.getElementById("conteudo").innerHTML += num + "x" + multiplicador + "=" + (num * multiplicador) + "<br />";
        multiplicador++;
    }
}
