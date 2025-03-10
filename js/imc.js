function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    if (!peso || !altura || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        document.getElementById("classificacao").innerText = "";
        return;
    }
    
    let imc = peso / (altura * altura);
    document.getElementById("resultado").innerText = `IMC: ${imc.toFixed(2)}`;
    
    let classificacao = "";
    switch (true) {
        case (imc < 18.5):
            classificacao = "Abaixo do peso";
            break;
        case (imc < 24.9):
            classificacao = "Peso normal";
            break;
        case (imc < 29.9):
            classificacao = "Sobrepeso";
            break;
        case (imc < 34.9):
            classificacao = "Obesidade grau 1";
            break;
        case (imc < 39.9):
            classificacao = "Obesidade grau 2";
            break;
        default:
            classificacao = "Obesidade grau 3";
            break;
    }
    
    document.getElementById("classificacao").innerText = `Classificação: ${classificacao}`;
}