// Ejercicio 1: Cálculo de precio final con descuento

const nombreProducto = prompt("Ingrese el nombre del producto:");
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (!nombreProducto || isNaN(precioProducto) || isNaN(porcentajeDescuento)) {
  console.log("Por favor, ingrese datos válidos.");
} else {
  const descuento = (precioProducto * porcentajeDescuento) / 100;
  const precioFinal = precioProducto - descuento;

  console.log(`Producto: ${nombreProducto}`);
  console.log(`Precio original: $${precioProducto.toFixed(2)}`);
  console.log(`Descuento aplicado: ${porcentajeDescuento}%`);
  console.log(`Monto del descuento: $${descuento.toFixed(2)}`);
  console.log(`Precio final: $${precioFinal.toFixed(2)}`);
}
