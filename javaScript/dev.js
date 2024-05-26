function verificar() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var res = document.getElementById("resultado");
    var imc = peso / altura ** 2;
    var imc2 = imc.toFixed(2);
    res.innerHTML = "imc: " + imc2;
  }