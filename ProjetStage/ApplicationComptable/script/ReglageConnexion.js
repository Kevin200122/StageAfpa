let form = document.querySelector('#Lemail');
//Entendre la modification de cet Email

form.email.addEventListener('change', function () {
    validerEmail(this);
});

const validerEmail = function (inputEmail) {
    //Création de la regex pour vérifier notre email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );
};

let testeremail = emailRegExp.test(inputEmail.value);
let petit = inputEmail.nextElementSibling;

if (testeremail) {
    petit.innerHTML = 'Email OK';
    petit.classList.remove('text-danger');
    petit.classList.add('text-success');
} else {
    petit.innerHTML = 'Email incorrect';
    petit.classList.remove('text-success');
    petit.classList.add('text-danger');
}
console.log(petit);