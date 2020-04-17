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

	// Layer_1
	this.instance = new lib.lt8_atlas_();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.BTN_TOILET = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9933").s().p("AifG3IAAixIE/AAIAACxgAifD+IAAlTIEVAAIAAFTgAifhiIAAlUIEVAAIAAFUg");
	this.shape.setTransform(18.2,43.9);

	this.text = new cjs.Text("Toilet", "bold 11px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 45;
	this.text.parent = this;
	this.text.setTransform(15.7,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AifG3IAAixIE/AAIAACxgAifD+IAAlTIEVAAIAAFTgAifhiIAAlUIEVAAIAAFUg");
	this.shape_1.setTransform(18.2,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,32,87.8);


(lib.BTN_TANGGA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AifCvIAAldIE/AAIAAFdg");
	this.shape.setTransform(16,17.5);

	this.text = new cjs.Text("TANGGA", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(17,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AifCvIAAldIE/AAIAAFdg");
	this.shape_1.setTransform(16,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.btn_staffOnly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AonC5IAAlxIRPAAIAAFxg");
	this.shape.setTransform(55.2,15.4);

	this.text = new cjs.Text("Staff Only", "bold 18px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(61.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AC9ExIAAjoIrkAAIAAlwILkAAIAAgJIFqAAIAAAJIABAAIAAFwIgBAAIAADog");
	this.shape_1.setTransform(55.2,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.1,110.5,37);


(lib.BTN_STAFF2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApsJtIAAzZITZAAIAATZg");
	this.shape.setTransform(62.1,62.1);

	this.text = new cjs.Text("STAFF\nONLY", "bold 18px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(61,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ApsJtIAAzZITZAAIAATZg");
	this.shape_1.setTransform(62.1,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,124.1);


(lib.BTN_LIFT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ADUCYIAAkvIFUAAIAAEvgAinCYIAAkvIFTAAIAAEvgAonCYIAAkvIFUAAIAAEvg");
	this.shape.setTransform(414.3,74.5);

	this.text = new cjs.Text("LIFT", "bold 18px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(413,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ADUCYIAAkvIFUAAIAAEvgAinCYIAAkvIFTAAIAAEvgAonCYIAAkvIFUAAIAAEvg");
	this.shape_1.setTransform(414.3,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(359.1,59.3,110.5,30.4);


(lib.BTN_EXIT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AkXOiIAA9DIIuAAIAAdDg");
	this.shape.setTransform(28,93);

	this.text = new cjs.Text("E\nX\nI\nT\n\n2", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(37,33.7);

	this.text_1 = new cjs.Text("E\nM\nE\nR\nG\nE\nN\nC\nY", "bold 14px 'Calibri'", "#000099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(17,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkXOiIAA9DIIuAAIAAdDg");
	this.shape_1.setTransform(28,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,186);


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


(lib.BTN_ENERGIZING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s().p("EgloAL0QjJABAAjIIAAxZIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgDIABgEIAAgCIAAgDIAAgDQAMiuC8AAMApsAAAQDKAAAADIIAAGpMAhkAAAIAANkIgGAAIAAATMgjSAAAIAAgLIgOAEQggAHgoAAg");
	this.shape.setTransform(261,75.7);

	this.text = new cjs.Text("ENERGIZING\nROOM", "bold 30px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 245;
	this.text.parent = this;
	this.text.setTransform(201.5,55.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EgloAL0QjJABAAjIIAAxZIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgDIABgEIAAgCIAAgDIAAgDQAMiuC8AAMApsAAAQDKAAAADIIAAGpMAheAAAIAAgTIAGAAIAAN3IgGAAIAAATMgjSAAAIAAgLIgOAEQggAHgoAAg");
	this.shape_1.setTransform(261,75.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522,151.3);


(lib.BTN_CANTEEN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("At4dRIAAmXIIaAAMAAAg0LITXAAMAAAA6ig");
	this.shape.setTransform(88.9,187.4);

	this.text = new cjs.Text("DE'\nBUFFET", "bold 30px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(116,158.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("At4dRIAAmXIIaAAMAAAg0LITXAAMAAAA6ig");
	this.shape_1.setTransform(88.9,187.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.8,374.7);


(lib.BTN_A103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AniJsIAAzXIPFAAIAATXg");
	this.shape.setTransform(48.3,62);

	this.text = new cjs.Text("A103\nTRAINING CLASS", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(50,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AniJsIAAzXIPFAAIAATXg");
	this.shape_1.setTransform(48.3,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,124);


(lib.BTN_A102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AniJsIAAzXIPFAAIAATXg");
	this.shape.setTransform(48.3,62);

	this.text = new cjs.Text("A102\nTRAINING CLASS", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(49,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AniJsIAAzXIPFAAIAATXg");
	this.shape_1.setTransform(48.3,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,124);


(lib.BTN_A101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AnnJsIAAzXIPPAAIAATXg");
	this.shape.setTransform(48.4,62);

	this.text = new cjs.Text("A101\nTRAINING CLASS", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(47.7,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AniJsIAAzXIPFAAIAATXg");
	this.shape_1.setTransform(48.3,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,97.7,124);


(lib.Scene_1_Toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Toilet
	this.btn_toilet = new lib.BTN_TOILET();
	this.btn_toilet.name = "btn_toilet";
	this.btn_toilet.parent = this;
	this.btn_toilet.setTransform(345.5,0);
	new cjs.ButtonHelper(this.btn_toilet, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_toilet).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Toilet, null, null);


(lib.Scene_1_Tangga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tangga
	this.btn_tangga = new lib.BTN_TANGGA();
	this.btn_tangga.name = "btn_tangga";
	this.btn_tangga.parent = this;
	this.btn_tangga.setTransform(363.8,106.2,1,1,0,0,0,16,17.5);
	new cjs.ButtonHelper(this.btn_tangga, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_tangga).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Tangga, null, null);


(lib.Scene_1_staff_onlycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// staff_only
	this.btn_staffOnly = new lib.BTN_STAFF2();
	this.btn_staffOnly.name = "btn_staffOnly";
	this.btn_staffOnly.parent = this;
	this.btn_staffOnly.setTransform(640.6,61.9,0.991,1.019,0,0,0,62.1,62.1);
	new cjs.ButtonHelper(this.btn_staffOnly, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAIsIAAxY");
	this.shape.setTransform(2.7,474.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_staffOnly}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_staff_onlycopy, null, null);


(lib.Scene_1_Lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lift
	this.btn_lift = new lib.BTN_LIFT();
	this.btn_lift.name = "btn_lift";
	this.btn_lift.parent = this;
	this.btn_lift.setTransform(290.7,56.1,1,1,0,0,0,234.8,56.1);
	new cjs.ButtonHelper(this.btn_lift, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_lift).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Lift, null, null);


(lib.Scene_1_Exit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Exit2
	this.btn_exit = new lib.btn_exit();
	this.btn_exit.name = "btn_exit";
	this.btn_exit.parent = this;
	this.btn_exit.setTransform(615.2,528.3,1,1,0,0,0,89.8,25);
	new cjs.ButtonHelper(this.btn_exit, 0, 1, 1);

	this.btn_exit2 = new lib.BTN_EXIT2();
	this.btn_exit2.name = "btn_exit2";
	this.btn_exit2.parent = this;
	this.btn_exit2.setTransform(27.2,93,0.957,1,0,0,0,27.9,93);
	new cjs.ButtonHelper(this.btn_exit2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_exit2},{t:this.btn_exit}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Exit2, null, null);


(lib.Scene_1_energizing_room = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energizing_room
	this.btn_energizing = new lib.BTN_ENERGIZING();
	this.btn_energizing.name = "btn_energizing";
	this.btn_energizing.parent = this;
	this.btn_energizing.setTransform(250,475.5,1.043,1,0,0,0,260.9,75.7);
	new cjs.ButtonHelper(this.btn_energizing, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_energizing).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_energizing_room, null, null);


(lib.Scene_1_description = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// description
	this.TEXT2 = new cjs.Text("<Description>", "14px 'Segoe UI'", "#FFFFFF");
	this.TEXT2.name = "TEXT2";
	this.TEXT2.textAlign = "center";
	this.TEXT2.lineHeight = 21;
	this.TEXT2.lineWidth = 425;
	this.TEXT2.parent = this;
	this.TEXT2.setTransform(442.7,603.5);

	this.btn_pic = new lib.Symbol1();
	this.btn_pic.name = "btn_pic";
	this.btn_pic.parent = this;
	this.btn_pic.setTransform(117,627.6,1,1,0,0,0,64,64);
	new cjs.ButtonHelper(this.btn_pic, 0, 1, 1);

	this.TEXT1 = new cjs.Text("<Nama Ruangan / Kelas>", "bold 17px 'Segoe UI'", "#FFFFFF");
	this.TEXT1.name = "TEXT1";
	this.TEXT1.textAlign = "center";
	this.TEXT1.lineHeight = 25;
	this.TEXT1.lineWidth = 424;
	this.TEXT1.parent = this;
	this.TEXT1.setTransform(443,569.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3498DB").s().p("Eg6lANSIAA6jMB1LAAAIAAajg");
	this.shape.setTransform(354.5,635.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.TEXT1},{t:this.btn_pic},{t:this.TEXT2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_description, null, null);


(lib.Scene_1_Canteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Canteen
	this.btn_deBuffet = new lib.BTN_CANTEEN();
	this.btn_deBuffet.name = "btn_deBuffet";
	this.btn_deBuffet.parent = this;
	this.btn_deBuffet.setTransform(613.9,313.6,1,1,0,0,0,88.9,187.3);
	new cjs.ButtonHelper(this.btn_deBuffet, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_deBuffet).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Canteen, null, null);


(lib.Scene_1_A003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A003
	this.btn_A103 = new lib.BTN_A103();
	this.btn_A103.name = "btn_A103";
	this.btn_A103.parent = this;
	this.btn_A103.setTransform(298.5,62,1,1,0,0,0,48.3,62);
	new cjs.ButtonHelper(this.btn_A103, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_A103).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A003, null, null);


(lib.Scene_1_A002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A002
	this.btn_A102 = new lib.BTN_A102();
	this.btn_A102.name = "btn_A102";
	this.btn_A102.parent = this;
	this.btn_A102.setTransform(201.9,62,0.975,1,0,0,0,48.3,62);
	new cjs.ButtonHelper(this.btn_A102, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_A102).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A002, null, null);


(lib.Scene_1_A001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A001
	this.btn_A101 = new lib.BTN_A101();
	this.btn_A101.name = "btn_A101";
	this.btn_A101.parent = this;
	this.btn_A101.setTransform(104.2,62,1,1,0,0,0,48.3,62);
	new cjs.ButtonHelper(this.btn_A101, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_A101).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A001, null, null);


(lib.btn_stafffff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AizEdIAAo5IFnAAIAAI5g");
	this.shape.setTransform(92.5,30.8);

	this.instance = new lib.btn_staffOnly();
	this.instance.parent = this;
	this.instance.setTransform(55.2,20.6,1,1,0,0,0,55.2,17.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.text = new cjs.Text("Staff Only", "bold 18px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(58.2,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AomCyIAAljIRNAAIAAFjg");
	this.shape_1.setTransform(55.1,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AitEpIAApRIFbAAIAAJRg");
	this.shape_2.setTransform(92.8,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,113.1,61);


(lib.Scene_1_Staff_only = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Staff_only
	this.btn_staffOnly2 = new lib.btn_stafffff();
	this.btn_staffOnly2.name = "btn_staffOnly2";
	this.btn_staffOnly2.parent = this;
	this.btn_staffOnly2.setTransform(473.6,28.2,1,1,0,0,0,56.6,29.6);
	new cjs.ButtonHelper(this.btn_staffOnly2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_staffOnly2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Staff_only, null, null);


// stage content:
(lib.lt1 = function(mode,startPosition,loop) {
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
		this.TEXT1 = this.description.TEXT1;
		this.btn_pic = this.description.btn_pic;
		this.TEXT2 = this.description.TEXT2;
		this.btn_tangga = this.Tangga.btn_tangga;
		this.btn_deBuffet = this.Canteen.btn_deBuffet;
		this.btn_exit2 = this.Exit2.btn_exit2;
		this.btn_exit = this.Exit2.btn_exit;
		this.btn_toilet = this.Toilet.btn_toilet;
		this.btn_A103 = this.A003.btn_A103;
		this.btn_A102 = this.A002.btn_A102;
		this.btn_A101 = this.A001.btn_A101;
		this.btn_lift = this.Lift.btn_lift;
		this.btn_staffOnly2 = this.Staff_only.btn_staffOnly2;
		this.btn_energizing = this.energizing_room.btn_energizing;
		this.btn_staffOnly = this.staff_only.btn_staffOnly;
		this.btn_deBuffet.addEventListener("click",buffet.bind(this));
		this.btn_energizing.addEventListener("click",energizing.bind(this));
		this.btn_exit2.addEventListener("click",exit.bind(this));
		this.btn_exit.addEventListener("click",exit.bind(this));
		this.btn_staffOnly.addEventListener("click",staffOnly.bind(this));
		this.btn_staffOnly2.addEventListener("click",staffOnly.bind(this));
		this.btn_lift.addEventListener("click",lift.bind(this));
		this.btn_toilet.addEventListener("click",toilet.bind(this));
		this.btn_tangga.addEventListener("click",tangga.bind(this));
		this.btn_A101.addEventListener("click",training.bind(this));
		this.btn_A102.addEventListener("click",training.bind(this));
		this.btn_A103.addEventListener("click",training.bind(this));
		
		this.btn_pic.visible=false;
		this.TEXT1.visible=false;
		this.TEXT2.visible=false;
		function buffet(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text="De Buffet";
			this.TEXT2.text="Tempat penyajian makanan bagi orang-orang yang datang ke BLI.";
			this.btn_pic.instance.image.src="../../assets/mapping/buffet.png";
		}
		
		function energizing(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text="Energizing Area";
			this.TEXT2.text="Tempat untuk refreshing di BCA Learning Institute.\nBerisi peralatan GYM dan XBOX serta board game.";	
			this.btn_pic.instance.image.src="../../assets/mapping/energizing.png";
		}
		
		function exit(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/exit.png";
			this.TEXT1.text="Emergency Exit";
			this.TEXT2.text="Pintu keluar darurat apabila terjadi bencana.";
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
			this.TEXT2.text="Toilet dibagi menjadi toilet untuk pria dan toilet untuk wanita, serta disable toilet. Disable Toilet adalah toilet yang diperuntukan untuk mereka yang memiliki keterbatasan fisik.";
		}
		
		function lift(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/lift.png";
			this.TEXT1.text="Lift";
			this.TEXT2.text="Lift dipergunakan untuk naik dan turun ke lantai yang diinginkan.";
		}
		
		function tangga(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/tangga.png";
			this.TEXT1.text="Tangga";
			this.TEXT2.text="Tangga pada lantai 1 dipergunakan untuk naik ke lantai 2.";
		}
		
		function training(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/training.png";
			this.TEXT1.text="Training Class";
			this.TEXT2.text="Training Class digunakan untuk training pegawai dari divisi yang berbeda-beda.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// description_obj_
	this.description = new lib.Scene_1_description();
	this.description.name = "description";
	this.description.parent = this;
	this.description.setTransform(354.5,635.5,1,1,0,0,0,354.5,635.5);
	this.description.depth = 0;
	this.description.isAttachedToCamera = 0
	this.description.isAttachedToMask = 0
	this.description.layerDepth = 0
	this.description.layerIndex = 0
	this.description.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.description).wait(1));

	// Tangga_obj_
	this.Tangga = new lib.Scene_1_Tangga();
	this.Tangga.name = "Tangga";
	this.Tangga.parent = this;
	this.Tangga.setTransform(364.8,106.2,1,1,0,0,0,364.8,106.2);
	this.Tangga.depth = 0;
	this.Tangga.isAttachedToCamera = 0
	this.Tangga.isAttachedToMask = 0
	this.Tangga.layerDepth = 0
	this.Tangga.layerIndex = 1
	this.Tangga.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tangga).wait(1));

	// Canteen_obj_
	this.Canteen = new lib.Scene_1_Canteen();
	this.Canteen.name = "Canteen";
	this.Canteen.parent = this;
	this.Canteen.setTransform(613.9,313.7,1,1,0,0,0,613.9,313.7);
	this.Canteen.depth = 0;
	this.Canteen.isAttachedToCamera = 0
	this.Canteen.isAttachedToMask = 0
	this.Canteen.layerDepth = 0
	this.Canteen.layerIndex = 2
	this.Canteen.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Canteen).wait(1));

	// Exit2_obj_
	this.Exit2 = new lib.Scene_1_Exit2();
	this.Exit2.name = "Exit2";
	this.Exit2.parent = this;
	this.Exit2.setTransform(335.9,347.4,1,1,0,0,0,335.9,347.4);
	this.Exit2.depth = 0;
	this.Exit2.isAttachedToCamera = 0
	this.Exit2.isAttachedToMask = 0
	this.Exit2.layerDepth = 0
	this.Exit2.layerIndex = 3
	this.Exit2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Exit2).wait(1));

	// Toilet_obj_
	this.Toilet = new lib.Scene_1_Toilet();
	this.Toilet.name = "Toilet";
	this.Toilet.parent = this;
	this.Toilet.setTransform(361.2,43.9,1,1,0,0,0,361.2,43.9);
	this.Toilet.depth = 0;
	this.Toilet.isAttachedToCamera = 0
	this.Toilet.isAttachedToMask = 0
	this.Toilet.layerDepth = 0
	this.Toilet.layerIndex = 4
	this.Toilet.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toilet).wait(1));

	// A003_obj_
	this.A003 = new lib.Scene_1_A003();
	this.A003.name = "A003";
	this.A003.parent = this;
	this.A003.setTransform(300.2,62,1,1,0,0,0,300.2,62);
	this.A003.depth = 0;
	this.A003.isAttachedToCamera = 0
	this.A003.isAttachedToMask = 0
	this.A003.layerDepth = 0
	this.A003.layerIndex = 5
	this.A003.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A003).wait(1));

	// A002_obj_
	this.A002 = new lib.Scene_1_A002();
	this.A002.name = "A002";
	this.A002.parent = this;
	this.A002.setTransform(202.5,62,1,1,0,0,0,202.5,62);
	this.A002.depth = 0;
	this.A002.isAttachedToCamera = 0
	this.A002.isAttachedToMask = 0
	this.A002.layerDepth = 0
	this.A002.layerIndex = 6
	this.A002.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A002).wait(1));

	// A001_obj_
	this.A001 = new lib.Scene_1_A001();
	this.A001.name = "A001";
	this.A001.parent = this;
	this.A001.setTransform(103.5,62,1,1,0,0,0,103.5,62);
	this.A001.depth = 0;
	this.A001.isAttachedToCamera = 0
	this.A001.isAttachedToMask = 0
	this.A001.layerDepth = 0
	this.A001.layerIndex = 7
	this.A001.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A001).wait(1));

	// Lift_obj_
	this.Lift = new lib.Scene_1_Lift();
	this.Lift.name = "Lift";
	this.Lift.parent = this;
	this.Lift.setTransform(408,75.3,1,1,0,0,0,408,75.3);
	this.Lift.depth = 0;
	this.Lift.isAttachedToCamera = 0
	this.Lift.isAttachedToMask = 0
	this.Lift.layerDepth = 0
	this.Lift.layerIndex = 8
	this.Lift.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Lift).wait(1));

	// Staff_only_obj_
	this.Staff_only = new lib.Scene_1_Staff_only();
	this.Staff_only.name = "Staff_only";
	this.Staff_only.parent = this;
	this.Staff_only.setTransform(473.5,28.2,1,1,0,0,0,473.5,28.2);
	this.Staff_only.depth = 0;
	this.Staff_only.isAttachedToCamera = 0
	this.Staff_only.isAttachedToMask = 0
	this.Staff_only.layerDepth = 0
	this.Staff_only.layerIndex = 9
	this.Staff_only.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Staff_only).wait(1));

	// energizing_room_obj_
	this.energizing_room = new lib.Scene_1_energizing_room();
	this.energizing_room.name = "energizing_room";
	this.energizing_room.parent = this;
	this.energizing_room.setTransform(250,485.4,1,1,0,0,0,250,485.4);
	this.energizing_room.depth = 0;
	this.energizing_room.isAttachedToCamera = 0
	this.energizing_room.isAttachedToMask = 0
	this.energizing_room.layerDepth = 0
	this.energizing_room.layerIndex = 10
	this.energizing_room.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.energizing_room).wait(1));

	// staff_only_obj_
	this.staff_only = new lib.Scene_1_staff_onlycopy();
	this.staff_only.name = "staff_only";
	this.staff_only.parent = this;
	this.staff_only.setTransform(351.6,265,1,1,0,0,0,351.6,265);
	this.staff_only.depth = 0;
	this.staff_only.isAttachedToCamera = 0
	this.staff_only.isAttachedToMask = 0
	this.staff_only.layerDepth = 0
	this.staff_only.layerIndex = 11
	this.staff_only.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.staff_only).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.6,347.7,762.4,722.9);
// library properties:
lib.properties = {
	id: 'F73727E29E90E64BA050A0832871AD6F',
	width: 699,
	height: 700,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"../../assets/mapping/lt8_atlas_.png?1574926769603", id:"lt8_atlas_"}
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