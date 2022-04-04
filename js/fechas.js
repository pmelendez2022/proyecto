// Función para calcular los días transcurridos entre dos fechas (string)

let restaFechas = function(f1,f2) 
    {
        var aFecha1 = f1.split('/');
        var aFecha2 = f2.split('/');
        var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
        var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return dias;
    }

var f1 = '01/01/2021';
var f2='15/03/2021';
alert(restaFechas(f1,f2));


// Función  para calcular los días transcurridos entre dos fechas (objetos Date)

function difference(date1, date2) {  
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
      day = 1000*60*60*24;
    return(date2utc - date1utc)/day
  }

  const date1 = new Date("2022-01-01"),
      date2 = new Date("2022-03-31"),
      time_difference = difference(date1,date2)

  console.log(time_difference);




