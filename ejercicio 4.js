//ejercicio 4
function calculadora(num1, num2, operacion){
    if ((num1 && num2) && (typeof num1 === 'number') && (typeof num2 === 'number')){
        switch(operacion){
            case 'suma':
                return num1 + num2;
            case 'resta':
                return num1 - num2;
            case 'multiplicacion':
                return num1 * num2;
            case 'division':
                return num1 / num2;
            default:
                return 'operacion no valida';
        }
    } else {
        return 'hubo un error';
    }
}