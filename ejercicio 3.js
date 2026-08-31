//ejercicio 3
function CelciusFarenheit(temperaturaCelcius){
    if ((temperaturaCelcius) && (typeof temperaturaCelcius === 'number'))
        return((temperaturaCelcius * 1.8) + 32);
    else 
        return 'hubo un error'
}


