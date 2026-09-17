/* add your code here */

var matrix = JSON.parse(content);

for (let i = 0; i < matrix.length; i++) {
    outputCard(matrix[i]);
}

function outputCard(foto) {
    document.write('<article>');
    document.write('<img src="images/' + foto.filename + '">');
    document.write('<div class="caption">');
    document.write('<h2>' + foto.title + '</h2>');
    document.write('<p>' + foto.location.city + ', ' + foto.location.country + '</p>');
    document.write('<div class="colors">');
    document.write('<h3>Colors</h3>');
    outputColors(foto.colors);

    document.write('</div>');
    document.write('</div>');
    document.write('</article>');
}

function outputColors(colors) {
    for (let i = 0; i < colors.length; i++) {
        let colores = constructColor(colors[i]);
        document.write(colores);
    }
}

function constructColor(color) {
    return '<span style="' + constructStyle(color) + '">' + color.name + '</span>';
}

function constructStyle(singleColor) {
    var color;
    if (singleColor.luminance < 70) {
        color = "color: white";
    }
    return "background-color: " + singleColor.hex + " ; " + color;
}