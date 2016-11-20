function validacion( claveIngresada, claveCorrecta ){

  if( claveIngresada == claveCorrecta){
    document.getElementById("correcto").style.visibility='visible';
    document.getElementById("incorrecto").style.visibility='hidden';
  }else{
    document.getElementById("incorrecto").style.visibility='visible';
    document.getElementById("correcto").style.visibility='hidden';
  
  }
}


function nivel1(event) {
	claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "MasterOfPupetsRules";
	validacion( claveIngresada,  claveCorrecta );
}
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

function nivel2(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "T3mpora!";
  validacion( claveIngresada,  claveCorrecta );
}


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

function nivel3(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "YoSoyElMejorHacker";
  validacion( claveIngresada,  claveCorrecta );
}


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

function caesar(){
  textToShift = document.getElementById("caesar_input").value;
  shift = document.getElementById("shift_input").value;
  lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //alert(textToShift.length);
  var textShifted = "";
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
  document.getElementById("caesar_output").value = textShifted;
}

function mapaDelSitio(){
  var nodes = [
      
      {id: 1, label: 'Página Web'},
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
}