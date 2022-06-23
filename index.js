let cart= []
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')
const div2 = document.querySelector(`#cartList`)
// Funcion mostrar productos
function MostrarProductos() {
    productos.forEach((product) => {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("h3")
        name.innerText = (product.nombre)
        let price = document.createElement("p")
        price.innerText = ("AR$" + product.precio)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(product)
            alert("Agregaste " + product.nombre + " al carrito")
            div.innerHTML = ``
            showCart()
        })
    })
}
MostrarProductos()
// Muestro carrito
let cartView = document.getElementById("showProductsCart")
let goToCart = document.getElementById("goToCart")
let carrito = document.getElementById("cartList")
const buttonCart = document.getElementById("mostrarCarrito")

let alertCart = document.createElement("h2")
alertCart.setAttribute("class", "alerta")

if (!cart.lenght) {
    alertCart.innerText = ("El carrito está vacío")
    div.append(alertCart)
}
function showCart() {
    alertCart.remove()

    cart.forEach((productos) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <h3>$${productos.precio}</h3>
        <button class="eliminar" data-id=${productos.id}>X</button>`


        div.appendChild(divCart)
    })}
    // Eliminar item del carrito  (SIN HACER)
let eliminarItem = document.querySelector(".eliminar")
console.log(cart)


// Calcular total (NO FUNCIONA)
// const total = cart.map((item) => parseInt(item.precio)).reduce((cartTotalPrice, ItemPrice) => cartTotalPrice + ItemPrice, 0);
// console.log(total)
const total = cart.reduce
let totalCompra = document.createElement("h4")
totalCompra.innerText = ("Precio Total: AR$" + total)
div2.append(totalCompra)

//Vaciar todo el carrito //
let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div2.append(deleteCart)

deleteCart.onclick = () => {
 
    cart = []
    div.innerHTML = ``
    console.log(cart)
}


buttonCart.onclick = () => {
div.innerHTML = ``    
showCart()
}

// Filtrar resultados
let InputSearch = document.getElementById("InputSearch")
let filtrar = document.getElementById("filtrar")

// terminar filtrado