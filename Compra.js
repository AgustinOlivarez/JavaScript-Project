let ConfirmButton = document.getElementById('confirmar');
ConfirmButton.addEventListener('click', ConfirmarCompra());
function ConfirmarCompra(){
    let nombre = document.getElementById('nombre');
    let direccion = document.getElementById('direccion');
    let numero = document.getElementById('telefono');
    let email = document.getElementById('email');
//  2 if guardan datos de form en localStorage
    if (document.getElementById('efectivo').checked){
        // alertar informacion de entrega
    }
    if (document.getElementById('transferencia').checked){
        // alertar datos para transferencia
    }
    else{
        // alertar
    }
}
