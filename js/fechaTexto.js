
  //función para generar fecha en textoFecha

  function textoFecha(fecha){
  //Creamos un Array para los nombres de los días    
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var diaLetras = diasSemana[fecha.getDay()];   //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).
  
  //Otro Array para los nombres de los meses    
    var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var mesLetras = meses[fecha.getMonth()];  //El mes en letras
    var diaMes = (fecha.getDate());   //getDate() devuelve el dia(1-31).
    var anho = fecha.getFullYear();  //getFullYear() devuelve el año(4 dígitos).
    var hora = fecha.getHours();    //getHours() devuelve la hora(0-23).
    var min = fecha.getMinutes();   //getMinutes() devuelve los minutos(0-59).
  
  //  var numDiaSem = fecha.getDay(); //getDay() devuelve el dia de la semana.(0-6).
  
  
    if ((min >= 0) && (min < 10)) {    //Algoritmo para añadir un cero cuando el min tiene 1 cifra.
      min = "0" + min;
    }
    var devolver = "Hoy es " + diaLetras+ ", " + diaMes + " de " + mesLetras + " de " + anho + " y son las " + hora + ":" + min + " horas.";
    return devolver;
  }

  var fecha = new Date();  //Declaramos el objeto fecha actual
  document.write(textoFecha(fecha));  //Imprimir llamando a la función textoFecha()
  console.log(textoFecha(fecha));
  alert(textoFecha(fecha));