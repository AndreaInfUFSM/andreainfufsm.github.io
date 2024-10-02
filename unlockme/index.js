function showResultado(data) {
    const resultHeader = document.getElementById("showResult");
    //resultHeader.innerHTML = "";
    resultHeader.innerHTML = data.message;
    document.getElementById("divResultado").style.display = "block";
}


function checkPassword(){
    
    const group = document.getElementById("selectGroup");
    const passwd = document.getElementById("inputPasswd");

    // const nomes = document.getElementById("nomes");
    // const formacao = document.getElementById("formacao");
    if (passwd.value == "") {
        alert("Preencha a senha!");
        return;
    }

    // https://script.google.com/macros/s/AKfycbzuc-Ua6Uv_l4Z8kSdHBqGdvYXznottsUhYlde8f447abzFQHrreShxJsPpS0g_iFrV/exec?group=A&passwd=senhaa
    const baseurl = 'https://script.google.com/macros/s/AKfycbzuc-Ua6Uv_l4Z8kSdHBqGdvYXznottsUhYlde8f447abzFQHrreShxJsPpS0g_iFrV/exec?';
    const params = 'group=' + group.value + '&passwd=' + passwd.value;
    fetch(baseurl + params)
      .then(response => response.json())
      .then(data => {
          console.log(data.message);
          showResultado(data);
      })
      .catch((error) => {
          console.error("Error:", error);
      });

}
