(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.lt8_atlas_ = function() {
	this.initialize(img.lt8_atlas_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn_toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9933").s().p("AifG9IAAixIE/AAIAACxgAifD6IAAlSIE/AAIAAFSgAifhoIAAlVIE/AAIAAFVg");
	this.shape.setTransform(16,44.6);

	this.text = new cjs.Text("Toilet", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(16,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AifG+IAAi+IE/AAIAAC+gAifDzIAAlTIE/AAIAAFTgAifhpIAAlVIE/AAIAAFVg");
	this.shape_1.setTransform(16,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,89.1);


(lib.btn_tanggaaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Ai/CrIAAlWIGAAAIAAFWg");
	this.shape.setTransform(233.7,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AifCpIAAlRIE/AAIAAFRg");
	this.shape_1.setTransform(54,18.1);

	this.text = new cjs.Text("Tangga", "bold 27px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(142.2,0.1,0.912,0.94);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("ALVgeIleA9ArUAMIFjAA");
	this.shape_2.setTransform(142.5,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38,0.9,215,34.3);


(lib.btn_taman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A35cNMAAAg4ZMAvzAAAMAAAA4Zg");
	this.shape.setTransform(366.3,184.5);

	this.text = new cjs.Text("TAMAN", "bold 45px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(366.5,159.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("A35cNMAAAg4ZMAvzAAAMAAAA4Zg");
	this.shape_1.setTransform(366.3,184.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(213.3,4,306,361);


(lib.btn_staffOnly2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArFHaIAAuzIWLAAIAAOzg");
	this.shape.setTransform(72.4,45.5);

	this.text = new cjs.Text("Staff\nOnly", "bold 28px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(76,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ArFHaIAAuzIWLAAIAAOzg");
	this.shape_1.setTransform(72.8,45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,-1.9,142,94.8);


(lib.btn_printShop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AifHHIAAuNIE/AAIAAONg");
	this.shape.setTransform(16.3,43.4);

	this.text = new cjs.Text("Print\nShop", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(15.7,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AifG9IAAt5IE/AAIAAN5g");
	this.shape_1.setTransform(16.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-2.1,32,91);


(lib.btn_pintuSamping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkhG/IAAt9IJDAAIAAN9g");
	this.shape.setTransform(30.2,44.7);

	this.text = new cjs.Text("Pintu\nSamping", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(31,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AktG/IAAt9IJaAAIAAN9g");
	this.shape_1.setTransform(30.2,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0,58,89.5);


(lib.btn_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lt8_atlas_();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.btn_myBCA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s().p("AxkG/IAAt9MAjJAAAIAAN9g");
	this.shape.setTransform(115.5,44.7);

	this.text = new cjs.Text("MyBCA", "bold 45px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(114.5,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AxfG/IAAt9MAi/AAAIAAN9g");
	this.shape_1.setTransform(115.5,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,225,89.5);


(lib.btn_lobby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCCC").s().p("AwqU3MAAAgptMAhVAAAMAAAAptg");
	this.shape.setTransform(106.7,133.5);

	this.text = new cjs.Text("LOBBY", "bold 45px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(107.5,109.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AwqU3MAAAgptMAhVAAAMAAAAptg");
	this.shape_1.setTransform(106.7,133.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.3,267);


(lib.btn_lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ADBCYIAAkvIFoAAIAAEvgAi0CYIAAkvIFnAAIAAEvgAooCYIAAkvIFoAAIAAEvg");
	this.shape.setTransform(53.2,14.5);

	this.text = new cjs.Text("Lift", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ADBCYIAAkvIFoAAIAAEvgAizCYIAAkvIFnAAIAAEvgAooCYIAAkvIFoAAIAAEvg");
	this.shape_1.setTransform(53.5,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-0.7,110.7,30.4);


(lib.btn_galeri = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s().p("AwjHQIAAugMAhHAAAIAAOgg");
	this.shape.setTransform(106,46.5);

	this.text = new cjs.Text("Galeri BCA", "bold 35px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(106.5,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AwjHQIAAugMAhHAAAIAAOgg");
	this.shape_1.setTransform(106,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,92.9);


(lib.btn_exit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AkcOiIAA9DII5AAIAAdDg");
	this.shape.setTransform(29.2,93);

	this.text = new cjs.Text("2", "bold 11px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 54;
	this.text.parent = this;
	this.text.setTransform(48.6,85.2);

	this.text_1 = new cjs.Text("E\nX\nI\nT", "bold 11px 'Calibri'", "#000099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 54;
	this.text_1.parent = this;
	this.text_1.setTransform(33.2,59.3);

	this.text_2 = new cjs.Text("E\nM\nE\nR\nG\nE\nN\nC\nY", "bold 11px 'Calibri'", "#000099");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 54;
	this.text_2.parent = this;
	this.text_2.setTransform(16.5,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkXOiIAA9DIIuAAIAAdDg");
	this.shape_1.setTransform(28,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,57,186);


(lib.btn_exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AuBD6IAAnzIcCAAIAAHzg");
	this.shape.setTransform(89.8,23.2);

	this.text = new cjs.Text("Emergency\nExit 1", "bold 18px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(91,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AuBD6IAAnzIcCAAIAAHzg");
	this.shape_1.setTransform(89.8,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.8,179.5,50);


(lib.btn_deA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AtqfzMAAAg6KIFeAAIAAlbIV3AAMAAAA/lg");
	this.shape.setTransform(87.5,203.5);

	this.text = new cjs.Text("De' Resto", "bold 28px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(88.5,168.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AtqfzMAAAg6KIFeAAIAAlbIV3AAMAAAA/lg");
	this.shape_1.setTransform(87.5,203.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,407);


(lib.Scene_1_Toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Toilet
	this.btn_toilet = new lib.btn_toilet();
	this.btn_toilet.name = "btn_toilet";
	this.btn_toilet.parent = this;
	this.btn_toilet.setTransform(360.5,44.9,1,1,0,0,0,16,44.9);
	new cjs.ButtonHelper(this.btn_toilet, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_toilet).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Toilet, null, null);


(lib.Scene_1_Tangga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tangga
	this.btn_tangga = new lib.btn_tanggaaa();
	this.btn_tangga.name = "btn_tangga";
	this.btn_tangga.parent = this;
	this.btn_tangga.setTransform(434.1,115.1,1,1,0,0,0,127.4,25.7);
	new cjs.ButtonHelper(this.btn_tangga, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_tangga).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Tangga, null, null);


(lib.Scene_1_Staff_only2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Staff_only2
	this.btn_staffOnly = new lib.btn_staffOnly2();
	this.btn_staffOnly.name = "btn_staffOnly";
	this.btn_staffOnly.parent = this;
	this.btn_staffOnly.setTransform(628.6,43.6,1,1,0,0,0,71,47.4);
	new cjs.ButtonHelper(this.btn_staffOnly, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_staffOnly).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Staff_only2, null, null);


(lib.Scene_1_printshop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// printshop
	this.btn_staffOnly2 = new lib.btn_printShop();
	this.btn_staffOnly2.name = "btn_staffOnly2";
	this.btn_staffOnly2.parent = this;
	this.btn_staffOnly2.setTransform(540.8,45.5,1,1,0,0,0,16,45.5);
	new cjs.ButtonHelper(this.btn_staffOnly2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_staffOnly2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_printshop, null, null);


(lib.Scene_1_pintu_samping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pintu_samping
	this.btn_pintuSamping = new lib.btn_pintuSamping();
	this.btn_pintuSamping.name = "btn_pintuSamping";
	this.btn_pintuSamping.parent = this;
	this.btn_pintuSamping.setTransform(314.4,44.7,1,1,0,0,0,30.2,44.7);
	new cjs.ButtonHelper(this.btn_pintuSamping, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_pintuSamping).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_pintu_samping, null, null);


(lib.Scene_1_myBCA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// myBCA
	this.btn_taman = new lib.btn_taman();
	this.btn_taman.name = "btn_taman";
	this.btn_taman.parent = this;
	this.btn_taman.setTransform(263.4,366.2,1,1,0,0,0,260.8,181.5);
	new cjs.ButtonHelper(this.btn_taman, 0, 1, 1);

	this.btn_myBCA = new lib.btn_myBCA();
	this.btn_myBCA.name = "btn_myBCA";
	this.btn_myBCA.parent = this;
	this.btn_myBCA.setTransform(170,44.7,1,1,0,0,0,114.1,44.7);
	new cjs.ButtonHelper(this.btn_myBCA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_myBCA},{t:this.btn_taman}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_myBCA, null, null);


(lib.Scene_1_lobby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lobby
	this.btn_lobby = new lib.btn_lobby();
	this.btn_lobby.name = "btn_lobby";
	this.btn_lobby.parent = this;
	this.btn_lobby.setTransform(106.9,321.7,1,1,0,0,0,106.7,133.5);
	new cjs.ButtonHelper(this.btn_lobby, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_lobby).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_lobby, null, null);


(lib.Scene_1_Lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lift
	this.btn_lift = new lib.btn_lift();
	this.btn_lift.name = "btn_lift";
	this.btn_lift.parent = this;
	this.btn_lift.setTransform(467.2,74.5,1,1,0,0,0,52.5,15.2);
	new cjs.ButtonHelper(this.btn_lift, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAgDIAAAH");
	this.shape.setTransform(527.3,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_lift}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Lift, null, null);


(lib.Scene_1_Galeri = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Galeri
	this.btn_galeri = new lib.btn_galeri();
	this.btn_galeri.name = "btn_galeri";
	this.btn_galeri.parent = this;
	this.btn_galeri.setTransform(107.5,503.7,1,1,0,0,0,106,46.5);
	new cjs.ButtonHelper(this.btn_galeri, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_galeri).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Galeri, null, null);


(lib.Scene_1_Exit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Exit2
	this.btn_exit2 = new lib.btn_exit2();
	this.btn_exit2.name = "btn_exit2";
	this.btn_exit2.parent = this;
	this.btn_exit2.setTransform(27.9,93,1,1,0,0,0,27.9,93);
	new cjs.ButtonHelper(this.btn_exit2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_exit2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Exit2, null, null);


(lib.Scene_1_Exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Exit
	this.btn_exit = new lib.btn_exit();
	this.btn_exit.name = "btn_exit";
	this.btn_exit.parent = this;
	this.btn_exit.setTransform(614.6,526,1,1,0,0,0,89.8,25);
	new cjs.ButtonHelper(this.btn_exit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_exit).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Exit, null, null);


(lib.Scene_1_description = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// description
	this.TEXT2 = new cjs.Text("<Description>", "14px 'Segoe UI'", "#FFFFFF");
	this.TEXT2.name = "TEXT2";
	this.TEXT2.textAlign = "center";
	this.TEXT2.lineHeight = 21;
	this.TEXT2.lineWidth = 425;
	this.TEXT2.parent = this;
	this.TEXT2.setTransform(439.5,602.9);

	this.TEXT1 = new cjs.Text("<Nama Ruangan / Kelas>", "bold 17px 'Segoe UI'", "#FFFFFF");
	this.TEXT1.name = "TEXT1";
	this.TEXT1.textAlign = "center";
	this.TEXT1.lineHeight = 25;
	this.TEXT1.lineWidth = 424;
	this.TEXT1.parent = this;
	this.TEXT1.setTransform(439.8,568.9);

	this.btn_pic = new lib.btn_pic();
	this.btn_pic.name = "btn_pic";
	this.btn_pic.parent = this;
	this.btn_pic.setTransform(106,626.6,1,1,0,0,0,64,64);
	new cjs.ButtonHelper(this.btn_pic, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3498DB").s().p("Eg+fANSIAA6jMB8/AAAIAAajg");
	this.shape.setTransform(360,635.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_pic},{t:this.TEXT1},{t:this.TEXT2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_description, null, null);


(lib.Scene_1_Canteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Canteen
	this.btn_deResto = new lib.btn_deA();
	this.btn_deResto.name = "btn_deResto";
	this.btn_deResto.parent = this;
	this.btn_deResto.setTransform(612.4,293.8,1,1,0,0,0,87.5,203.5);
	new cjs.ButtonHelper(this.btn_deResto, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_deResto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Canteen, null, null);


(lib.btn_staffOnly6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AC5EjIAAi2IrZAAIAAmPIRBAAIAAAJIAAAAIAAI8g");
	this.shape.setTransform(54.5,28.5);

	this.text = new cjs.Text("Staff Only", "bold 28px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 131;
	this.text.parent = this;
	this.text.setTransform(56.8,8.6,0.596,0.596);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(91.1,29.6,1,1,0,0,0,18,28.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AC5EjIAAi2IrZAAIAAmPIRBAAIAAAJIAAAAIAAI8g");
	this.shape_1.setTransform(54.5,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,109.1,58.3);


(lib.Scene_1_Staff_only = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Staff_only
	this.btn_staffOnly6 = new lib.btn_staffOnly6();
	this.btn_staffOnly6.name = "btn_staffOnly6";
	this.btn_staffOnly6.parent = this;
	this.btn_staffOnly6.setTransform(468.6,29.4,1,1,0,0,0,54.3,29.2);
	new cjs.ButtonHelper(this.btn_staffOnly6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_staffOnly6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Staff_only, null, null);


// stage content:
(lib.RECOVER_ltg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_pic = this.description.btn_pic;
		this.TEXT1 = this.description.TEXT1;
		this.TEXT2 = this.description.TEXT2;
		this.btn_lobby = this.lobby.btn_lobby;
		this.btn_galeri = this.Galeri.btn_galeri;
		this.btn_myBCA = this.myBCA.btn_myBCA;
		this.btn_taman = this.myBCA.btn_taman;
		this.btn_pintuSamping = this.pintu_samping.btn_pintuSamping;
		this.btn_tangga = this.Tangga.btn_tangga;
		this.btn_deResto = this.Canteen.btn_deResto;
		this.btn_exit2 = this.Exit2.btn_exit2;
		this.btn_toilet = this.Toilet.btn_toilet;
		this.btn_staffOnly2 = this.printshop.btn_staffOnly2;
		this.btn_lift = this.Lift.btn_lift;
		this.btn_staffOnly6 = this.Staff_only.btn_staffOnly6;
		this.btn_staffOnly = this.Staff_only2.btn_staffOnly;
		this.btn_exit = this.Exit.btn_exit;
		this.btn_deResto.addEventListener("click",resto.bind(this));
		this.btn_myBCA.addEventListener("click",myBCA.bind(this));
		this.btn_exit.addEventListener("click",exit.bind(this));
		this.btn_exit2.addEventListener("click",exit.bind(this));
		this.btn_staffOnly.addEventListener("click",staffOnly.bind(this));
		this.btn_staffOnly2.addEventListener("click",staffOnly.bind(this));
		this.btn_staffOnly6.addEventListener("click",staffOnly.bind(this));
		this.btn_lift.addEventListener("click",lift.bind(this));
		this.btn_toilet.addEventListener("click",toilet.bind(this));
		this.btn_tangga.addEventListener("click",tangga.bind(this));
		this.btn_pintuSamping.addEventListener("click",pintuSamping.bind(this));
		this.btn_taman.addEventListener("click",taman.bind(this));
		this.btn_lobby.addEventListener("click",lobby.bind(this));
		this.btn_galeri.addEventListener("click",galeri.bind(this));
		this.btn_pic.visible=false;
		this.TEXT1.visible=false;
		this.TEXT2.visible=false;
		
		function galeri(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/galeri.png";
			this.TEXT1.text="Galeri BCA";
			this.TEXT2.text="Galeri BCA merupakan tempat untuk menampilkan informasi sejarah BCA secara interaktif dari awal didirikan hingga saat ini menjadikan sisi edukasi pada bangunan ini terasa sangat kental, tanpa harus melepaskan identitas perusahaan pada desain bangunan utamanya.";
		}
		
		function lobby(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/lobby.png";
			this.TEXT1.text="Lobby";
			this.TEXT2.text="Lobby sebagai tempat yang pertama kali dimasuki oleh pengunjung BCA Learning Institute berfungsi untuk mencari informasi seputar gedung, maupun menjadi ruang tunggu.";
		}
		
		function resto(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/buffet.png";
			this.TEXT1.text="De' Resto";
			this.TEXT2.text="De' Resto adalah ruang yang disediakan untuk menikmati makanan yang disediakan oleh pihak BCA";
		}
		
		function myBCA(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/myBCA.png";
			this.TEXT1.text="MyBCA";
			this.TEXT2.text="MyBCA merupakan fasilitas yang diberikan BCA untuk mempermudah transaksi perbankan yang terjadi di BCA Learning Institute";
		}
		
		function exit(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/exit.png";
			this.TEXT1.text="Emergency Exit";
			this.TEXT2.text="Emergency Exit merupakan pintu keluar darurat apabila terjadi bencana.";
		}
		
		function staffOnly(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/staffOnly.png";
			this.TEXT1.text="Staff Only";
			this.TEXT2.text="Hanya staff yang diperbolehkan untuk memasuki area ini.";
		}
		
		function toilet(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/toilet.png";
			this.TEXT1.text="Toilet";
			this.TEXT2.text="Tersedia toilet pria dan wanita, serta disable toilet. Disable Toilet adalah toilet yang diperuntukan untuk mereka yang memiliki keterbatasan fisik.";
		}
		
		function lift(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/lift.png";
			this.TEXT1.text="Lift";
			this.TEXT2.text="Lift dipergunakkan untuk naik dan turun ke lantai yang diinginkan.";
		}
		
		function tangga(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/tangga.png";
			this.TEXT1.text="Tangga";
			this.TEXT2.text="Tangga pada lantai G dipergunakan untuk naik ke lantai 1.";
		}
		
		function pintuSamping(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/pintuSamping.png";
			this.TEXT1.text="Pintu Samping";
			this.TEXT2.text="Pintu ini terhubung langsung dengan area parkir mobil.";
		}
		
		function taman(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/taman.png";
			this.TEXT1.text="Taman";
			this.TEXT2.text="Taman bisa dipergunakan untuk bersantai pada saat break.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// description_obj_
	this.description = new lib.Scene_1_description();
	this.description.name = "description";
	this.description.parent = this;
	this.description.setTransform(359.9,635.1,1,1,0,0,0,359.9,635.1);
	this.description.depth = 0;
	this.description.isAttachedToCamera = 0
	this.description.isAttachedToMask = 0
	this.description.layerDepth = 0
	this.description.layerIndex = 0
	this.description.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.description).wait(1));

	// lobby_obj_
	this.lobby = new lib.Scene_1_lobby();
	this.lobby.name = "lobby";
	this.lobby.parent = this;
	this.lobby.setTransform(106.9,321.7,1,1,0,0,0,106.9,321.7);
	this.lobby.depth = 0;
	this.lobby.isAttachedToCamera = 0
	this.lobby.isAttachedToMask = 0
	this.lobby.layerDepth = 0
	this.lobby.layerIndex = 1
	this.lobby.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.lobby).wait(1));

	// Galeri_obj_
	this.Galeri = new lib.Scene_1_Galeri();
	this.Galeri.name = "Galeri";
	this.Galeri.parent = this;
	this.Galeri.setTransform(107.5,523.9,1,1,0,0,0,107.5,523.9);
	this.Galeri.depth = 0;
	this.Galeri.isAttachedToCamera = 0
	this.Galeri.isAttachedToMask = 0
	this.Galeri.layerDepth = 0
	this.Galeri.layerIndex = 2
	this.Galeri.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Galeri).wait(1));

	// myBCA_obj_
	this.myBCA = new lib.Scene_1_myBCA();
	this.myBCA.name = "myBCA";
	this.myBCA.parent = this;
	this.myBCA.setTransform(290.4,274.9,1,1,0,0,0,290.4,274.9);
	this.myBCA.depth = 0;
	this.myBCA.isAttachedToCamera = 0
	this.myBCA.isAttachedToMask = 0
	this.myBCA.layerDepth = 0
	this.myBCA.layerIndex = 3
	this.myBCA.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.myBCA).wait(1));

	// pintu_samping_obj_
	this.pintu_samping = new lib.Scene_1_pintu_samping();
	this.pintu_samping.name = "pintu_samping";
	this.pintu_samping.parent = this;
	this.pintu_samping.setTransform(315.2,125.4,1,1,0,0,0,315.2,125.4);
	this.pintu_samping.depth = 0;
	this.pintu_samping.isAttachedToCamera = 0
	this.pintu_samping.isAttachedToMask = 0
	this.pintu_samping.layerDepth = 0
	this.pintu_samping.layerIndex = 4
	this.pintu_samping.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pintu_samping).wait(1));

	// Tangga_obj_
	this.Tangga = new lib.Scene_1_Tangga();
	this.Tangga.name = "Tangga";
	this.Tangga.parent = this;
	this.Tangga.setTransform(452.1,106.5,1,1,0,0,0,452.1,106.5);
	this.Tangga.depth = 0;
	this.Tangga.isAttachedToCamera = 0
	this.Tangga.isAttachedToMask = 0
	this.Tangga.layerDepth = 0
	this.Tangga.layerIndex = 5
	this.Tangga.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tangga).wait(1));

	// Canteen_obj_
	this.Canteen = new lib.Scene_1_Canteen();
	this.Canteen.name = "Canteen";
	this.Canteen.parent = this;
	this.Canteen.setTransform(612.4,293.8,1,1,0,0,0,612.4,293.8);
	this.Canteen.depth = 0;
	this.Canteen.isAttachedToCamera = 0
	this.Canteen.isAttachedToMask = 0
	this.Canteen.layerDepth = 0
	this.Canteen.layerIndex = 6
	this.Canteen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Canteen).wait(1));

	// Exit2_obj_
	this.Exit2 = new lib.Scene_1_Exit2();
	this.Exit2.name = "Exit2";
	this.Exit2.parent = this;
	this.Exit2.setTransform(32.5,111.9,1,1,0,0,0,32.5,111.9);
	this.Exit2.depth = 0;
	this.Exit2.isAttachedToCamera = 0
	this.Exit2.isAttachedToMask = 0
	this.Exit2.layerDepth = 0
	this.Exit2.layerIndex = 7
	this.Exit2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Exit2).wait(1));

	// Toilet_obj_
	this.Toilet = new lib.Scene_1_Toilet();
	this.Toilet.name = "Toilet";
	this.Toilet.parent = this;
	this.Toilet.setTransform(360.4,44.6,1,1,0,0,0,360.4,44.6);
	this.Toilet.depth = 0;
	this.Toilet.isAttachedToCamera = 0
	this.Toilet.isAttachedToMask = 0
	this.Toilet.layerDepth = 0
	this.Toilet.layerIndex = 8
	this.Toilet.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toilet).wait(1));

	// printshop_obj_
	this.printshop = new lib.Scene_1_printshop();
	this.printshop.name = "printshop";
	this.printshop.parent = this;
	this.printshop.setTransform(540.5,59.8,1,1,0,0,0,540.5,59.8);
	this.printshop.depth = 0;
	this.printshop.isAttachedToCamera = 0
	this.printshop.isAttachedToMask = 0
	this.printshop.layerDepth = 0
	this.printshop.layerIndex = 9
	this.printshop.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.printshop).wait(1));

	// Lift_obj_
	this.Lift = new lib.Scene_1_Lift();
	this.Lift.name = "Lift";
	this.Lift.parent = this;
	this.Lift.setTransform(470.7,65.6,1,1,0,0,0,470.7,65.6);
	this.Lift.depth = 0;
	this.Lift.isAttachedToCamera = 0
	this.Lift.isAttachedToMask = 0
	this.Lift.layerDepth = 0
	this.Lift.layerIndex = 10
	this.Lift.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Lift).wait(1));

	// Staff_only_obj_
	this.Staff_only = new lib.Scene_1_Staff_only();
	this.Staff_only.name = "Staff_only";
	this.Staff_only.parent = this;
	this.Staff_only.setTransform(468.8,29,1,1,0,0,0,468.8,29);
	this.Staff_only.depth = 0;
	this.Staff_only.isAttachedToCamera = 0
	this.Staff_only.isAttachedToMask = 0
	this.Staff_only.layerDepth = 0
	this.Staff_only.layerIndex = 11
	this.Staff_only.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Staff_only).wait(1));

	// Staff_only2_obj_
	this.Staff_only2 = new lib.Scene_1_Staff_only2();
	this.Staff_only2.name = "Staff_only2";
	this.Staff_only2.parent = this;
	this.Staff_only2.setTransform(630.1,41.8,1,1,0,0,0,630.1,41.8);
	this.Staff_only2.depth = 0;
	this.Staff_only2.isAttachedToCamera = 0
	this.Staff_only2.isAttachedToMask = 0
	this.Staff_only2.layerDepth = 0
	this.Staff_only2.layerIndex = 12
	this.Staff_only2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Staff_only2).wait(1));

	// Exit_obj_
	this.Exit = new lib.Scene_1_Exit();
	this.Exit.name = "Exit";
	this.Exit.parent = this;
	this.Exit.setTransform(614.5,595.8,1,1,0,0,0,614.5,595.8);
	this.Exit.depth = 0;
	this.Exit.isAttachedToCamera = 0
	this.Exit.isAttachedToMask = 0
	this.Exit.layerDepth = 0
	this.Exit.layerIndex = 13
	this.Exit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Exit).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(309.5,344.3,800,725.8);
// library properties:
lib.properties = {
	id: 'F73727E29E90E64BA050A0832871AD6F',
	width: 699,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../../assets/mapping/ppti8.png?1574925060229", id:"lt8_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F73727E29E90E64BA050A0832871AD6F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;