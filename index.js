let carritoenLS = JSON.parse(localStorage.getItem("cart"));
let showAllProducts = document.getElementById("showAllProducts");
const div = document.querySelector(".div");
const div2 = document.querySelector(`#cartList`);

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const AgregarAlCarrito = (product) => {
  let id= product.id;
  console.log(id);
  cart = [...cart, product];
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
  console.log(JSON.parse(localStorage.getItem("cart")));

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
            let total2 = cart.reduce(
              (total2, item) => total2 + item.precio * cantidadInput,
              0
            );
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

function showCart() {
  cart.forEach(({ id, nombre, precio, img , cantidad}) => {
    const divCart = document.createElement("li");
    divCart.setAttribute = ("class", "producto");
    divCart.innerHTML += ` 
            <img src="${img}">
            <h3>${nombre}</h3>
            <h3 id="precio">AR$${precio}</h3>
            <input id ="cantidad" type="number" placeholder="Cantidad" value="${cantidad}" ></input>
            <button class=" btn btn-danger eliminar" data=${id}>X</button>`;
    div.appendChild(divCart);
  });
}
// Funcion cantidad
// const cantidadInput = document.getElementById("cantidad");
// if (cantidadInput != null) {
//   cantidadInput.addEventListener("change", CambioCantidad);
// }
// function CambioCantidad() {
//   cantidad.value <= 0 ? (document.getElementById("cantidad").value = 1) : null;
//   console.log("cambio de cantidad");
//   console.log(cantidad.value);
//   if (cantidad.value > 1) {
//   }
// }
// Eliminar item del carrito  (SIN HACER)
// eliminarItem.addEventListener('click',EliminarItem)
let eliminarItem = document.getElementsByClassName("eliminar");
let eliminarItemData = document.getElementsByClassName("eliminar").data;
    for (let b of eliminarItem) {
        b.addEventListener("click", e => {
            console.log('click');
            cart = cart.filter((product) => product.id != b.data);
            console.log(cart);
        })
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

// Filtrar resultados
let filtrar = document.getElementById("filtrar");
filtrar.onclick = () => {
  let Input = document.getElementById("InputSearch").value;
  fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      let productos = data;
      let filtro = productos.filter(
        (InputSearch) => InputSearch.value == productos.tipo
      );
      console.log(filtro);
      console.log(Input);
      alert(InputSearch.value);
    });
};
// terminar filtrado
