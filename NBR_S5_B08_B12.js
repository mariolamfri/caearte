let index = (B08 - B12) / (B08 + B12);
let min = -1;
let max = 1;
let zero = 0.2;

// colorBlend devuelve un color cuando el valor del indice cae en el intervalo [min,max] y es blanco cuando es menor al min.
// Para poner el color negro en donde es mayor al maximo hay que descomentar la ultima linea de colorBlend.
// Los valores min/max fueron calculados automaticamente y pueden estar mal especificados, por lo que a veces hay que ajustar esos valores.
// El indice cruza por cero, por lo que se usa una paleta de colores divergente. Para cambiar el valor del corte hay que cambiar la variable 'zero'.

let low_color = [1, 1, 1];
let high_color = [10, 0, 0];
let zero_color = [50/255, 90/255, 50/255];
let overflow_color = [0, 0, 0];

return colorBlend(-index, [min, zero, max],
[
low_color,
zero_color, // divergencia en zero
high_color,
overflow_color // descomentar para ver los overflows
]);
