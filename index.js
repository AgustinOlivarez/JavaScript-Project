const  productos = 
[
    {
        id: 1,
        nombre: "Combo 1: 1 Fernet + 2 Cocas",
        precio: 2000
    },
    {
        id: 2,
        nombre: "Combo 2: 1 Gin + 2 Tonicas",
        precio: 2200
    },
    {
        id: 3,
        nombre: "Combo 3: 1 Ron + 2 Cocas",
        precio: 2500
    }
]

const pedirProd = () => {
    let idProd = parseInt(prompt("Ingrese el número de combo que quiere:\n1) 1Fernet + 2Cocas\n2) 1Gin + 2Tonicas\n3) 1Ron + 2Cocas"));
    
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    let idProd2 = parseInt(prompt("Ingrese el número de combo que quiere (en caso de querer otro):\n1) 1Fernet + 2Cocas\n2) 1Gin + 2Tonicas\n3) 1Ron + 2Cocas"));
    
    let cantidad2 = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    let idProd3 = parseInt(prompt("Ingrese el número de combo que quiere (en caso de querer otro):\n1) 1Fernet + 2Cocas\n2) 1Gin + 2Tonicas\n3) 1Ron + 2Cocas"));
    
    let cantidad3 = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    let TotalCombo1 = productos[idProd - 1].precio * cantidad

    let TotalCombo2 = productos[idProd2 - 1].precio * cantidad2

    let TotalCombo3 = productos[idProd3 - 1].precio * cantidad3
    alert(`El precio del primer combo es AR$${TotalCombo1}`);
    alert(`El precio del segundo combo es AR$${TotalCombo2}`);
    alert(`El precio del tercer combo es AR$${TotalCombo3}`);
    alert(`El precio total es AR$${TotalCombo1 + TotalCombo2 + TotalCombo3}`)
}
pedirProd();

