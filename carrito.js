let carritoenLS = JSON.parse(localStorage.getItem("cart"));
const divCart = document.querySelector(".divCart");
const div2 = document.querySelector(`#cartList`);
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartView = document.getElementById("showProductsCart");
let goToCart = document.getElementById("goToCart");
let carrito = document.getElementById("cartList");
const buttonCart = document.getElementById("mostrarCarrito");
function LoadStorage() {
  const totalLS = carritoenLS.reduce(
    (totalLS, item) => totalLS + item.precio,
    0
  );
  totalCompra.innerText = "Precio Total: AR$" + totalLS;
  divCart.innerHTML = ``;

  showCart();
}
carritoenLS != null && LoadStorage();
function showCart() {
  divCart.innerHTML = ``;
  cart.forEach(({ id, nombre, precio, img, cantidad }) => {
    divCart.innerHTML += `
    <li> 
      <img class="imagenProducto"src="${img}">
      <h3 class="producto"">${nombre}</h3>
      <h3 id="precio">AR$${precio}</h3>
      <div class="itemcantidad">
      <input id ="cantidad" type="number" placeholder="Cantidad" value="${cantidad}" ></input>
      </div>
      <div class="itemeliminar">
      <button class=" btn btn-danger eliminar" data=${id}>X</button>
      </div>
      </li>`;

    let eliminarItem = document.getElementsByClassName("eliminar");
    for (let b of eliminarItem) {
      b.addEventListener("click", (e) => {
        cart = cart.filter((p) => p.id != b.getAttribute("data"));
        localStorage.setItem("cart", JSON.stringify(cart));
        divCart.innerHTML = "";
        showCart();
        console.log(cart);
      });
    }
  });
}

let deleteCart = document.createElement("button");
deleteCart.setAttribute("class", "vaciarCarrito");
deleteCart.innerText = "Vaciar carrito";
div2.append(deleteCart);

deleteCart.onclick = () => {
  Swal.fire({
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    position: "center",
    icon: "success",
    title: "El carrito se vació con éxito",
    imageUrl: "./IMG/carritoVacio.png",
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Carrito Vacio",
    showConfirmButton: false,
    timer: 1000,
  });
  localStorage.clear(cart);
  cart = [];
  divCart.innerHTML = ``;
  let total = 0;
  totalCompra.innerText = "Precio Total: AR$" + total;
};
buttonCart.onclick = () => {
  divCart.innerHTML = ``;
  showCart();
};

let buyButton = document.getElementById("comprar");
buyButton.onclick = () => {
  console.log("click");
  if (cart.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Parece que no hay nada en el carrito :c",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }
   else {
    const totalLS = carritoenLS.reduce(
        (totalLS, item) => totalLS + item.precio,
        0
      );
    localStorage.setItem("cartConfirmado", JSON.stringify(cart, totalLS));
    localStorage.setItem("TotalAPagar", JSON.stringify(totalLS));
    location.href = "Compra.html";
  }
};
