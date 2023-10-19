function verificarValor(input, limite) {
    // Obtenha o valor do campo de entrada
    var valor = parseFloat(input.value);

    // Verifique se o valor é maior que 1
    if (valor > limite) {
        // Zere o campo de entrada
        input.value = '';

        // Mostre um alerta na tela
        alert('O valor inserido é maior que o limite. O campo foi zerado.');
    }
    calcularTotal()
    
}


$(document).ready(function() {
    formatarNotas();
  });
  
  function formatarNotas() {
    $(".nota-input").maskMoney({
      thousands: '',
      decimal: '.',
      precision: 1, // Duas casas decimais
      allowZero: true, // Permitir 0.00
      allowNegative: false // Não permitir números negativos
    });

}

  
  function calcularTotal() {
    var relevancia = parseFloat(document.getElementById("relevancia").value);
    var conteudo = parseFloat(document.getElementById("conteudo").value);
    var apresentacao = parseFloat(document.getElementById("apresentacao").value);
    
  
    if (!isNaN(relevancia) && !isNaN(conteudo) && !isNaN(apresentacao)) {
      var total = relevancia + conteudo + apresentacao;
      document.getElementById("total").value = total.toFixed(2);
    } else {
      document.getElementById("total").value = "";
    }
  }
  
  document.getElementById("relevancia").addEventListener("input", calcularTotal);
  document.getElementById("conteudo").addEventListener("input", calcularTotal);
  document.getElementById("apresentacao").addEventListener("input", calcularTotal);
  
  