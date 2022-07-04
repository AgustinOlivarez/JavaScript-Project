let cart = []
console.log(cart)
let carritoenSS = JSON.parse(localStorage.getItem('cart'))
console.log(carritoenSS)
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
                localStorage.setItem('cart' , JSON.stringify(cart))
                alert("Agregaste " + product.nombre + " al carrito")
                // Pushear LocalStorage
                function PushStorage(){
                    
                    carritoenSS.forEach((productos) => {
                        const divCart = document.createElement('li')
                        divCart.innerHTML += ` 
                        <img src="${productos.img}">
                        <h3>${productos.nombre}</h3>
                        <h3>$${productos.precio}</h3>
                        <h3>Cantidad: ${productos.cantidad}</h3>
                        <button class="eliminar" data-id=${productos.id}>X</button>`
                        div.appendChild(divCart)    
                        
                        
                    })
                    // showCart()
                }

                if (carritoenSS != null) {
                     PushStorage()
                     const totalSS = carritoenSS.reduce((totalSS, item) => totalSS + item.precio, 0);
                     let total2 = cart.reduce((total2, item) => total2 + item.precio, 0);
                     let total = total2 + totalSS
                     console.log(total)
                     totalCompra.innerText = ("Precio Total: AR$" + total)
                     div.innerHTML = ``
                    }
                    else {
                        let total2 = cart.reduce((total2, item) => total2 + item.precio, 0);
                        let total = total2
                        console.log(total)
                        totalCompra.innerText = ("Precio Total: AR$" + total2)
                        div.innerHTML = ``
                    }
                    
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
// Pushear localStorage
function PushStorage(){

        // carritoenSS.forEach((productos) => {
        //     const divCart = document.createElement('li')
        //     divCart.innerHTML += ` 
        //     <img src="${productos.img}">
        //     <h3>${productos.nombre}</h3>
        //     <h3>$${productos.precio}</h3>
        //     <h3>Cantidad: ${productos.cantidad}</h3>
        //     <button class="eliminar" data-id=${productos.id}>X</button>`
        //     div.appendChild(divCart)    
            
            const totalSS = carritoenSS.reduce((totalSS, item) => totalSS + item.precio, 0);
            totalCompra.innerText = ("Precio Total: AR$" + totalSS)
            div.innerHTML = ``
            
        
        showCart()
    
    }
    carritoenSS != null &&  PushStorage()




function showCart() {
    alertCart.remove()
    cart.forEach((productos) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${productos.img}">
            <h3>${productos.nombre}</h3>
            <h3>$${productos.precio}</h3>
            <h3>Cantidad: ${productos.cantidad}</h3>
            <button class="eliminar" data-id=${productos.id}>X</button>`
            div.appendChild(divCart)
        })
        carritoenSS.forEach((productos) => {
            const divCart = document.createElement('li')
            divCart.innerHTML += ` 
            <img src="${productos.img}">
            <h3>${productos.nombre}</h3>
            <h3>$${productos.precio}</h3>
            <h3>Cantidad: ${productos.cantidad}</h3>
            <button class="eliminar" data-id=${productos.id}>X</button>`
            div.appendChild(divCart)    

        })
} 
        // Eliminar item del carrito  (SIN HACER)
let eliminarItem = document.querySelector(".eliminar")

   


//Vaciar todo el carrito //
let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div2.append(deleteCart)

deleteCart.onclick = () => {
    localStorage.clear(cart)
    cart = []
    div.innerHTML = ``
    console.log(cart)
    let total = 0
    totalCompra.innerText = ("Precio Total: AR$" + total)
    
}


buttonCart.onclick = () => {
div.innerHTML = ``    
showCart()
}

// Filtrar resultados
let InputSearch = document.getElementById("InputSearch")
let filtrar = document.getElementById("filtrar")

// terminar filtrado