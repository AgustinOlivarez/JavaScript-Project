let carritoenSS = JSON.parse(localStorage.getItem('cart'))
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')
const div2 = document.querySelector(`#cartList`)


cart = JSON.parse(localStorage.getItem("cart")) || [];
const AgregarAlCarrito = (product) => {
    cart= [...cart, product];
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
    console.log(JSON.parse(localStorage.getItem('cart')));
}

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
        
            buyButton.addEventListener("click", () => {
                Swal.fire({
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      },
                    position: 'top-end',
                    icon: 'success',
                    title: ("Agregaste " + product.nombre + " al carrito"),
                    showConfirmButton: false,
                    timer: 1000
                })
                AgregarAlCarrito(product)
                if (carritoenSS != null) {
                    let total2 = cart.reduce((total2, item) => total2 + item.precio, 0);
                    let total = total2
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
 

// Cargar items de elementos en Storage
function LoadStorage(){

            const totalSS = carritoenSS.reduce((totalSS, item) => totalSS + item.precio, 0);
            totalCompra.innerText = ("Precio Total: AR$" + totalSS)
            div.innerHTML = ``
            
        
        showCart()
    
    }
    carritoenSS != null &&  LoadStorage()




function showCart() {
    alertCart.remove()
    cart.forEach(({id, nombre, precio, img, cantidad}) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${img}">
            <h3>${nombre}</h3>
            <h3>$${precio}</h3>
            <h3>Cantidad: ${cantidad}</h3>
            <button class="eliminar" data-id=${id}>X</button>`
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
    Swal.fire({
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        position: 'center',
        icon: 'success',
        title: "El carrito se vació con éxito",
        imageUrl: './IMG/carritoVacio.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Carrito Vacio',
        showConfirmButton: false,
        timer: 1000
    })
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