document.getElementById("generatePdfBtn").addEventListener("click", function () {
  // Create a new jsPDF instance
  const doc = new jspdf.jsPDF();

  doc.setFont('arial');
  doc.setFontSize(12);
  
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();

  const nomeAlunoValue = document.getElementById("nomeAluno").value;
  const nomeProfessorValue = document.getElementById("nomeAvaliador").value;
  var dataValue = document.getElementById("data").value;
  const horaValue = document.getElementById("hora").value;
  const semestreValue = document.getElementById("semestre").value;

  const relevancia = document.getElementById("relevancia").value;
  const conteudo = document.getElementById("conteudo").value;
  const apresentacao = document.getElementById("apresentacao").value; 
  const total = document.getElementById("total").value;

  
  if (nomeAlunoValue === "" || nomeProfessorValue === "" || dataValue === "" ||horaValue === "" ||semestreValue === "" ||relevancia === "" ||conteudo === "" ||apresentacao === "" ) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  


  dataValue = formatarData(dataValue)

  const cabecalho = `
    Ministério da Educação
    Universidade Federal de Santa Maria
    Centro de Tecnologia
    Curso de Ciência da Computação
  `;

  const titulo = `
    FICHA DE AVALIAÇÃO DA SESSÃO DE ANDAMENTO`;

  const conteudoPDF = `
    Aluno: ${nomeAlunoValue} 
    Professor: ${nomeProfessorValue}
    Data: ${dataValue}
    Hora: ${horaValue}
    Semestre: ${semestreValue}
    `;

  doc.text(cabecalho, 27, 30, 0);
  doc.setFontSize(14);
  doc.text(titulo, 27, 60, 0);
  doc.setFontSize(12);


  // Adicione o conteúdo ao PDF
  doc.text(conteudoPDF, 27, 70, 0);

  
  // const avaliacao = `
  // Relevância e originalidade (até 2.0): ${relevancia} 
  // Qualidade do conteúdo (até 3.0): ${conteudo}
  // Apresentação (até 5.0): ${apresentacao}
  // Nota: ${total}
  // `;
  // y=110
  // doc.text(avaliacao, 27, y, 0, );


  // y=110
  // doc.text(relevancia, 166, y, 0, );
  // doc.text(conteudo, 166, y+=7, 0, );
  // doc.text(apresentacao, 166, y+=7, 0, );
  // doc.text(total, 166, y+=7, 0, );

  

  // Define the data for the table
  var data = [
    ["Critério", "Nota"],
    ["Relevância e originalidade (até 2.0)", `${relevancia}`],
    ["Qualidade do conteúdo (até 3.0)", `${conteudo}`],
    ["Apresentação (até 5.0)", `${apresentacao}`],
    ["Nota (total)", `${total}`]
  ];

  // Set the table column widths (optional)
  var columnWidths = [80, 20];

  // Set the table row height (optional)
  var rowHeight = 10;

  // Set the table x and y position
  var x = 27;
  var y = 110;

  // Loop through the data and draw the table
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        doc.setDrawColor(0);
        doc.setFillColor(255, 255, 255);
        doc.rect(x, y, columnWidths[j], rowHeight, "FD");
        doc.text(data[i][j], x + 2, y + 6);
        x += columnWidths[j];
    }
    x = 27;
    y += rowHeight;
  }

  
  doc.text(`Assinatura do(a) avaliador(a): `, 27, 200, 0, );
  const canvas = document.getElementById("assinaturaCanvas");
  const imageData = canvas.toDataURL("image/png");
  doc.addImage(imageData, "PNG", 90, 200, 50, 20); // (image data, format, x, y, width, height)





  // Save the PDF
  doc.save("filled_form.pdf");
});


function formatarData(data) {
  return data.split('-').reverse().join('/');
}
