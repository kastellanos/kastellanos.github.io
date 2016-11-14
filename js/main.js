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
  claveCorrecta = "Gaijin-desu";
  validacion( claveIngresada,  claveCorrecta );
}


function mapa3(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
      {id: 2, label: 'Finlandia'},
      {id: 3, label: 'Japon'},
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

function nivel4(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "d3f4ult";
  validacion( claveIngresada,  claveCorrecta );
}


function mapa4(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
      {id: 2, label: 'Finlandia'},
      {id: 3, label: 'Japon'},
      {id: 4, label: 'Rusia'},

  ];

  // Crea un arreglo con las conexiones entre los nodos.
  var edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 3, to: 4},
  ];
  // Crea un arreglo con los nodos activos.
  var activeNode = [ 4 ];
  mapa( nodes, edges, activeNode );
}

function nivel5(event) {
  claveIngresada = document.getElementById("clave").value;
  claveCorrecta = "1B7an#Se!t.";
  validacion( claveIngresada,  claveCorrecta );
}


function mapa5(){
  // Crea un arreglo con los nodos visitados hasta ahora.
  var nodes = [
      
      {id: 1, label: 'Brasil'},
      {id: 2, label: 'Finlandia'},
      {id: 3, label: 'Japon'},
      {id: 4, label: 'Rusia'},
      {id: 5, label: 'China'},
  ];

  // Crea un arreglo con las conexiones entre los nodos.
  var edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 3, to: 4},
      {from: 4, to: 5},
      

  ];
  // Crea un arreglo con los nodos activos.
  var activeNode = [ 5 ];
  mapa( nodes, edges, activeNode );
}