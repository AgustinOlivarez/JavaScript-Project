function calcularTotal() {
  var valore= parseInt(document.getElementById("valor").value);
  var resultado = 0;
  var Argentina = 0.35;
  var Chile = 0.19;
  var Brasil = 0.18;
  var Uruguay = 0.22;
  if(document.getElementById ("uno").checked){
      resultado = (valore * Argentina) + valore;
      alert("El valor total del juego sera: U$D" + resultado);
  }
  else if (document.getElementById("dos").checked){
      resultado = (valore * Chile) + valore;
      alert("El valor total del juego sera: U$D" + resultado);
  }
  else if (document.getElementById("tres").checked){
      resultado = (valore * Brasil) + valore;
      alert("El valor total del juego sera: U$D" + resultado); 
  }
  else if (document.getElementById("cuatro").checked){
    resultado = (valore * Uruguay) + valore;
    alert("El valor total del juego sera: U$D" + resultado); 
}
 else{
     alert("Tienes que seleccionar un pais")
 }
}

