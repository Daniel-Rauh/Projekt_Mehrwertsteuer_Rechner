function bretto() {
    if (document.getElementById("aufschlag").checked == true) {
        document.getElementById("bretto").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        document.getElementById("result-label").innerHTML = "Bruttobetrag (Endpreis):"
    } else {
        document.getElementById("bretto").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
        document.getElementById("result-label").innerHTML = "Nettobetrag:"
    }
}
function calculate() {
    document.getElementById("result1").style.padding = "10px 10px 10px 10px"
    document.getElementById("result2").style.padding = "10px 10px 10px 10px"
    if (document.getElementById("aufschlag").checked == true) {
        aufschlag()
    } else {
        abzug()
    }
}
function aufschlag() {
    let amountUn = document.getElementById("input").value
    let amount = amountUn.replace(",",".")
    if (amount <= 0) {
        document.getElementById("mwst").innerHTML = "Bitte geben Sie einen positiven Wert ein"
    } else if (document.getElementById("nineteen").checked == true) {
        document.getElementById("mwst").innerHTML = (amount * 0.19).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount * 1.19).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("sixteen").checked == true) {
        document.getElementById("mwst").innerHTML = (amount * 0.16).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount * 1.16).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("seven").checked == true) {
        document.getElementById("mwst").innerHTML = (amount * 0.07).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount * 1.07).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("five").checked == true) {
        document.getElementById("mwst").innerHTML = (amount * 0.05).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount * 1.05).toFixed(2).replace(".", ",") + " €"
    } 
}
function abzug() {
    let amountUn = document.getElementById("input").value
    let amount = amountUn.replace(",",".")
    if (amount <= 0) {
        document.getElementById("mwst").innerHTML = "Bitte geben Sie einen positiven Wert ein"
    } else if (document.getElementById("nineteen").checked == true) {
        document.getElementById("mwst").innerHTML = (amount - (amount / (1 + 0.19))).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount / (1 + 0.19)).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("sixteen").checked == true) {
        document.getElementById("mwst").innerHTML = (amount - (amount / (1 + 0.16))).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount / (1 + 0.16)).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("seven").checked == true) {
        document.getElementById("mwst").innerHTML = (amount - (amount / (1 + 0.07))).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount / (1 + 0.07)).toFixed(2).replace(".", ",") + " €"
    } else if (document.getElementById("five").checked == true) {
        document.getElementById("mwst").innerHTML = (amount - (amount / (1 + 0.05))).toFixed(2).replace(".", ",") + " €"
        document.getElementById("brutto").innerHTML = (amount / (1 + 0.05)).toFixed(2).replace(".", ",") + " €"
    }
}