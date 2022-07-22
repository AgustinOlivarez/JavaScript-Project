let ConfirmButton = document.getElementsByClassName("confirmar");
let carritoenLS = JSON.parse(localStorage.getItem("cart"));
const divCart = document.querySelector(".divCart");
let cartView = document.getElementById("showProductsCart");
let goToCart = document.getElementById("goToCart");
let carrito = document.getElementById("cartList");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = cart.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0);
    // en esta seccion el ShowCart me muestra los items sin el input cantidad que ahora es texto para que no se modifique y el boton eliminar no se crea 
    function showCart() {
  divCart.innerHTML = ``;
  cart.forEach(({ nombre, precio, img, cantidad }) => {
      divCart.innerHTML += `
      <li> 
      <img class="imagenProducto"src="${img}">
      <h3 class="producto"">${nombre}</h3>
      <h3 id="precio">AR$${precio}</h3>
      <div class="itemcantidad">
      <h3 id="cantidadText">${cantidad}</h3>
      </div>
      <div class="itemeliminar">
      </div>
      </li>`;
      totalCompra.innerText = `Precio Total: AR$${cart.reduce(
          (total, item) => total + item.precio * item.cantidad,
          0
          )}`;
        });
        
    }
    showCart();
    
// En esta funcion le digo al boton confirmar que cree un objeto con los datos de compra, lo guarda en el storage y lanza respectivo alert con informacion para el usuario
    for (let a of ConfirmButton){
        a.addEventListener("click", (e) => {
         e.preventDefault()
        let cliente = {
            nombreCliente : document.getElementById('nombre').value,
        direccion : document.getElementById('direccion').value,
        numero : document.getElementById('telefono').value,
        email : document.getElementById('email').value,
        totalaPagar : total,
        carrito : JSON.parse(localStorage.getItem("cartConfirmado"))
    }
    //  2 if guardan datos de form en localStorage
    if (document.getElementById("efectivo").checked) {
        localStorage.setItem("PedidoRealizado", JSON.stringify(cliente));
        console.log('efectivo');
            Swal.fire({
                title:
                "Tu pedido se realizó con éxito y se estará enviando en las próximas 2 horas",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
                showConfirmButton: true,
            });
            
    }
   else if (document.getElementById("transferencia").checked) {
        localStorage.setItem("PedidoRealizado", JSON.stringify(cliente));
        console.log('transferencia');
        Swal.fire({
            title: "Alias: Crazy.Drinks.Delivery",
            text: "Si la transferencia no es realizada en 30 minutos, el pedido será cancelado",
            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
            showConfirmButton: true,
        });
    } 
})
}
    
