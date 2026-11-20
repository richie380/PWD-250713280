var spanSuhu;
var spanStatus;

function init() {
    spanSuhu = document.getElementById("outputSuhu");
    spanStatus = document.getElementById("statusCuaca");

    konversiSuhu("celcius");
}

function konversiSuhu(id) {
    var c = parseFloat(document.getElementById(id).value);
    var f = (c * 9 / 5) + 32;

    spanSuhu.firstChild.data = f;

    if (f >= 86) {
        spanSuhu.style.color = "red";
        spanSuhu.style.fontWeight = "bold";
    } else {
        spanSuhu.style.color = "blue";
        spanSuhu.style.fontWeight = "normal";
    }

    if (f > 86) {
        spanStatus.firstChild.data = "Panas";
    } else if (f < 86) {
        spanStatus.firstChild.data = "Sejuk";
    } else {
        spanStatus.firstChild.data = "-";
    }
}

function resetForm() {
    document.getElementById("celcius").value = "";

    spanSuhu.firstChild.data = "0";
    spanStatus.firstChild.data = "-";

    spanSuhu.style.color = "black";
    spanSuhu.style.fontWeight = "normal";
}
