let carritoenLS = JSON.parse(localStorage.getItem("cart"));
let showAllProducts = document.getElementById("showAllProducts");
const divCart = document.querySelector(".divCart");
const div2 = document.querySelector(`#cartList`);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const AgregarAlCarrito = (product) => {
  let id = product.id
  console.log(id);
  for (let i = 0; i < cart.length; i++) {
    if (id === cart[i].id) {
      console.log("Item se repite");
      product.cantidad++;
    }

  }
  if (product.cantidad === 1) {
    cart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    console.log(JSON.parse(localStorage.getItem("cart")));
    totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + item.precio, 0)}`
  }
};

// Funcion mostrar productos

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
        buyButton.setAttribute("class","buyButton")
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
          // let newProduct = productos.find(product => product.nombre == buyButton.getAttribute("data"));
          // console.log(newProduct);
          // newProduct.cantidad = 1;
          // cart = [...cart, newProduct];
          // totalCompra.innerText = `Precio Total: AR$${cart.reduce((total, item) => total + item.precio, 0)}`
          AgregarAlCarrito(product);
          showCart();
          console.log(cart)
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
      <input id ="cantidad" type="number" placeholder="Cantidad" value="1" data=${id}></input>
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

buttonCart.onclick = () => {
  divCart.innerHTML = ``;
  showCart();
};

