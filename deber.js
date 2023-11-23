function validarTaxi() {
    const datosTaxi = {
      marca: prompt("Ingresa la marca del taxi:"),
      modelo: prompt("Ingresa el modelo del taxi:"),
      anioFabricacion: parseInt(prompt("Ingresa el año de fabricación del taxi:")),
      // Otros atributos que quieras incluir en el objeto
    };
  
    const anioActual = new Date().getFullYear();
    const vidaUtil = anioActual - datosTaxi.anioFabricacion;
  
    const esMenorA10Anios = vidaUtil < 10;
    return esMenorA10Anios;
  }
  
  const esMenorA10 = validarTaxi();
  
  if (esMenorA10) {
    alert("El taxi tiene menos de 10 años de vida útil.");
  } else {
    alert("El taxi tiene 10 años o más de vida útil.");
  }