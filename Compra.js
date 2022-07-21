let ConfirmButton = document.getElementById('confirmar');
ConfirmButton.addEventListener('click', ConfirmarCompra());
function ConfirmarCompra(){
    function CrearPedido(nombre,direccion,numero,email){
        let nombre = document.getElementById('nombre');
        let direccion = document.getElementById('direccion');
        let numero = document.getElementById('telefono');
        let email = document.getElementById('email');
    
        
        //  2 if guardan datos de form en localStorage
        if (document.getElementById('efectivo').checked){
            // alertar informacion de entrega
        Swal.fire({
            title: 'Tu pedido se realizó con éxito y se estará enviando en las próximas 2 horas',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: true,
        })
    }
    if (document.getElementById('transferencia').checked){
        // alertar datos para transferencia
        Swal.fire({
            title: 'Alias: Crazy.Drinks.Delivery',
            text: 'Si la transferencia no es realizada en 30 minutos, el pedido será cancelado',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: true,
        })
    }
    else{
        Swal.fire({
            title: 'Seleccione su método de pago para confirmar',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: true,
        })
    }
}
}
