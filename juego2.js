(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.imagen2 = function() {
	this.initialize(img.imagen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,322);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.c998 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("8", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c998, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c994 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.c994 = new cjs.Text("4", "12px 'Arial'", "#333333");
	this.c994.name = "c994";
	this.c994.lineHeight = 15;
	this.c994.lineWidth = 7;
	this.c994.parent = this;
	this.c994.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.c994).wait(1));

}).prototype = getMCSymbolPrototype(lib.c994, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c991 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("1", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c991, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c778 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("8", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c778, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c776 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("6", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c776, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c771 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("1", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c771, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("9", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c139, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("6", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c136, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("3", "12px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 7;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.c133, new cjs.Rectangle(0,0,10.7,17.4), null);


(lib.c9w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c9w, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c9l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c9l, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c9i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c9i, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c7w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c7w, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c7l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c7l, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c7i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c7i, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c1w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c1w, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c1l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c1l, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.c1i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape.setTransform(17.2,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AirCrIAAlWIFWAAIAAFWg");
	this.shape_1.setTransform(17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c1i, new cjs.Rectangle(-1,-1,36.3,36.3), null);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FFFF").ss(1,1,1).p("Ar+jIIX9AAIAAGRI39AAg");
	this.shape.setTransform(76.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FFFF").s().p("Ar+DJIAAmRIX9AAIAAGRg");
	this.shape_1.setTransform(76.7,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,155.4,42.2);


// stage content:
(lib.juego2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		var escenario = this;
		iniciar_juego();
		this.btn_empezar.addEventListener("click", empezar_juego.bind(this));
		
		function empezar_juego( event ){
			escenario.gotoAndStop(2);
		}
		function iniciar_juego(){
			escenario.c9w.alpha = 0;
			escenario.c9l.alpha = 0;
			escenario.c9i.alpha = .5;
			escenario.casilla99 = false;
			escenario.total = 0;
			escenario.c7w.alpha = 0;
			escenario.c7l.alpha = 0;
			escenario.c7i.alpha = .5;
			escenario.casilla77 = false;
			escenario.c1w.alpha = 0;
			escenario.c1l.alpha = 0;
			escenario.c1i.alpha = .5;
			escenario.casilla13 = false;
		}
		
		
		this.c991.addEventListener("click", casilla99_lose.bind(this));
		this.c994.addEventListener("click", casilla99_lose.bind(this));
		this.c998.addEventListener("click", casilla99_win.bind(this));
		
		function casilla99_lose( event ){
			if( escenario.casilla99 == true ){
				escenario.casilla99 = false;
				escenario.total -= 1;
			}
			escenario.c9w.alpha = 0;
			escenario.c9l.alpha = .5;
			escenario.c9i.alpha = 0;
		}
		function casilla99_win( event ){
			if( escenario.casilla99 == false ){
				escenario.casilla99 = true;
				escenario.total += 1;
			}
			escenario.c9w.alpha = 0.5;
			escenario.c9l.alpha = 0;
			escenario.c9i.alpha = 0;
			verificarGanador();
		}
		
		
		
		this.c778.addEventListener("click", casilla77_lose.bind(this));
		this.c776.addEventListener("click", casilla77_lose.bind(this));
		this.c771.addEventListener("click", casilla77_win.bind(this));
		function casilla77_lose( event ){
			if( escenario.casilla77 == true ){
				escenario.casilla77 = false;
				escenario.total -= 1;
			}
			escenario.c7w.alpha = 0;
			escenario.c7l.alpha = .5;
			escenario.c7i.alpha = 0;
		}
		function casilla77_win( event ){
			if( escenario.casilla77 == false ){
				escenario.casilla77 = true;
				escenario.total += 1;
			}
			escenario.c7w.alpha = 0.5;
			escenario.c7l.alpha = 0;
			escenario.c7i.alpha = 0;
			verificarGanador();
		}
		
		
		
		this.c133.addEventListener("click", casilla13_lose.bind(this));
		this.c136.addEventListener("click", casilla13_lose.bind(this));
		this.c139.addEventListener("click", casilla13_win.bind(this));
		function casilla13_lose( event ){
			if( escenario.casilla13 == true ){
				escenario.casilla13 = false;
				escenario.total -= 1;
			}
			escenario.c1w.alpha = 0;
			escenario.c1l.alpha = .5;
			escenario.c1i.alpha = 0;
		}
		function casilla13_win( event ){
			if( escenario.casilla13 == false ){
				escenario.casilla13 = true;
				escenario.total += 1;
			}
			escenario.c1w.alpha = 0.5;
			escenario.c1l.alpha = 0;
			escenario.c1i.alpha = 0;
			verificarGanador();
		}
		
		function verificarGanador(){
			if(escenario.total == 3){
				escenario.gotoAndStop(3);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// texto
	this.c771 = new lib.c771();
	this.c771.parent = this;
	this.c771.setTransform(321.7,252.6,1,1,0,0,0,5.3,8.7);

	this.c776 = new lib.c776();
	this.c776.parent = this;
	this.c776.setTransform(334.8,235.2,1,1,0,0,0,5.3,8.7);

	this.c778 = new lib.c778();
	this.c778.parent = this;
	this.c778.setTransform(321.7,235.2,1,1,0,0,0,5.3,8.7);

	this.c139 = new lib.c139();
	this.c139.parent = this;
	this.c139.setTransform(181.5,42,1,1,0,0,0,5.3,8.7);

	this.c136 = new lib.c136();
	this.c136.parent = this;
	this.c136.setTransform(194.6,24.7,1,1,0,0,0,5.3,8.7);

	this.c133 = new lib.c133();
	this.c133.parent = this;
	this.c133.setTransform(181.5,24.7,1,1,0,0,0,5.3,8.7);

	this.c994 = new lib.c994();
	this.c994.parent = this;
	this.c994.setTransform(392.2,320.6,1,1,0,0,0,5.3,8.7);

	this.c998 = new lib.c998();
	this.c998.parent = this;
	this.c998.setTransform(405.3,303.2,1,1,0,0,0,5.3,8.7);

	this.c991 = new lib.c991();
	this.c991.parent = this;
	this.c991.setTransform(392.2,303.2,1,1,0,0,0,5.3,8.7);

	this.text = new cjs.Text("8", "28px 'Arial'", "#333333");
	this.text.lineHeight = 33;
	this.text.lineWidth = 22;
	this.text.parent = this;
	this.text.setTransform(318.4,87.3);

	this.text_1 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 22;
	this.text_1.parent = this;
	this.text_1.setTransform(178.2,264.5);

	this.text_2 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 22;
	this.text_2.parent = this;
	this.text_2.setTransform(215.1,229.2);

	this.text_3 = new cjs.Text("8", "28px 'Arial'", "#333333");
	this.text_3.lineHeight = 33;
	this.text_3.lineWidth = 22;
	this.text_3.parent = this;
	this.text_3.setTransform(353.7,193.2);

	this.text_4 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_4.lineHeight = 33;
	this.text_4.lineWidth = 22;
	this.text_4.parent = this;
	this.text_4.setTransform(353.7,157.9);

	this.text_5 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_5.lineHeight = 33;
	this.text_5.lineWidth = 22;
	this.text_5.parent = this;
	this.text_5.setTransform(141.4,193.2);

	this.text_6 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_6.lineHeight = 33;
	this.text_6.lineWidth = 22;
	this.text_6.parent = this;
	this.text_6.setTransform(108.5,193.9);

	this.text_7 = new cjs.Text("8", "28px 'Arial'", "#333333");
	this.text_7.lineHeight = 33;
	this.text_7.lineWidth = 22;
	this.text_7.parent = this;
	this.text_7.setTransform(247.1,157.9);

	this.text_8 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_8.lineHeight = 33;
	this.text_8.lineWidth = 22;
	this.text_8.parent = this;
	this.text_8.setTransform(247.1,123.3);

	this.text_9 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_9.lineHeight = 33;
	this.text_9.lineWidth = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(280.8,228.5);

	this.text_10 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_10.lineHeight = 33;
	this.text_10.lineWidth = 22;
	this.text_10.parent = this;
	this.text_10.setTransform(353.7,228.5);

	this.text_11 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_11.lineHeight = 33;
	this.text_11.lineWidth = 22;
	this.text_11.parent = this;
	this.text_11.setTransform(318.4,17.4);

	this.text_12 = new cjs.Text("4", "28px 'Arial'", "#333333");
	this.text_12.lineHeight = 33;
	this.text_12.lineWidth = 22;
	this.text_12.parent = this;
	this.text_12.setTransform(285.1,88);

	this.text_13 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_13.lineHeight = 33;
	this.text_13.lineWidth = 22;
	this.text_13.parent = this;
	this.text_13.setTransform(141.4,122.6);

	this.text_14 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_14.lineHeight = 33;
	this.text_14.lineWidth = 22;
	this.text_14.parent = this;
	this.text_14.setTransform(108.5,299.1);

	this.text_15 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_15.lineHeight = 33;
	this.text_15.lineWidth = 22;
	this.text_15.parent = this;
	this.text_15.setTransform(388.9,263.8);

	this.text_16 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_16.lineHeight = 33;
	this.text_16.lineWidth = 22;
	this.text_16.parent = this;
	this.text_16.setTransform(318.4,52.7);

	this.text_17 = new cjs.Text("7", "28px 'Arial'", "#333333");
	this.text_17.lineHeight = 33;
	this.text_17.lineWidth = 22;
	this.text_17.parent = this;
	this.text_17.setTransform(178.2,88);

	this.text_18 = new cjs.Text("3", "28px 'Arial'", "#333333");
	this.text_18.lineHeight = 33;
	this.text_18.lineWidth = 22;
	this.text_18.parent = this;
	this.text_18.setTransform(318.4,264.1);

	this.text_19 = new cjs.Text("3", "28px 'Arial'", "#333333");
	this.text_19.lineHeight = 33;
	this.text_19.lineWidth = 22;
	this.text_19.parent = this;
	this.text_19.setTransform(178.2,228.5);

	this.text_20 = new cjs.Text("3", "28px 'Arial'", "#333333");
	this.text_20.lineHeight = 33;
	this.text_20.lineWidth = 22;
	this.text_20.parent = this;
	this.text_20.setTransform(141.4,88);

	this.text_21 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_21.lineHeight = 33;
	this.text_21.lineWidth = 22;
	this.text_21.parent = this;
	this.text_21.setTransform(247.1,228.5);

	this.text_22 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_22.lineHeight = 33;
	this.text_22.lineWidth = 22;
	this.text_22.parent = this;
	this.text_22.setTransform(108.5,263.8);

	this.text_23 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_23.lineHeight = 33;
	this.text_23.lineWidth = 22;
	this.text_23.parent = this;
	this.text_23.setTransform(388.9,17.4);

	this.text_24 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_24.lineHeight = 33;
	this.text_24.lineWidth = 22;
	this.text_24.parent = this;
	this.text_24.setTransform(215.1,88);

	this.text_25 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_25.lineHeight = 33;
	this.text_25.lineWidth = 22;
	this.text_25.parent = this;
	this.text_25.setTransform(178.2,52.7);

	this.text_26 = new cjs.Text("5", "28px 'Arial'", "#333333");
	this.text_26.lineHeight = 33;
	this.text_26.lineWidth = 22;
	this.text_26.parent = this;
	this.text_26.setTransform(285.1,157.9);

	this.text_27 = new cjs.Text("9", "28px 'Arial'", "#333333");
	this.text_27.lineHeight = 33;
	this.text_27.lineWidth = 22;
	this.text_27.parent = this;
	this.text_27.setTransform(318.4,296.5);

	this.text_28 = new cjs.Text("9", "28px 'Arial'", "#333333");
	this.text_28.lineHeight = 33;
	this.text_28.lineWidth = 22;
	this.text_28.parent = this;
	this.text_28.setTransform(388.9,123.3);

	this.text_29 = new cjs.Text("9", "28px 'Arial'", "#333333");
	this.text_29.lineHeight = 33;
	this.text_29.lineWidth = 22;
	this.text_29.parent = this;
	this.text_29.setTransform(141.4,158.6);

	this.text_30 = new cjs.Text("2", "28px 'Arial'", "#333333");
	this.text_30.lineHeight = 33;
	this.text_30.lineWidth = 22;
	this.text_30.parent = this;
	this.text_30.setTransform(247.1,261.2);

	this.text_31 = new cjs.Text("2", "28px 'Arial'", "#333333");
	this.text_31.lineHeight = 33;
	this.text_31.lineWidth = 22;
	this.text_31.parent = this;
	this.text_31.setTransform(178.2,296.5);

	this.text_32 = new cjs.Text("2", "28px 'Arial'", "#333333");
	this.text_32.lineHeight = 33;
	this.text_32.lineWidth = 22;
	this.text_32.parent = this;
	this.text_32.setTransform(215.1,157.9);

	this.text_33 = new cjs.Text("2", "28px 'Arial'", "#333333");
	this.text_33.lineHeight = 33;
	this.text_33.lineWidth = 22;
	this.text_33.parent = this;
	this.text_33.setTransform(108.5,123.3);

	this.text_34 = new cjs.Text("1", "28px 'Arial'", "#333333");
	this.text_34.lineHeight = 33;
	this.text_34.lineWidth = 22;
	this.text_34.parent = this;
	this.text_34.setTransform(247.1,193.5);

	this.text_35 = new cjs.Text("1", "28px 'Arial'", "#333333");
	this.text_35.lineHeight = 33;
	this.text_35.lineWidth = 22;
	this.text_35.parent = this;
	this.text_35.setTransform(353.7,123.3);

	this.text_36 = new cjs.Text("1", "28px 'Arial'", "#333333");
	this.text_36.lineHeight = 33;
	this.text_36.lineWidth = 22;
	this.text_36.parent = this;
	this.text_36.setTransform(388.9,52.7);

	this.text_37 = new cjs.Text("6", "28px 'Arial'", "#333333");
	this.text_37.lineHeight = 33;
	this.text_37.lineWidth = 22;
	this.text_37.parent = this;
	this.text_37.setTransform(141.4,228.5);

	this.text_38 = new cjs.Text("6", "28px 'Arial'", "#333333");
	this.text_38.lineHeight = 33;
	this.text_38.lineWidth = 22;
	this.text_38.parent = this;
	this.text_38.setTransform(108.5,17.4);

	this.text_39 = new cjs.Text("6", "28px 'Arial'", "#333333");
	this.text_39.lineHeight = 33;
	this.text_39.lineWidth = 22;
	this.text_39.parent = this;
	this.text_39.setTransform(247.1,52.7);

	this.text_40 = new cjs.Text("1", "28px 'Arial'", "#333333");
	this.text_40.lineHeight = 33;
	this.text_40.lineWidth = 22;
	this.text_40.parent = this;
	this.text_40.setTransform(178.2,157.9);

	this.text_41 = new cjs.Text("3", "28px 'Arial'", "#333333");
	this.text_41.lineHeight = 33;
	this.text_41.lineWidth = 22;
	this.text_41.parent = this;
	this.text_41.setTransform(388.9,193.2);

	this.text_42 = new cjs.Text("2", "28px 'Arial'", "#333333");
	this.text_42.lineHeight = 33;
	this.text_42.lineWidth = 22;
	this.text_42.parent = this;
	this.text_42.setTransform(353.7,88);

	this.text_43 = new cjs.Text("9", "28px 'Arial'", "#333333");
	this.text_43.lineHeight = 33;
	this.text_43.lineWidth = 22;
	this.text_43.parent = this;
	this.text_43.setTransform(247.1,88);

	this.text_44 = new cjs.Text("6", "28px 'Arial'", "#333333");
	this.text_44.lineHeight = 33;
	this.text_44.lineWidth = 22;
	this.text_44.parent = this;
	this.text_44.setTransform(318.4,157.9);

	this.text_45 = new cjs.Text("8", "28px 'Arial'", "#333333");
	this.text_45.lineHeight = 33;
	this.text_45.lineWidth = 22;
	this.text_45.parent = this;
	this.text_45.setTransform(108.5,52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.c991},{t:this.c998},{t:this.c994},{t:this.c133},{t:this.c136},{t:this.c139},{t:this.c778},{t:this.c776},{t:this.c771}]},2).to({state:[]},1).wait(1));

	// criteria
	this.c7i = new lib.c7i();
	this.c7i.parent = this;
	this.c7i.setTransform(330.3,243.1,1,1,0,0,0,17.2,17.2);

	this.c1i = new lib.c1i();
	this.c1i.parent = this;
	this.c1i.setTransform(189.3,33.6,1,1,0,0,0,17.2,17.2);

	this.c7l = new lib.c7l();
	this.c7l.parent = this;
	this.c7l.setTransform(330.3,243.1,1,1,0,0,0,17.2,17.2);

	this.c1l = new lib.c1l();
	this.c1l.parent = this;
	this.c1l.setTransform(189.3,33.6,1,1,0,0,0,17.2,17.2);

	this.c7w = new lib.c7w();
	this.c7w.parent = this;
	this.c7w.setTransform(330.3,243.1,1,1,0,0,0,17.2,17.2);

	this.c1w = new lib.c1w();
	this.c1w.parent = this;
	this.c1w.setTransform(189.3,33.6,1,1,0,0,0,17.2,17.2);

	this.c9w = new lib.c9w();
	this.c9w.parent = this;
	this.c9w.setTransform(399.1,314.9,1,1,0,0,0,17.2,17.2);

	this.c9l = new lib.c9l();
	this.c9l.parent = this;
	this.c9l.setTransform(399.1,314.9,1,1,0,0,0,17.2,17.2);

	this.c9i = new lib.c9i();
	this.c9i.parent = this;
	this.c9i.setTransform(399.1,314.9,1,1,0,0,0,17.2,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.c9i},{t:this.c9l},{t:this.c9w},{t:this.c1w},{t:this.c7w},{t:this.c1l},{t:this.c7l},{t:this.c1i},{t:this.c7i}]},2).to({state:[]},1).wait(1));

	// Layer 1
	this.text_46 = new cjs.Text("Empezar", "20px 'Arial'");
	this.text_46.lineHeight = 24;
	this.text_46.lineWidth = 100;
	this.text_46.parent = this;
	this.text_46.setTransform(198.4,226);

	this.btn_empezar = new lib.btn1();
	this.btn_empezar.parent = this;
	this.btn_empezar.setTransform(244.6,239,1,1,0,0,0,76.7,20.1);
	new cjs.ButtonHelper(this.btn_empezar, 0, 1, 1);

	this.text_47 = new cjs.Text("Completa el sudoku haciendo click en el número correcto, si lo logras obtendras la clave para pasar al siguiente nivel.", "28px 'Arial'", "#333333");
	this.text_47.lineHeight = 33;
	this.text_47.lineWidth = 440;
	this.text_47.parent = this;
	this.text_47.setTransform(29.3,46.2);

	this.instance = new lib.imagen2();
	this.instance.parent = this;
	this.instance.setTransform(98,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_47},{t:this.btn_empezar},{t:this.text_46,p:{x:198.4,y:226,text:"Empezar",font:"20px 'Arial'",color:"#000000",lineHeight:24.35,lineWidth:100}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.text_46,p:{x:32.5,y:43.8,text:"Has ganado felicitaciones,\n\nLa clave es:\n\nT3mpora!",font:"28px 'Arial'",color:"#333333",lineHeight:33.3,lineWidth:440}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 500,
	height: 354,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/imagen2.png", id:"imagen2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;