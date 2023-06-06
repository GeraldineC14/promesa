//Funciones tradicionales
function saludar(nombre){
  return `Bienvenido ${nombre}`
}

function mostrarAmigos(){
  return['Juan','Luis','Pedro']
}
/*
let resultado1 = saludar('Geraldine')

console.log(resultado1) // forma 1
console.log(mostrarAmigos()) //forma 2
*/
//Función flecha / parámetros
const perfil ={
  'apellidos'   : 'Castilla Felix',
  'nombres'     : 'Geraldine',
  'edad'        : 23,
  'estaCasado'  : false,
  'amigos'      : ['Piero', 'Diego', 'Pancracio','Pancracio2'],
  'contacto'    : {
    'telefono'  : ['963380181','966666666'],
    'ciudad'    : 'Chincha',
    'casaPropia': true
  },
  'skill'       : function (){
    return "Yo se programar"
  }
}
console.log(perfil.skill())