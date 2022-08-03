
var EnvoyerMail = document.getElementById('Envoyer_Formulaire');
var email = document.getElementById('LeMail');
var email_m = document.getElementById('Email_Manquant');
var email_v = /[A-z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-zA-Z]{2,4}/;
EnvoyerMail.addEventListener('click', Email_valid);

function Email_valid(e) {
    if (email.validity.valueMissing) {
        alert('ok');
        e.preventDefault();
        email_m.textContent = 'Email manquant';
        email_m.style.color = 'red';
    } else if (email_v.test(email.value) == false) {
        alert('ok2');
        e.preventDefault();
        email_m.textContent = "Le format n'est pas correct";
        email_m.style.color = 'orange';
    }
}

var MDPValider = document.getElementById('Envoyer_Formulaire');
var mdp = document.getElementById('password55');
var mdp_m = document.getElementById('MDP_Manquant');
var mdp_v = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
MDPValider.addEventListener('click', MDP_valid);

function MDP_valid(e) {
    if (mdp.validity.valueMissing) {
        alert('ok');
        e.preventDefault();
        mdp_m.textContent = 'mot de passe vide';
        mdp_m.style.color = 'red';
    } else if (mdp_v.test(mdp.value) == false) {
        alert('ok2');
        e.preventDefault();
        mdp_m.textContent = "Le format mdp n'est pas correct";
        mdp_m.style.color = 'orange';
    }
}