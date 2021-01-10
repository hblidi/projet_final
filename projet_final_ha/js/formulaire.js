
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
        alert("le code regional non permis !!!");
    }

    let categorie = document.getElementById("categorie");



    switch (categorie.value) {
        case "Cuisine" :
            categoriepPermise = true;
            break;
        case "Salon" :
            categoriepPermise = true;
            break;
        case "Chambre" :
            categoriepPermise = true;
            break;
        case "salle de bain":
            categoriepPermise = true;
            break;
        case "Terrasse et Jardins" :
            categoriepPermise = true;
            break;
        case "Entrée" :
            categoriepPermise = true;
            break;
        case "Autre" :
            categoriepPermise = true;
        default:  alert("la catégorie non permise !!!");
    }

    if(categoriepPermise === false){
        alert("la catégorie non permise !!!");
    }

   if( codePermise && categoriepPermise){
        return true;
    }
    else{
        return false;

    }

}
