/* define your functions here */
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function outputCartRow(item, total) {
    document.write(`
    <tr>
        <td><img src="images/${item.product.filename}"></td>
        <td>${item.product.title}</td>
        <td>${item.quantity}</td>
        <td>$${item.product.price.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td>
    </tr>
    `)
}
