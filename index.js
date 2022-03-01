const Control = require('./control/control')

// Paso 1
// Control.cliente.insertar(
//     '150',
//     'Laura Edith López Fregoso',
//     'Laura23872!',
//     '25/02/2020',
//     'laura@hotmail.com',
//     'LOFL000707G95',
//     'Trabajo Social #145',
//     'Ruta de la INE',
//     5,
//     'Ahorro',
//     'Debito',
//     '6871579434'
// )

// Control.administrador.insertar(
//     '230',
//     'Jorge Gonzalez',
//     'jorguito78!',
//     '05/10/2019',
//     'jorgegonheyu@hotmail.com',
//     'Representante',
//     'Administrativa',
//     'Gerencial',
//     '6441520066'
// )

// Paso 2
// Control.tarjeta.insertar(
//     '1526 0000 7896 4500',
//     'Ruta del chip',
//     455,
//     '12/23',
//     'Bancomer',
//     '4588 2212 0000 120000',
//     'Debito'
// )


//Paso 3
// Control.cliente.actualizar(
//     '150',
//     'Laura Edith López Fregoso',
//     'Laurita00872!',
//     '25/02/2020',
//     'laurafregoso3@hotmail.com',
//     'LOFL000707G95',
//     'Trabajo Social #145',
//     'Ruta de la INE',
//     5,
//     'Ahorro',
//     'Debito',
//     '6871579434'
// )

// Paso 4
// Control.movimiento.insertar(
//     '2633',
//     2500,
//     '87987-12100-25151',
//     '2022-12-10T23:10:52. 022Z',
//     'Santander'
// )

// Paso 5
// Control.movimiento.obtener('2633').then(movi => {
//     Control.cliente.obtener('150').then(cl => {
//             Control.tarjeta.obtener('1526 0000 7896 4500').then(c => {
//                 Control.cuenta.insertar(
//                     4800,
//                     'Ruta del estado de cuenta',
//                     movi[0],
//                     c[0],
//                     'Ahorro',
//                     cl[0]
//                 );
//           });
//     });
// })




