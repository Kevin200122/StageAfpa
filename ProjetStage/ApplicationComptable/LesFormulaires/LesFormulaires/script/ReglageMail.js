var EnvoyerMail = document.getElementById('btnValider');
var email = document.getElementById('UnMail');
var email_m = document.getElementById('Mail_Manquant');
var email_v = /[A-z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-zA-Z]{2,4}/;
EnvoyerMail.addEventListener('click', Email_valid);

function Email_valid(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_m.textContent = 'Email manquant';
        email_m.style.color = 'red';
    } else if (email_v.test(email.value) == false) {
        e.preventDefault();
        email_m.textContent = "Le format n'est pas correct";
        email_m.style.color = 'orange';
    } else {
        alert("Merci pour mail, un nouveau mot de passe sera envoyer dans votre boîte mail.");
    }
}