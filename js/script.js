function contato(){ 
    window.location = "index2.html";
    // window.open("index2.html")
}
function voltar(){
    // window.open("index.html")
    window.location = "index.html";
}
function tabelaInvisivel(){
    let table = document.getElementById("tabela");
    table.setAttribute("hidden" ,"")
}
function tabelaVisivel(){
    let table = document.getElementById("tabela");
    table.removeAttribute("hidden")
}