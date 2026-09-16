const TAX = parseFloat(prompt('Enter tax rate (0.10)'));
const SHIPPING = parseFloat(prompt('Enter shipping threshold (1000)'));
const COSTO_DE_ENVIO = 40;

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

var subtotales = 0;

for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let subtotal = calcularSubtotal(item.quantity, item.product.price)
    subtotales += subtotal;
    outputCartRow(item, subtotal);
}

let impuesto = subtotales * TAX;
let costoEnvio = 0;

if (subtotales < SHIPPING) {
    costoEnvio = COSTO_DE_ENVIO;
}

let grandTotal = subtotales + impuesto + costoEnvio;