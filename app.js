const { crearArchivo } = require('./multiplicar/multiplicar');
const { listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then()
            .catch(err => { console.log(err) })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`El archivo creado es: ${archivo.red}`); })
            .catch(err => { console.log(err) });
        break;

    default:
        console.log('Comamdo no reconocido');
}