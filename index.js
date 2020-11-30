const contenido = document.querySelector("#contenidoFecha");
const comentario = document.querySelector("#comentario");

/*Validación Fecha de Nacimiento Mayoria de edad del usuario*/
function edad(fechaUsuario) {
  //El siguiente fragmento de codigo lo uso para igualar la fecha de nacimiento con la fecha de hoy del usuario
  let d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  d = [year, month, day].join("-");

  /*------------*/
  const hoy = new Date(d); //fecha del sistema con el mismo formato que "fechaUsuario"
  const cumpleanos = new Date(fechaUsuario);
  //alert(cumpleanos+" "+hoy);
  //Calculamos años
  const edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  // calculamos los meses
  let meses = 0;
  if (hoy.getMonth() > cumpleanos.getMonth()) {
    meses = hoy.getMonth() - cumpleanos.getMonth();
  } else if (hoy.getMonth() < cumpleanos.getMonth()) {
    meses = 12 - (cumpleanos.getMonth() - hoy.getMonth());
  } else if (
    hoy.getMonth() == cumpleanos.getMonth() &&
    hoy.getDate() > cumpleanos.getDate()
  ) {
    if (hoy.getMonth() - cumpleanos.getMonth() == 0) {
      meses = 0;
    } else {
      meses = 11;
    }
  }
  // Obtener días: día actual - día de cumpleaños
  let dias = hoy.getDate() - cumpleanos.getDate();
  if (dias < 0) {
    // Si días es negativo, día actual es mayor al de cumpleaños,
    // hay que restar 1 mes, si resulta menor que cero, poner en 11
    meses = meses - 1 < 0 ? 11 : meses - 1;
    // Y obtener días faltantes
    dias = 30 + dias;
  }

  contenidoFecha.innerHTML = `Tu edad es de ${edad} años, ${meses} meses, ${dias} días`;
}
edad("2020-03-22");
