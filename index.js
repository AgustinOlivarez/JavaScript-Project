let cart= []
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')

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

    cart.forEach((element) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${element.img}">
        <h3>${element.nombre}</h3>
        <h3>$${element.precio}</h3>
        <button class="eliminar" data-id=${element.id}>X</button>`


        div.appendChild(divCart)
    })}
    // Eliminar item del carrito 
let eliminarItem = document.querySelector(".eliminar")


// Calcular total
const total = cart.map((item) => parseInt(item.precio)).reduce((cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0);
console.log(total)

let totalCompra = document.createElement("h4")
totalCompra.innerText = ("Precio Total: AR$" + total)
div.append(totalCompra)

//Vaciar todo el carrito //
let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div.append(deleteCart)

deleteCart.onclick = () => {
 
    cart = []
    div.innerHTML = ``
    console.log(cart)
}


buttonCart.onclick = () => {
div.innerHTML = ``    
showCart()
}

