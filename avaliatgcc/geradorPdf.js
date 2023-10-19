document.getElementById("generatePdfBtn").addEventListener("click", function () {
  // Create a new jsPDF instance
  const doc = new jspdf.jsPDF();

  doc.setFont('arial');
  doc.setFontSize(12);
  
  var img = 'cedula.jpg'
  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();
  doc.addImage(img, "JPG", 0, 0, width, height);

  const nomeAlunoValue = document.getElementById("nomeAluno").value;
  const nomeProfessorValue = document.getElementById("nomeAvaliador").value;
  var dataValue = document.getElementById("data").value;
  const horaValue = document.getElementById("hora").value;
  const semestreValue = document.getElementById("semestre").value;

  const relevancia = document.getElementById("relevancia").value;
  const conteudo = document.getElementById("conteudo").value;
  const apresentacao = document.getElementById("apresentacao").value; 
  const total = document.getElementById("total").value;

  
  if (nomeAlunoValue === "" || nomeProfessorValue === "" || dataValue === "" ||horaValue === "" ||semestreValue === "" ||relevancia === "" ||conteudo === "" ||apresentacao === ""  || !selected) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  

  y=106
  dataValue = formatarData(dataValue)

  const conteudoPDF = `
    Aluno: ${nomeAlunoValue} 
    Professor: ${nomeProfessorValue}
    Data: ${dataValue}
    Hora: ${horaValue}
    Semestre: ${semestreValue}
    `;

  // Adicione o conteúdo ao PDF
  doc.text(conteudoPDF, 27, 60, 0);

  doc.text(relevancia, 166, y, 0, );
  doc.text(conteudo, 166, y+=7, 0, );
  doc.text(apresentacao, 166, y+=7, 0, );
  doc.text(total, 166, y+=7, 0, );

  
  

  const canvas = document.getElementById("assinaturaCanvas");
  const imageData = canvas.toDataURL("image/png");
  doc.addImage(imageData, "PNG", 90, 200, 50, 20); // (image data, format, x, y, width, height)


  // Save the PDF
  doc.save("filled_form.pdf");
});


function formatarData(data) {
  return data.split('-').reverse().join('/');
}
