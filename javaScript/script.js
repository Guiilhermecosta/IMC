function verificar() {
  // Captura os valores de peso e altura dos campos do formulário e converte para número decimal
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var res = document.getElementById("resultado"); // Elemento onde o resultado será exibido

  // Verifica se os valores são válidos (diferentes de zero ou vazios)
  if (!peso || !altura) {
    alert("Adicione valores válidos!"); // Alerta o usuário
    res.innerHTML = ""; // Limpa o campo de resultado
    return; // Encerra a função para evitar erro no cálculo
  }

  // Calcula o IMC (Índice de Massa Corporal)
  var imc = peso / (altura ** 2);
  var imc2 = imc.toFixed(2); // Arredonda o resultado para 2 casas decimais

  // Verifica a faixa de IMC e exibe o resultado correspondente
  if (imc < 18.5) {
    res.innerHTML = "Abaixo do peso: " + imc2;
  } else if (imc >= 18.5 && imc <= 24.9) {
    res.innerHTML = "Peso normal: " + imc2;
  } else if (imc >= 25 && imc <= 29.9) {
    res.innerHTML = "Sobrepeso: " + imc2;
  } else if (imc >= 30 && imc <= 34.9) {
    res.innerHTML = "Obesidade grau I: " + imc2;
  } else if (imc >= 35 && imc <= 39.9) {
    res.innerHTML = "Obesidade grau II: " + imc2;
  } else {
    res.innerHTML = "Obesidade grau III (mórbida): " + imc2;
  }
}