// js Email vaildation expersion function 
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

// for showing success/error mesasge 
function showingMeassage(id, value) {
    document.getElementById(id).style.display = value;
}

const EmailInputField = document.getElementById('submit').addEventListener('click', function () {


    // get this enter eamil
    const email = document.getElementById('Email-input').value;

    // email vaildtion checking 
    const isemail = ValidateEmail(email);

    if (isemail) {
        showingMeassage('email-correct-message', 'block');
        document.getElementById('Email-input').value = '';
    } else {
        showingMeassage('email-incorrect-message', 'block');
    }

    setTimeout(function (){
        // for showing success/error mesasge 
        showingMeassage('email-correct-message', 'none');
        showingMeassage('email-incorrect-message', 'none');
    }, 4000);
});