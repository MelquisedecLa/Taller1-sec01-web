//ejercicio 6

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}

let producto1 = new Producto("agua", 10, 5);
let producto2 = new Producto("te", 5, 3);

console.log(producto1);
console.log(producto2);
