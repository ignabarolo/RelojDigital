const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let sg = formatoHora(fecha.getSeconds());

  document.getElementById("hora").innerHTML = `${hr}:${min}:${sg}`;

  let dia;
  switch (fecha.getDate()) {
    case 1:
      dia = "Lun, 1";
      break;
    case 2:
      dia = "Mar, 2";
      break;
    case 3:
      dia = "Mie, 3";
      break;
    case 4:
      dia = "Jue, 4";
      break;
    case 5:
      dia = "Vie, 5";
      break;
    case 6:
      dia = "Sab, 6";
      break;
    case 7:
      dia = "Dom, 7";
      break;
    default:
      break;
  }

  let mes;
  switch (fecha.getMonth()) {
    case 1:
      mes = "Ene";
      break;
    case 2:
      mes = "Feb";
      break;
    case 3:
      mes = "Mar";
      break;
    case 4:
      mes = "Abr";
      break;
    case 5:
      mes = "May";
      break;
    case 6:
      mes = "Jun";
      break;
    case 7:
      mes = "Jul";
      break;
    case 8:
      mes = "Ago";
      break;
    case 9:
      mes = "Sep";
      break;
    case 10:
      mes = "Oct";
      break;
    case 11:
      mes = "Nov";
      break;
    case 12:
      mes = "Dic";
      break;
    default:
      break;
  }

  let anio = fecha.getFullYear();

  document.getElementById("fecha").innerHTML = `${dia} ${mes} ${anio}`;
};

const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};

setInterval(mostrarReloj, 1000);
