function validerFormulaire(){
let codeRegional = document.getElementById("codeRegional");

let codePermise = false;

switch (codeRegional.value) {
    case "819" :
        codePermise = true;
        break;
    case "418" :
        codePermise = true;
        break;
    case "514" :
        codePermise = true;
}
if(codePermise === false){
    alert("le code régional non permis !!!");
}
return codePermise;
}