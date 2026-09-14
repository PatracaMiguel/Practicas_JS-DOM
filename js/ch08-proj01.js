
const tax_rate = parseFloat(prompt('Enter tax rate (0.10)'));
const shipping_threshold = parseFloat(prompt('Enter shipping threshold (1000)'));
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

let impuesto = subtotales * tax_rate;
let costoEnvio = 0;

if (subtotales <= shipping_threshold) {
    costoEnvio = COSTO_DE_ENVIO;
}

let grandTotal = subtotales + impuesto + costoEnvio;

document.write(`
    <tr class="totals">
        <td colspan="4">Subtotal</td>
        <td>$${subtotales.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Tax</td>
        <td>$${impuesto.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4">Shipping</td>
        <td>$${costoEnvio.toFixed(2)}</td>
    </tr>
    <tr class="totals">
        <td colspan="4" class="focus">Grand Total</td>
        <td class="focus">$${grandTotal.toFixed(2)}</td>
    </tr>
`);
