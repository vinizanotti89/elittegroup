const form = document.querySelector(".formulario-")
const masc = document.querySelector(".mascara-formulario")


function showForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}

function hiddenmasc() {
    masc.style.visibility = "hidden"
    form.style.left = "-320px"
}   