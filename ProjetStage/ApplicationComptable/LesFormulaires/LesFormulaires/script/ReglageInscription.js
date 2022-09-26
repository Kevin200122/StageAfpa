var Nomvalider = document.getElementById('Envoyer');
var nom = document.getElementById('UnNom');
var nom_m = document.getElementById('Nom_Vide');
var nom_v = /^[a-zA-ZéèÎÏÉÈ][a-zéèàêçîï]+([-'\s][a-zA-ZéèÎÏÉÈ][a-zéèàêçîï])?/;/*Condition du format d'écriture pour accepter le nom proposer par l'utilisateur a savoir : La première lettre du nom n'accepte que les lettres majuscule et minuscule de a à z, plus le i majuscule avec les deux point et celui avec un accent circonflexe et e majuscule avec les trois accents.*/
Nomvalider.addEventListener('click', Nom_valid);

function Nom_valid(e) {
    if (nom.validity.valueMissing) {
        e.preventDefault();//Valider le input nom, une erreur se produit si vide!!
        nom_m.textContent = 'Nom vide';
        nom_m.style.color = 'red';
    } else if (nom_v.test(nom.value) == false) {
        e.preventDefault();
        nom_m.textContent = "Le Format n'est pas correct";
        nom_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}
var PrenomValider = document.getElementById('Envoyer');
var prenom = document.getElementById('UnPrenom');
var prenom_m = document.getElementById('Prenom_Vide');
var prenom_v = /^[a-zA-ZéèÎÏÉÈ][a-zéèàêçîï]+([-'\s][a-zA-ZéèÎÏÉÈ][a-zéèàêçîï])?/;
PrenomValider.addEventListener('click', Prenom_valid);

function Prenom_valid(e) {
    if (nom.validity.valueMissing) {
        e.preventDefault();//Valider le input nom, une erreur se produit si vide!!
        prenom_m.textContent = 'Prenom vide';
        prenom_m.style.color = 'red';
    } else if (nom_v.test(nom.value) == false) {
        e.preventDefault();
        prenom_m.textContent = "Le Format n'est pas correct";
        prenom_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}


var EmailValider = document.getElementById('Envoyer');
var email = document.getElementById('UnEmail');
var email_m = document.getElementById('Email_Vide');
var email_v = /[A-z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-zA-Z]{2,4}/;
EmailValider.addEventListener('click', Email_valid);

function Email_valid(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.textContent = 'Email vide';
        email_m.style.color = 'red';
    } else if (email_v.test(email.value) == false) {
        e.preventDefault();
        email_m.textContent = "Le format n'est pas correct";
        email_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}

var SiretValider = document.getElementById('Envoyer');
var Siret = document.getElementById("UnSiret");
var Siret_m = document.getElementById('Siret_Vide');
var Siret_v = /^[0-9]{14}$/;
SiretValider.addEventListener('click', Siret_valid);

function Siret_valid(e) {
    if (Siret.validity.valueMissing) {
        e.preventDefault();
        Siret_m.textContent = 'Siret inexistant';
        Siret_m.style.color = 'red';
    } else if (Siret_v.test(Siret.value) == false) {
        e.preventDefault();
        Siret_m.textContent = 'Le format du Siret est incorrect';
        Siret_m.style.color = 'orange';
    }
}

var MDPValider = document.getElementById('Envoyer');
var mdp = document.getElementById('LeMdp');
var mdp_m = document.getElementById('MDP_Vide');
var mdp_v = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
MDPValider.addEventListener('click', MDP_valid);

function MDP_valid(e) {
    if (mdp.validity.valueMissing) {
        e.preventDefault();
        mdp_m.textContent = 'mot de passe vide';
        mdp_m.style.color = 'red';
    } else if (mdp_v.test(mdp.value) == false) {
        e.preventDefault();
        mdp_m.textContent = "Le format mdp n'est pas correct";
        mdp_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}

var ConfirmValider = document.getElementById('Envoyer');
var Confirm = document.getElementById('ConfirmMdp');
var Confirm_m = document.getElementById('Confirm_Vide');
var Confirm_v = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
ConfirmValider.addEventListener('click', Confirm_valid);

function Confirm_valid(e) {
    if (Confirm.validity.valueMissing) {
        e.preventDefault();
        Confirm_m.textContent = 'Confirme vide';
        Confirm_m.style.color = 'red';
    } else if (Confirm_v.test(Confirm.value) == false) {
        e.preventDefault();
        Confirm_m.textContent = "Le format mdp n'est pas correct";
        Confirm_m.style.color = 'orange';
    }
}

var VilleValider = document.getElementById('Envoyer');
var ville = document.getElementById('LaVille');
var ville_m = document.getElementById('Ville_Vide');
var ville_v = /^[a-zA-ZéèÎÏÉÈ][a-zéèàêçîï]+([-'\s][a-zA-ZéèÎÏÉÈ][a-zéèàêçîï])?/;
VilleValider.addEventListener('click', Ville_valid);

function Ville_valid(e) {
    if (ville.validity.valueMissing) {
        e.preventDefault();
        ville_m.textContent = 'Ville non insérée';
        ville_m.style.color = 'red';
    } else if (ville_v.test(ville.value) == false) {
        e.preventDefault();
        ville_m.textContent = 'Le format est incorrect';
        ville_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}

var CPValider = document.getElementById('Envoyer');
var cp = document.getElementById('LeCp');
var cp_m = document.getElementById('CP_Vide');
var cp_v = /^(([0-8][0-9])|+(9[0-5])|+(2[ab]))[0-9]{3}$/;
CPValider.addEventListener('click', CP_valid);

function CP_valid(e) {
    if (cp.validity.valueMissing) {
        e.preventDefault();
        cp_m.textContent = 'Code postale non inséré';
        cp_m.style.color = 'red';
    } else if (cp_v.test(cp.value) == false) {
        e.preventDefault();
        cp_m.textContent = 'Le format est incorrect';
        cp_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}


var AdresseValider = document.getElementById('Envoyer');
var adresse = document.getElementById('UneAdresse');
var adresse_m = document.getElementById('Adresse_vide');
var adresse_v = /[a-z0-9*(é|è|à|ù)A-Z\d\s\-\,\#\.\+]/;
AdresseValider.addEventListener('click', Adresse_valid);

function Adresse_valid(e) {
    if (adresse.validity.valueMissing) {
        e.preventDefault();
        adresse_m.textContent = 'Adresse non insérée';
        adresse_m.style.color = 'red';
    } else if (adresse_v.test(adresse.value) == false) {
        e.preventDefault();
        adresse_m.textContent = 'Le format est incorrect';
        adresse_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}

var TelValider = document.getElementById('Envoyer');
var tel = document.getElementById('LeTelephone');
var tel_m = document.getElementById('Telephone_Vide');
var tel_v = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
TelValider.addEventListener('click', Tel_valid);

function Tel_valid(e) {
    if (tel.validity.valueMissing) {
        e.preventDefault();
        tel_m.textContent = 'Téléphone non inséré';
        tel_m.style.color = 'red';
    } else if (tel_v.test(tel.value) == false) {
        e.preventDefault();
        tel_m.textContent = 'Le format est incorrect';
        tel_m.style.color = 'orange';
    }else{
        e.preventDefault();
    }
}
