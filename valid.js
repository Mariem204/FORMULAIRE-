console.log("yekhdemmmmmmm")

function valider() {
    console.log("hh")
    if (document.querySelector("#nom").value.length == 0) {
        {
            document.querySelector("#msgnom").innerHTML = "nom vide"
        }
        {
            document.querySelector("#nom").style.border = "2px solid red"
        }
    }
    else {
        document.querySelector("#msgnom").innerHTML = ""
    }


    if (document.querySelector("#prenom").value.length == 0) {
        document.querySelector("#msgprenom").innerHTML = "prenom vide"
    }
    else {
        document.querySelector("#msgprenom").innerHTML = ""
    }


    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.querySelector("#email").value.match(mailformat)) {
        document.querySelector("#msgemail").innerHTML = "Valid email address!"

    }
    else {
        {
            document.querySelector("#msgemail").innerHTML =
                "You have entered an invalid email address!"
        }
        {
            document.querySelector("#email").style.border = "2px solid red"
        } {
            document.querySelector("#email").innerHTML.fontColor = "Red"
        }
    }


    /*
        if (document.querySelector("#email").value.length == 0) {
            document.querySelector("#msgemail").innerHTML = "email vide"
        }
        else {
            document.querySelector("#msgemail").innerHTML = ""
        }*/


    if (document.querySelector("#cin").value.length != 8) {
        {
            document.querySelector("#msgcin").innerHTML = "cin invalide"
        } {
            document.querySelector("#cin").style.border = "2px solid red"
        } {
            document.querySelector("#cin").innerHTML.fontColor = "Red"
        }
    }
    else {
        document.querySelector("#msgcin").innerHTML = ""
    }
}
//THIS PART IS NOT GOOD //
let psdformat = [A-Z];
let psdformatt = [0-9];

if (document.querySelector("#email").value.match(psdformat))
if (document.querySelector("#email").value.match(psdformatt))
if (document.querySelector("#psd").value.minlength != 6) {
        {
            document.querySelector("#msgpsd").innerHTML = "cin invalide"
        } {
            document.querySelector("#psd").style.border = "2px solid red"
        } {
            document.querySelector("#psd").innerHTML.fontColor = "Red"
        }
    }
    else {
        document.querySelector("#msgcin").innerHTML = ""
    }
