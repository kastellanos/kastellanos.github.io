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



(lib.imagen1 = function() {
	this.initialize(img.imagen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,354);


(lib.elemento5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AhKBLQgfgfAAgsQAAgrAfgfQAfgfArAAQAsAAAfAfQAfAfAAArQAAAsgfAfQgfAfgsAAQgrAAgfgfg");
	this.shape.setTransform(10.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,21.2);


(lib.elemento4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AgmAmQgPgPAAgXQAAgWAPgQQAQgPAWAAQAXAAAPAPQAQAQAAAWQAAAXgQAPQgPAQgXAAQgWAAgQgQg");
	this.shape.setTransform(5.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,10.8);


(lib.elemento3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("Ag3A3QgWgXAAggQAAggAWgXQAXgWAgAAQAgAAAXAWQAXAXAAAgQAAAggXAXQgXAXggAAQggAAgXgXg");
	this.shape.setTransform(7.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,15.6);


(lib.elemento2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape.setTransform(5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.4,10.4);


(lib.elemento1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("AhvBvQguguAAhBQAAhAAugvQAvguBAAAQBBAAAuAuQAvAvAABAQAABBgvAuQguAvhBAAQhAAAgvgvg");
	this.shape.setTransform(15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.6,31.6);


// stage content:
(lib.juego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{name1:0});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(1);
		this.elemento1.cursor = "pointer"; 
		this.elemento1.activated = false;
		this.elemento2.activated = false;
		this.elemento3.activated = false;
		this.elemento4.activated = false;
		this.elemento5.activated = false;
		this.global_counter = 0;
		var escenario = this;
		function validate_end_of_game( count ){
			//alert( count );
			if( count == 5 ){
				//alert("end of game");
				escenario.gotoAndStop(2);
				
			}
			
		}
			
		//this.elemento1.addEventListener("click", function(event) { alert("clicked"); })
		this.elemento1.addEventListener("click", selectElement1.bind(this));
		
		function selectElement1(event) {
			
			if( this.elemento1.activated == false ){
			this.elemento1.activated = true;
			this.global_counter += 1;
			this.elemento1.alpha = 1;
			}
			
			validate_end_of_game( this.global_counter );
		}
		this.elemento2.addEventListener("click", selectElement2.bind(this));
		function selectElement2(event) {
			
			if( this.elemento2.activated == false ){
			this.elemento2.activated = true;
			this.global_counter += 1;
			this.elemento2.alpha = 1;
			}
			validate_end_of_game( this.global_counter );
		}
		
		this.elemento3.addEventListener("click", selectElement3.bind(this));
		function selectElement3(event) {
			
			if( this.elemento3.activated == false ){
			this.elemento3.activated = true;
			this.global_counter += 1;
			this.elemento3.alpha = 1;
			}
			validate_end_of_game( this.global_counter );
		}
		
		this.elemento4.addEventListener("click", selectElement4.bind(this));
		function selectElement4(event) {
			
			if( this.elemento4.activated == false ){
			this.elemento4.activated = true;
			this.global_counter += 1;
			this.elemento4.alpha = 1;
			}
			validate_end_of_game( this.global_counter );
		}
		
		this.elemento5.addEventListener("click", selectElement5.bind(this));
		function selectElement5(event) {
			
			if( this.elemento5.activated == false ){
			this.elemento5.activated = true;
			this.global_counter += 1;
			this.elemento5.alpha = 1;
			}
			validate_end_of_game( this.global_counter );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Objetos
	this.elemento5 = new lib.elemento5();
	this.elemento5.parent = this;
	this.elemento5.setTransform(309.8,274.6,1,1,0,0,0,10.6,10.6);
	this.elemento5.alpha = 0;
	new cjs.ButtonHelper(this.elemento5, 0, 1, 2, false, new lib.elemento5(), 3);

	this.elemento4 = new lib.elemento4();
	this.elemento4.parent = this;
	this.elemento4.setTransform(334.2,250.2,1,1,0,0,0,5.4,5.4);
	this.elemento4.alpha = 0;
	new cjs.ButtonHelper(this.elemento4, 0, 1, 2, false, new lib.elemento4(), 3);

	this.elemento3 = new lib.elemento3();
	this.elemento3.parent = this;
	this.elemento3.setTransform(296.6,155,1,1,0,0,0,7.8,7.8);
	this.elemento3.alpha = 0;
	new cjs.ButtonHelper(this.elemento3, 0, 1, 2, false, new lib.elemento3(), 3);

	this.elemento2 = new lib.elemento2();
	this.elemento2.parent = this;
	this.elemento2.setTransform(351.6,150,1,1,0,0,0,5.2,5.2);
	this.elemento2.alpha = 0;
	new cjs.ButtonHelper(this.elemento2, 0, 1, 2, false, new lib.elemento2(), 3);

	this.elemento1 = new lib.elemento1();
	this.elemento1.parent = this;
	this.elemento1.setTransform(389.4,75.8,1,1,0,0,0,15.8,15.8);
	this.elemento1.alpha = 0;
	new cjs.ButtonHelper(this.elemento1, 0, 1, 2, false, new lib.elemento1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.elemento1},{t:this.elemento2},{t:this.elemento3},{t:this.elemento4},{t:this.elemento5}]}).to({state:[]},2).wait(1));

	// Texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJBIIAAhvQgHAGgJAGQgKAGgIADIAAgRQAOgHALgKQAKgKAFgJIALAAIAACPg");
	this.shape.setTransform(218.7,323.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape_1.setTransform(473,323.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape_2.setTransform(427.8,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_3.setTransform(411.3,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_4.setTransform(400.2,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBCQgMgJABgRIARADQABAIAFAEQAGAEAMAAQALAAAGgEQAHgFACgJQACgGAAgQQgMANgQAAQgVAAgMgQQgMgPAAgVQAAgOAGgNQAFgNAKgGQAKgHAOAAQARAAAMAPIAAgMIARAAIAABYQAAAYgFAKQgFAKgLAGQgLAGgOAAQgTAAgLgIgAgTgxQgIAJAAATQAAAVAIAIQAIAKAMAAQAMAAAIgKQAIgIAAgUQAAgTgIgKQgJgKgMAAQgKAAgJAKg");
	this.shape_5.setTransform(388.8,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_6.setTransform(378,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA1A1IAAhAQAAgLgCgFQgBgEgFgDQgEgDgGAAQgLAAgIAIQgHAGAAAQIAAA8IgQAAIAAhCQAAgMgFgGQgEgGgKAAQgHAAgGAEQgHAEgDAIQgCAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAOQAFgIAIgEQAIgFAKAAQAMAAAHAFQAGAEADAJQANgSATAAQAQAAAIAIQAIAJAAASIAABGg");
	this.shape_7.setTransform(364.2,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_8.setTransform(353.6,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_9.setTransform(340.2,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBIIAAiOIARAAIAACOg");
	this.shape_10.setTransform(332.5,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_11.setTransform(319.2,22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_12.setTransform(308.1,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_13.setTransform(291.9,22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_14.setTransform(281.4,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_15.setTransform(273.7,20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNAMgGQALgGAMAAQARAAALAIQAKAJADAQIgRACQgCgKgGgGQgHgFgIAAQgNAAgIAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgCASgMAKQgMAKgRAAQgUAAgNgOg");
	this.shape_16.setTransform(266.8,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_17.setTransform(255.9,22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_18.setTransform(244.8,22.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAFIgGARQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape_19.setTransform(236.7,22.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_20.setTransform(227,22.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOBJIAAhZIgPAAIAAgOIAPAAIAAgLQAAgKACgGQADgGAGgFQAFgEAMAAIAQACIgCAPIgLgBQgIAAgDAEQgDADAAAJIAAAKIAUAAIAAAOIgUAAIAABZg");
	this.shape_21.setTransform(219.2,20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_22.setTransform(213.7,20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXBCQgJgHgGgMQgGgNAAgQQAAgPAFgMQAFgMAKgHQALgHANAAQAIAAAIAEQAHAEAEAGIAAgzIASAAIAACOIgRAAIAAgNQgKAQgSAAQgMAAgLgHgAgSgLQgIAKAAATQAAAUAJAKQAHAKALAAQALAAAJgJQAIgKAAgTQAAgUgJgKQgHgKgNAAQgKAAgIAJg");
	this.shape_23.setTransform(205.6,21);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggA9QgNgLgBgSIASgCQACAOAIAHQAHAGALAAQALAAAJgJQAJgKAAgQQAAgPgJgHQgIgJgNAAQgIAAgHAEQgHAEgEAFIgQgCIAOhJIBGAAIAAARIg4AAIgIAmQANgJANAAQATAAANANQAMAMAAAVQAAATgLAOQgOASgWAAQgUAAgMgLg");
	this.shape_24.setTransform(189.3,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_25.setTransform(173.1,22.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_26.setTransform(162.6,22.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBIIAAiOIARAAIAACOg");
	this.shape_27.setTransform(154.8,20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_28.setTransform(141.5,22.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAFIgGARQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape_29.setTransform(133.5,22.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_30.setTransform(126.7,21.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_31.setTransform(118.2,22.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_32.setTransform(107.1,22.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAyQgIgEgEgFQgEgGgBgIIgBgQIAAg/IARAAIAAA5IACASQABAHAFAEQAGAEAIgBQAHAAAGgDQAHgFAEgGQADgIAAgNIAAg2IARAAIAABnIgQAAIAAgQQgMASgUAAQgJAAgIgDg");
	this.shape_33.setTransform(96,23);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNALgGQAMgGAMAAQARAAAKAIQALAJAEAQIgRACQgDgKgGgGQgHgFgIAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgUAAgNgOg");
	this.shape_34.setTransform(85.8,22.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgDQgFgDgHAAQgKAAgIAIQgIAGAAAVIAAA3IgSAAIAAhmIAQAAIAAAOQALgRAVAAQAJAAAIAEQAIADAEAFQAEAGABAHIABARIAAA/g");
	this.shape_35.setTransform(74.9,22.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag0BIIAAiOIBmAAIAAAQIhTAAIAAAsIBOAAIAAAQIhOAAIAAAxIBWAAIAAARg");
	this.shape_36.setTransform(63,20.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AjqDrIAAnVIHVAAIAAHVg");
	this.shape_37.setTransform(477.5,328.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIBHIAAiOIARAAIAACOg");
	this.shape_38.setTransform(306.5,129.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgXAxQgIgDgEgGQgEgFgBgHIgBgRIAAg/IASAAIAAA4IABATQABAHAGAEQAFADAIABQAGAAAIgFQAHgDADgIQACgGAAgOIAAg2IASAAIAABmIgQAAIAAgOQgMARgUAAQgJAAgIgEg");
	this.shape_39.setTransform(298.7,131.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAnBHIgTgeIgNgTQgGgHgDgCQgEgDgFgCIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUAAAKAEQAKAEAFAKQAGAKAAAMQAAAOgJALQgKAKgVACQAIAEAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgGQAEgGAAgGQAAgLgHgGQgIgHgQAAIgsAAg");
	this.shape_40.setTransform(286.6,129.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_41.setTransform(266.1,129.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAKAAQANAAAJAHQALAHAFAMQAFANAAAPQAAAQgGALQgFANgLAHQgLAHgMAAQgIAAgHgEQgGgEgFgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQALAAAIgKQAJgKAAgTQAAgUgJgKQgIgKgLAAQgKAAgJALg");
	this.shape_42.setTransform(246.8,133.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAxQgIgDgEgGQgDgFgCgHIgBgRIAAg/IARAAIAAA4IABATQACAHAFAEQAGADAIABQAHAAAGgFQAIgDACgIQAEgGAAgOIAAg2IARAAIAABmIgQAAIAAgOQgMARgUAAQgJAAgIgEg");
	this.shape_43.setTransform(235.4,131.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag2BHIAAiOIA2AAIAVACQALACAHAEQAHAGAEAIQAEAJAAAKQABATgMALQgMANgeABIgkAAIAAA5gAgjgDIAlAAQASABAHgIQAIgGAAgNQAAgJgEgGQgFgGgIgDQgEgBgNAAIgkAAg");
	this.shape_44.setTransform(223.6,129.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgjBAQgQgKgIgQQgJgSAAgSQAAgjAUgUQATgUAdAAQAUAAAQAJQAQAKAJAQQAHARAAAVQABAWgJARQgJASgQAIQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAWgBAOgPQANgOAAgcQAAgQgGgOQgGgNgLgGQgMgIgNAAQgUAAgOAOg");
	this.shape_45.setTransform(203.3,129.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgbA1IAAhnIAQAAIAAAQQAGgLAFgEQAEgDAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDADQgFAEgCAGQgDAKAAALIAAA1g");
	this.shape_46.setTransform(192.9,131.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_47.setTransform(175,129.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_48.setTransform(167.1,131.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAyBHIAAh2IgqB2IgQAAIgph4IAAB4IgSAAIAAiOIAcAAIAiBlIAGAVIAHgXIAjhjIAZAAIAACOg");
	this.shape_49.setTransform(142.7,129.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgJA0IAAgUIATAAIAAAUgAgJgfIAAgUIATAAIAAAUg");
	this.shape_50.setTransform(238.3,82.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_51.setTransform(230.4,82.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHA0IgohnIATAAIAXA9IAFAVIAGgUIAYg+IASAAIgnBng");
	this.shape_52.setTransform(192.7,82.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIBHIAAiOIARAAIAACOg");
	this.shape_53.setTransform(174.3,80.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfAoQgNgOAAgaQAAgQAGgMQAFgNAMgGQAKgGANAAQARAAAKAIQAMAJADAQIgSACQgCgKgGgGQgGgFgJAAQgMAAgJAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgDASgMAKQgLAKgRAAQgVAAgMgOg");
	this.shape_54.setTransform(167.5,82.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_55.setTransform(140.3,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:107.1,y:22.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:173.1,y:22.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:219.2,y:20.8}},{t:this.shape_20,p:{x:227,y:22.9}},{t:this.shape_19},{t:this.shape_18,p:{x:244.8,y:22.9}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:281.4,y:22.9}},{t:this.shape_13,p:{x:291.9,y:22.9}},{t:this.shape_12,p:{x:308.1,y:22.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:340.2,y:22.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:378,y:22.9}},{t:this.shape_5},{t:this.shape_4,p:{x:400.2,y:22.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_55},{t:this.shape_14,p:{x:151,y:82.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_9,p:{x:182.1,y:82.8}},{t:this.shape_52},{t:this.shape_32,p:{x:203.2,y:82.8}},{t:this.shape_20,p:{x:219.9,y:82.8}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_6,p:{x:156.5,y:131.5}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_18,p:{x:183.2,y:131.5}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_21,p:{x:214.2,y:129.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_12,p:{x:257.6,y:131.5}},{t:this.shape_41},{t:this.shape_25,p:{x:273.7,y:131.5}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:314.3,y:131.5}},{t:this.shape_13,p:{x:324.8,y:131.5}}]},2).wait(1));

	// IImagen
	this.instance = new lib.imagen1();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251,177,500,354);
// library properties:
lib.properties = {
	width: 500,
	height: 354,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"recursos/archivos_animate_cc/images/imagen1.jpg", id:"imagen1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;