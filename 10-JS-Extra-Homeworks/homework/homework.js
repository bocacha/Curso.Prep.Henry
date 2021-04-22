// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

return Object.entries(objeto);
    
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*var mtzString=[letra,valor];
  const contador=0;
  for(var i=0; i < string.length; i++){
    var letra=string.charAt(i);
   
      for(var x=1; x < string.length; x++){
        var misma=string.charAt(x){
          if (string===misma){

            contador++;
          }
        }
        objString.
  }*/

    var objeto = {}; 
    for(var i in string){
        objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1; 
    }
    return objeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //var x=s.length;
  var caps = []; 
  var lower = [];
    for (var i = 0; i < s.length; i++)
        {
            if (s[i] == s[i].toUpperCase()){              
                caps.push(s[i]);
            }
            if (s[i] == s[i].toLowerCase()){
                lower.push(s[i]);
            }
        }
    return caps.join("").concat(lower.join(""));

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //return str.split('').reverse().join('');
  /*
    
    arrayX=str.split(" ");
    arrayX.sort().reverse();
    var arrayXX='';

    arrayX.forEach(function(item){
      items=item.split('').sort().reverse();
      arrayXX=arrayXX+items.join('');
    });
    return arrayXX;
    var x = str.split( );
    var elemento=[];

    for(i=0; i<=x.length; i++){
         elemento = x[i].split('').reverse().join('');
    }
  return elemento   */
  return str.split("").reverse().join("").split(" ").reverse().join(" ")    

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var valor=numero.toString();
  var tamaño=valor.length;

  for(var i=0; i < tamaño /2 ; i++){
    if(valor[i] !== valor[tamaño -1 -i]){
      return "No es capicua"
    }
    return "Es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var resultado=cadena.replace(/[abc]/g,'');
  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  return arr.sort(function (a, b) {return a.length - b.length;} );

 nuevoArray= sortArray(arr);

  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo1.filter(function(n) {
    return arreglo2.indexOf(n) !== -1;
});



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

