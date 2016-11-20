//Función de validación de clave utilizada para el desarrollo de los niveles del juego
function validacion( claveIngresada, claveCorrecta ){
  //Si la clave es correcta muestra un elemento que permite pasar al siguiente nivel
  //Si no es correcta muestra un mensaje de error
  if( claveIngresada == claveCorrecta){
    document.getElementById("correcto").style.visibility='visible';
    document.getElementById("incorrecto").style.visibility='hidden';
  }else{
    document.getElementById("incorrecto").style.visibility='visible';
    document.getElementById("correcto").style.visibility='hidden';
  
  }
}

//Funcion que define la clave y está vinculada al boton de validación en el archivo html
function nivel1(event) {
	claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "MasterOfPupetsRules";
	validacion( claveIngresada,  claveCorrecta );
}
//Funcion que dibuja la red de paises usando la libreria VIS
function mapa( nodes, edges, activeNode ){

                  // create a network
                  var container = document.getElementById('visualization');
                  var data = {
                      nodes: nodes,
                      edges: edges
                  };
                  var network = new vis.Network(container, data, {});
                network.selectNodes(activeNode);
                document.getElementById("clave")
                  .addEventListener("keyup", function(event) {
                  event.preventDefault();
                  if (event.keyCode == 13) {
                      document.getElementById("verifier").click();
                  }
                });
}
//Crea  la secuencia de paises visitados y activa el pais actual para que resalte
function mapa1(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
  ];

  // Crea un arreglo con las conexiones entre los nodos.
  var edges = [

  ];
  // Crea un arreglo con los nodos activos.
  var activeNode = [ 1 ];
  mapa( nodes, edges, activeNode );
 }
//Funcion que define la clave y está vinculada al boton de validación en el archivo html
function nivel2(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "T3mpora!";
  validacion( claveIngresada,  claveCorrecta );
}

//Crea  la secuencia de paises visitados y activa el pais actual para que resalte
function mapa2(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
      {id: 2, label: 'Finlandia'},

  ];

  // Crea un arreglo con las conexiones entre los nodos.
  var edges = [
      {from: 1, to: 2},
  ];
  // Crea un arreglo con los nodos activos.
  var activeNode = [ 2 ];
  mapa( nodes, edges, activeNode );
 }
//Funcion que define la clave y está vinculada al boton de validación en el archivo html
function nivel3(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "YoSoyElMejorHacker";
  validacion( claveIngresada,  claveCorrecta );
}

//Crea  la secuencia de paises visitados y activa el pais actual para que resalte
function mapa3(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
      {id: 2, label: 'Finlandia'},
      {id: 3, label: 'China'},
  ];

  // Crea un arreglo con las conexiones entre los nodos.
  var edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},

      

  ];
  // Crea un arreglo con los nodos activos.
  var activeNode = [ 3 ];
  mapa( nodes, edges, activeNode );
}
// Función diseñada para el tercer nivel, en donde se realiza un procedimiento de corrimiento de letras
// dependiendo del numero de corrimientos definido, por defecto 0
function caesar(){
  // Obtiene el texto del cuadro de texto Entrada
  textToShift = document.getElementById("caesar_input").value;
  // Obtiene el numero de corrimientos
  shift = document.getElementById("shift_input").value;
  lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  var textShifted = "";
  // Procesa el texto y corre los caracteres especificados en shift
  for (var i = 0; i < textToShift.length; i++)
  {

      var c = textToShift.charAt(i);
      var res;
      if(c == c.toLowerCase() && lowercase.indexOf(c)!=-1 ){
        //alert((lowercase.indexOf(c)+parseInt(shift)));
        res = lowercase[ (lowercase.indexOf(c)+parseInt(shift))%26 ];
        
      }else if( uppercase.indexOf(c)!=-1 ){
        res = uppercase[ (uppercase.indexOf(c)+parseInt(shift))%26 ];
      }else{
        res = c
      }
      textShifted +=res;
  }
  // Muestra el texto en el cuadro de texto Salida
  document.getElementById("caesar_output").value = textShifted;
}

