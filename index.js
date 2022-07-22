let carritoenLS = JSON.parse(localStorage.getItem("cart"));
let showAllProducts = document.getElementById("showAllProducts");
const divCart = document.querySelector(".divCart");
const div2 = document.querySelector(`#cartList`);

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Agregar al carrito verifica que el item exista en el carrito y en base a eso modifica la cantidad o crea una copia del item al carrito agregando propiedad cantidad
const AgregarAlCarrito = (product) => {
  // ESTÁ EL PRODUCTO YA EN EL CARRITO?
  let newProduct = cart.find(p => p.id == product.id);
  if(newProduct == undefined){
    // NO: LE AGREGO LA PROPIEDAD CANTIDAD Y LO AGREGO AL ARRAY
    newProduct = product;
    newProduct.cantidad = 1;
    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}`
  } else{
    // Si: LE SUMO 1 A CANTIDAD
    cart[cart.findIndex(p => p.id == product.id)].cantidad++;
    localStorage.setItem("cart", JSON.stringify(cart));
    totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}`
  }
};
// Funcion mostrar productos crea la card de los productos del catalogo cargando la info del archivo.json

function MostrarProductos() {
  fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      productos = data;

      productos.forEach((product) => {
        let card = document.createElement("div");
        showAllProducts.append(card);
        let img = document.createElement("img");
        img.setAttribute("src", product.img);
        let name = document.createElement("h3");
        name.innerText = product.nombre;
        let price = document.createElement("p");
        price.innerText = "AR$" + product.precio;
        let buyButton = document.createElement("button");
        buyButton.innerText = "Agregar al carrito";
        buyButton.setAttribute("name",product.nombre);
        buyButton.setAttribute("class","buyButton");
        card.append(img, name, price, buyButton);

        buyButton.addEventListener("click", () => {
          Swal.fire({
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            position: "top-end",
            icon: "success",
            title: "Agregaste " + product.nombre + " al carrito",
            showConfirmButton: false,
            timer: 1000,
          });
          AgregarAlCarrito(product);
          showCart();
          console.log(cart)
        });
      });
    });
}

MostrarProductos();
let cartView = document.getElementById("showProductsCart");
let goToCart = document.getElementById("goToCart");
let carrito = document.getElementById("cartList");
const buttonCart = document.getElementById("mostrarCarrito");

let alertCart = document.createElement("h2");
alertCart.setAttribute("class", "alerta");

// Cargar items de elementos y total en Storage
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
// ShowCart genera el dom del carrito y las funcionalidades del input de cantidad y boton eliminar
function showCart() {
  divCart.innerHTML = ``;
  cart.forEach(({ id, nombre, precio, img, cantidad }) => {
    divCart.innerHTML += `
    <li> 
      <img class="imagenProducto"src="${img}">
      <h3 class="producto"">${nombre}</h3>
      <h3 id="precio">AR$${precio}</h3>
      <div class="itemcantidad">
      <input class ="cantidadInput" type="number" placeholder="Cantidad" value=${cantidad} data=${id}></input>
      </div>
      <div class="itemeliminar">
      <button class=" btn btn-danger eliminar" data=${id}>X</button>
      </div>
      </li>`;

     let InputCantidad = document.getElementsByClassName("cantidadInput");
     for (let a of InputCantidad) {
      a.addEventListener("change", (e) => {
        if(a.value > 0){
          cart[cart.findIndex(p => p.id == a.getAttribute("data"))].cantidad = a.value;
          localStorage.setItem("cart", JSON.stringify(cart));
          totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}`
        }
        else{
          cart[cart.findIndex(p => p.id == a.getAttribute("data"))].cantidad = 1;
          a.value = 1;
        }


      })
     }
    let eliminarItem = document.getElementsByClassName("eliminar");
    for (let b of eliminarItem) {
      b.addEventListener("click", (e) => {
        cart = cart.filter((p) => p.id != b.getAttribute("data"));
        localStorage.setItem("cart", JSON.stringify(cart));
        totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + item.precio, 0)}`
        divCart.innerHTML = "";
        showCart();
        console.log(cart);
      });
    }
  });
}

//Vaciar todo el carrito //
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
// este boton hace que el carrito cargue en la otra seccion de la pagina
buttonCart.onclick = () => {
  divCart.innerHTML = ``;
  showCart();
};

