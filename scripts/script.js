var inscription = form => {
    console.log(form.nom.value);
    console.log(form.prenom.value);
    console.log(form.age.value);
    console.log(form.sexe.value);
    console.log(form.ville.value);
    var a;
}

var bonjour = () => {
    alert(" Bonjour merci de compléter le formulaire suivant");
}
/*  ---------------------------------------  
var bonjour = () => {
    let prenom = document.getElementsByName("prenom").value;
    let nom = document.getElementsByName("nom").value;
    alert(" Bonjour " + prenom + nom + " merci de compléter le formulaire suivant");
}
    ---------------------------------------       */