const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Sabado';
}  else {
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);
