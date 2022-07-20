let carritoenLS = JSON.parse(localStorage.getItem("cart"));
let showAllProducts = document.getElementById("showAllProducts");
const div = document.querySelector(".div");
const div2 = document.querySelector(`#cartList`);

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const AgregarAlCarrito = (product) => {
  let id = product.id;
  console.log(id);
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      console.log("Item se repite");
      product.cantidad++;
    }
    // if (id != cart[i].id) {
    //   product.cantidad= 1
    //   console.log('sigo vivo');
    //   cart = [...cart, product];
    //   localStorage.setItem("cart", JSON.stringify(cart));
    //   console.log(cart);
    //   console.log(JSON.parse(localStorage.getItem("cart")));
    // }
  }
  if (product.cantidad === 1) {
    cart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    console.log(JSON.parse(localStorage.getItem("cart")));
  }
};

// Funcion mostrar productos

function MostrarProductos() {
  fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      let productos = data;

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
          if (carritoenLS != null) {
            let cantidadInput = 1;
            let total2 = cart.reduce((total2, item) => total2 + item.precio * cantidadInput,0);
            let total = total2;
            console.log(total);
            totalCompra.innerText = "Precio Total: AR$" + total;
            div.innerHTML = ``;
          } else {
            let total2 = cart.reduce((total2, item) => total2 + item.precio, 0);
            let total = total2;
            console.log(total);
            totalCompra.innerText = "Precio Total: AR$" + total;
            div.innerHTML = ``;
          }
          showCart();
        });
      });
    });
}

MostrarProductos();
// Muestro carrito
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
  div.innerHTML = ``;

  showCart();
}
carritoenLS != null && LoadStorage();

// function cartTotal() {
//   let total = 0;
//   cart.forEach(({precio}) =>{

//     const itemCantidad = parseInt(div.querySelector('#cantidad').value);
//     total = total + precio*itemCantidad;
//     totalCompra.innerText = "Precio Total: AR$" + total;
//     div.innerHTML = ``;
//   })
// }
function showCart() {
  cart.forEach(({ id, nombre, precio, img, cantidad }) => {
    const divCart = document.createElement("li");
    divCart.setAttribute = ("class", "producto");
    divCart.innerHTML += ` 
      <img class="imagenProducto"src="${img}">
      <h3 class="producto"">${nombre}</h3>
      <h3 id="precio">AR$${precio}</h3>
      <div class="itemcantidad">
      <input id ="cantidad" type="number" placeholder="Cantidad" value="${cantidad}" ></input>
      </div>
      <div class="itemeliminar">
      <button class=" btn btn-danger eliminar" data=${id}>X</button>
      </div>`;
    div.appendChild(divCart);

    let eliminarItem = document.getElementsByClassName("eliminar");
    for (let b of eliminarItem) {
      b.addEventListener("click", (e) => {
        cart = cart.filter((p) => p.id != b.getAttribute("data"));
        localStorage.setItem("cart", JSON.stringify(cart));
        div.innerHTML = "";
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
  div.innerHTML = ``;
  let total = 0;
  totalCompra.innerText = "Precio Total: AR$" + total;
};

buttonCart.onclick = () => {
  div.innerHTML = ``;
  showCart();
};

