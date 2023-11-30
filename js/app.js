const fecha = () => {
  const diaDeLaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febreo",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const fechaActual = new Date();
  const diaDelMes = fechaActual.getDate();
  const diaSemana = fechaActual.getDay();
  const nMes = fechaActual.getMonth();
  const anio = fechaActual.getFullYear();
  const fecha = document.querySelector(".fecha");
  let dia;
  let mes;
  fecha.innerText =
    diaDeLaSemana[diaSemana] +
    " " +
    diaDelMes +
    " de " +
    meses[nMes] +
    " del " +
    anio;
};
fecha();
const reloj = () => {
  const horaActual = new Date();
  let hora = horaActual.getHours();
  let minuto = horaActual.getMinutes();
  let segundo = horaActual.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }

  const reloj = document.querySelector(".reloj");
  if (hora <= 11) {
    reloj.innerText = hora + " : " + minuto + " : " + segundo + " AM";
  } else {
    reloj.innerText = hora + " : " + minuto + " : " + segundo + " PM";
  }
};

setInterval(reloj, 1000);
