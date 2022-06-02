
function getCharCount() {
    const texto=document.getElementById("demo").value
    if (texto.length==0) {
        alert("Ingrese Texto")
    } else {
        alert("la longitud es: "+texto.length)

    }

}
     
function mayuscula() {
    const texto=document.getElementById("demo").value
     if (texto.length==0) {
        alert("Ingrese texto")
    } else {
        alert("El texto en Mayuscula: "+texto.toUpperCase())

    }

}

function minuscula() {
    const texto=document.getElementById("demo").value
     if (texto.length==0) {
        alert("ingrese Texto")
    } else {
        alert("El texto en Minuscula: "+texto.toLowerCase())

    }

}
     