
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
        alert("le catégorie non permis !!!");
    }

    let categorie = document.getElementById("categorie");

    let categoriepPermise= false;


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
        case "terrasse et jardins" :
            categoriepPermise = true;
            break;
        case "Entrée" :
            categoriepPermise = true;
            break;
        case "Autre" :
            categoriepPermise = true;

    }
    if(categoriepPermise === false){
        alert("le catégorie non permis !!!");
    }

    if(codePermise && categoriepPermise){
        return true;
    }
    else{
        return false;

    }

}
