const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        };

        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });


    });
};

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`);
            return;
        }

        console.log('==========='.red);
        console.log(`TABLA DE ${base}`.red);
        console.log('==========='.red);

        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}\n`);
        };


    })

};

module.exports = {
    crearArchivo,
    listar

};