function costeTotal() {
  console.log("-----------función costeTotal");
  let numeroEntradas = document.getElementById("numero").value;
  console.log("num entradas = " + numeroEntradas);
  let costePorEntrada = 0;
  let valorExposicion = document.getElementById("exposicion").value;
  if (valorExposicion === "e1") {
    costePorEntrada = 10;
  } else if (valorExposicion === "e2") {
    costePorEntrada = 8;
  } else if (valorExposicion === "e3") {
    costePorEntrada = 5;
  } else if (valorExposicion === "e4") {
    costePorEntrada = 0;
  }
  console.log("coste por entrada = " + costePorEntrada);
  let costeEntradas = numeroEntradas * costePorEntrada + " €";
  console.log("coste = " + costeEntradas);
  document.getElementById("coste").innerHTML = costeEntradas;
}
function comprar() {
  console.log("-----------función comprar");
  document.getElementById("nom").innerHTML =
    document.getElementById("nombre").value;
  document.getElementById("corr").innerHTML =
    document.getElementById("correo").value;
  document.getElementById("num").innerHTML =
    document.getElementById("numero").value;
  document.getElementById("ct").innerHTML =
    document.getElementById("coste").innerHTML;
  let valorExposicion = document.getElementById("exposicion").value;
  let nombreExposicion = "";
  if (valorExposicion === "e1") {
    nombreExposicion = "Exposición Adultos - 10 €";
  } else if (valorExposicion === "e2") {
    nombreExposicion = "Exposición Jóvenes - 8 €";
  } else if (valorExposicion === "e3") {
    nombreExposicion = "Exposición Carnet Joven - 5 €";
  } else if (valorExposicion === "e4") {
    nombreExposicion = "Exposición Niños - 0 €";
  }
  document.getElementById("ex").innerHTML = nombreExposicion;
  document.getElementById("modal").style.display = "flex";
  return false;
}
function cerrarVentana() {
  console.log("-----------función cerrarVentana");
  // Se oculta la ventana modal cambiando el valor de su propiedad CSS display
  document.getElementById("modal").style.display = "none";
}
