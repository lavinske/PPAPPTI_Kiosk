(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ppti8 = function() {
	this.initialize(img.ppti8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);// helper functions:

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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ppti8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,125);


(lib.Scene_1_Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.TEXT2 = new cjs.Text("<Description>", "14px 'Segoe UI'", "#FFFFFF");
	this.TEXT2.name = "TEXT2";
	this.TEXT2.textAlign = "center";
	this.TEXT2.lineHeight = 21;
	this.TEXT2.lineWidth = 425;
	this.TEXT2.parent = this;
	this.TEXT2.setTransform(436.3,607);

	this.TEXT1 = new cjs.Text("<Nama Ruangan / Kelas>", "bold 17px 'Segoe UI'", "#FFFFFF");
	this.TEXT1.name = "TEXT1";
	this.TEXT1.textAlign = "center";
	this.TEXT1.lineHeight = 25;
	this.TEXT1.lineWidth = 424;
	this.TEXT1.parent = this;
	this.TEXT1.setTransform(436.6,573.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TEXT1},{t:this.TEXT2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Text, null, null);


(lib.Scene_1_dialogBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dialogBox
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3498DB").s().p("Eg+fAPoIAA/PMB8/AAAIAAfPg");
	this.shape.setTransform(357.1,650);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_dialogBox, null, null);


(lib.btn_toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9933").s().p("AifG1IAAiwIE/AAIAACwgAifD5IAAlSIE/AAIAAFSgAifhgIAAlVIE/AAIAAFVg");
	this.shape.setTransform(16,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AAAArQgEgBgCgDQgDgDgBgEIgBgLIAAggIgIAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgGIAAgDIABgCIABgCIABAAIAIAAIAAgPIAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIAFgBIADABIADAAIACABIAAABIAAAPIAOAAIACAAIAAACIABACIAAADIgBAGQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgOAAIAAAeQAAAFACADQABACAFAAIACAAIACgBIACAAIABAAIABAAIABABIAAACIAAADIAAAFIgBADIgCABIgDABIgEAAIgEABQgGAAgDgCg");
	this.shape_1.setTransform(31.1,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgLAjQgHgCgEgFQgFgEgCgHQgCgHAAgJQAAgIACgHQADgHAEgFQAEgFAHgCQAFgDAHAAQAIAAAHADQAFACAEAEQADAFADAGQABAFAAAHIAAADQAAADgBABQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgmAAIABAHQAAAEADACQACADAEABQACABAFAAIAIgBIAGgBIAFgCIACAAIACAAIAAABIABACIAAADIAAACIgBACIAAACIgBABIgCABIgGACIgHABIgJABQgIAAgGgCgAgEgVQgDABgCACQgCACAAADIgBAHIAaAAQAAgIgDgEQgDgFgHAAQgCAAgDACg");
	this.shape_2.setTransform(24.9,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AAAAzIgDAAIgDgBIgCAAIAAgCIAAhfIAAgBIACgBIADgBIADAAIAFAAIADABIABABIAAABIAABfIAAACIgBAAIgDABIgFAAg");
	this.shape_3.setTransform(19.3,52.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAAAyIgEAAIgDgBIgBAAIAAgCIAAhAIAAgCIABAAIADgBIAEAAIAEAAIAEABIABAAIAAACIAABAIAAACIgBAAIgEABIgEAAgAgHgfQgCgDAAgFQAAgFACgDQACgCAFAAQAGAAADACQABACAAAGQAAAFgBACQgDACgGABQgFAAgCgCg");
	this.shape_4.setTransform(15.6,52.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgPAjQgGgDgFgFQgEgEgCgHQgCgHAAgIQAAgIACgGQACgHAFgFQAEgFAHgDQAGgDAJAAQAJAAAGADQAGACAFAFQADAEACAHQADAHAAAIQAAAIgDAHQgBAHgFAFQgEAFgIACQgGADgIAAQgIAAgHgCgAgGgUQgDACgDADQgBADgBAEQgBAEgBAEIABAJIADAHIAFAFQADABAEAAQAEAAADgBQADgCACgDIADgHIABgJIgBgIQgBgEgCgDQgBgDgDgBQgEgCgEAAQgDAAgDABg");
	this.shape_5.setTransform(9.8,53.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgEAvIgDAAIgBgBIgBgBIAAhMIgYAAIgBAAIgBgCIAAgCIAAgEIAAgDIAAgDIABgBIABgBIBCAAIACABIAAABIABADIAAADIAAAEIgBACIAAACIgCAAIgXAAIAABMIgBABIgBABIgDAAIgFABIgEgBg");
	this.shape_6.setTransform(3.3,52.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AifG5IAAiyIE/AAIAACygAifD9IAAlTIE/AAIAAFTgAifhjIAAlVIE/AAIAAFVg");
	this.shape_7.setTransform(16,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,87.5);


(lib.btn_tengah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgpAAcSMAAAg4jMBSAAAAMAAAA4jg");
	this.shape.setTransform(262.5,182.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,524.9,362);


(lib.btn_tangga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AifCtIAAlZIE/AAIAAFZg");
	this.shape.setTransform(17.8,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgVAyQgGgCgFgEQgEgEgDgFQgCgGAAgHQAAgIADgGQADgGAHgDQAGgEAJgBQAJgCALAAIAJAAIAAgGIgBgHQAAgEgCgCQgCgCgEgBIgHgBIgMABIgJAEIgGADIgEABIgCAAIgCgDIgBgDIAAgEIABgFIACgDIAFgEIAIgDIALgDIAKgBQALAAAIADQAHACAFAEQAFAEACAHQADAHAAAKIAAA8IgBACIgEACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgIADQgHAEgIAAQgHAAgGgCgAgDAIQgFABgCACQgDABgBADQgCADAAADQAAAGAEADQAEADAGAAQAEAAAFgCQAFgDAEgGIAAgPIgKAAIgJABg");
	this.shape_1.setTransform(40.8,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgWBDQgIgCgFgDQgGgDgCgFQgCgEAAgGIAAgGIADgGIAEgGIAGgEQgFgDgCgEQgCgEAAgFQAAgGACgEIAHgJQgDgEgCgEQgCgFAAgIQAAgIACgGQADgGAFgFQAFgEAHgDQAHgCAJAAIAHABIAHABIAdAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIABAIQAAAFgBACQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgLAAQADADABADIABAGQAAAIgDAHQgDAGgFAEQgFAFgHACQgHACgHAAIgJgBIgGgCIgCACIgBAEQAAADADABQACACAFAAIAVABIAOADQAGACAEADQAEADADAFQACAFAAAGQAAAHgDAGQgDAGgGAEQgGAFgJADQgJACgLAAQgMAAgIgCgAgQAfIgDADIgBAEIgBADQAAAFAGADQAFACAJAAQAFABAEgCQAEgBADgCIADgFIABgEQAAgFgEgCQgDgDgHAAIgRgBIgEAEgAgIgwQgDABgCACQgCACgBADIgBAGQAAAHAEAEQAEAEAIAAIAFgBIAFgDIADgGIABgGQAAgHgEgEQgEgEgHAAQgDAAgDACg");
	this.shape_2.setTransform(31.2,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgWBDQgIgCgFgDQgGgDgCgFQgCgEAAgGIAAgGIADgGIAEgGIAGgEQgFgDgCgEQgCgEAAgFQAAgGACgEIAHgJQgDgEgCgEQgCgFAAgIQAAgIACgGQADgGAFgFQAFgEAHgDQAHgCAJAAIAHABIAHABIAdAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIABAIQAAAFgBACQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgLAAQADADABADIABAGQAAAIgDAHQgDAGgFAEQgFAFgHACQgHACgHAAIgJgBIgGgCIgCACIgBAEQAAADADABQACACAFAAIAVABIAOADQAGACAEADQAEADADAFQACAFAAAGQAAAHgDAGQgDAGgGAEQgGAFgJADQgJACgLAAQgMAAgIgCgAgQAfIgDADIgBAEIgBADQAAAFAGADQAFACAJAAQAFABAEgCQAEgBADgCIADgFIABgEQAAgFgEgCQgDgDgHAAIgRgBIgEAEgAgIgwQgDABgCACQgCACgBADIgBAGQAAAHAEAEQAEAEAIAAIAFgBIAFgDIADgGIABgGQAAgHgEgEQgEgEgHAAQgDAAgDACg");
	this.shape_3.setTransform(21.1,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAfAzIgHAAIgEgBIgCgBIAAgCIAAgzIgBgLIgDgGQgCgDgDgCQgDgBgEAAQgEAAgFADQgFAEgFAHIAAA8IgBACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgCIAAhbIABgBIACgCIADAAIAFgBIAGABIADAAIACACIAAABIAAALQAIgIAIgEQAGgFAJAAQAJAAAHAEQAGADAEAFQAEAFACAHQACAHAAAKIAAA4IgBACIgCABIgEABIgGAAg");
	this.shape_4.setTransform(10.6,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgVAyQgGgCgFgEQgEgEgDgFQgCgGAAgHQAAgIADgGQADgGAHgDQAGgEAJgBQAJgCALAAIAJAAIAAgGIgBgHQAAgEgCgCQgCgCgEgBIgHgBIgMABIgJAEIgGADIgEABIgCAAIgCgDIgBgDIAAgEIABgFIACgDIAFgEIAIgDIALgDIAKgBQALAAAIADQAHACAFAEQAFAEACAHQADAHAAAKIAAA8IgBACIgEACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgIADQgHAEgIAAQgHAAgGgCgAgDAIQgFABgCACQgDABgBADQgCADAAADQAAAGAEADQAEADAGAAQAEAAAFgCQAFgDAEgGIAAgPIgKAAIgJABg");
	this.shape_5.setTransform(-0.5,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AAABCIgFAAIgEgBIgDgBIAAgBIAAhrIgiAAIgBgBIgBgBIgBgEIgBgEIABgGIABgDIABgCIABAAIBdAAIACAAIABACIABADIAAAGIAAAEIgBAEIgBABIgCABIghAAIAABrIgBABIgCABIgEABIgHAAg");
	this.shape_6.setTransform(-9.1,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AifCvIAAldIE/AAIAAFdg");
	this.shape_7.setTransform(17.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,0.8,32,34.5);


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


(lib.btn_mushola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("AnQJxIAAzhIOhAAIAAThg");
	this.shape.setTransform(46.2,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgUAvQgGgCgEgDQgEgEgCgFQgDgFAAgHQAAgIADgFQADgGAGgCQAGgEAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgFIgFgEIgHgBQgGAAgFACIgIADIgHADIgEABIgBAAIgCgCIgBgDIAAgFIAAgEIACgEIAFgDIAIgCIAKgDIAKgBQALAAAHACQAHACAFAEQAEAEADAHQACAGAAAJIAAA6IgBACIgDABIgGAAIgHAAIgDgBIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgCgAgDAIIgHACIgEAEIgBAGQAAAGAEADQADADAGAAQAEAAAFgDQAEgDAFgFIAAgPIgKAAIgJACg");
	this.shape_1.setTransform(77.2,66.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AAABEIgFAAIgEgBIgCgBIAAgCIAAh/IAAgCIACgBIAEgBIAFAAIAGAAIAEABIACABIAAACIAAB/IAAACIgCABIgEABIgGAAg");
	this.shape_2.setTransform(70.1,64.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgUAuQgJgDgGgGQgFgHgDgJQgDgJAAgLQAAgKADgJQADgJAGgHQAGgHAJgDQAJgEALAAQAMAAAIADQAJADAGAHQAFAGADAIQADAJAAAMQAAAKgDAKQgDAJgGAHQgGAGgJAEQgJADgLAAQgMAAgIgDgAgIgaQgFACgCADQgDAEgBAFIgBAMIABAMQABAFACAEQADAEAEADQAEABAFAAQAFAAAEgBQAFgCACgEQADgEABgGIABgMIgBgLQgBgFgCgEQgDgEgEgCQgEgCgGgBQgEABgEACg");
	this.shape_3.setTransform(62.2,66.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAeBEIgHAAIgDgBIgCgBIgBgCIAAgxIgBgKIgDgFQgCgDgCgBQgDgCgDAAQgEAAgFAEQgFACgFAHIAAA5IAAACIgCABIgFABIgGAAIgFAAIgEgBIgCgBIgBgCIAAh/IABgCIACgBIAEgBIAFAAIAGAAIAFABIACABIAAACIAAAwQAGgGAHgDQAFgDAIAAQAIAAAGADQAGADAFAFQADAFACAHQABAFAAAKIAAA1IAAACIgCABIgDABIgGAAg");
	this.shape_4.setTransform(51.5,64.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgNAwIgIgBIgFgCIgEgDIgCgDIAAgHIAAgEIABgDIABgBIABgBIADABIAGAEIAHACQAEACAFgBIAFgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgFQAAgDgBgCIgFgEIgGgCIgIgEIgHgEQgEgBgDgDQgDgDgCgEQgCgFAAgGQAAgGADgFQACgGAFgDQAEgEAHgCQAHgCAHAAIAIAAIAHACIAFACIADACIABABIABACIAAADIABADIgBAEIAAADIgBACIgBAAIgDgBIgFgCIgGgDIgJgBIgEABIgEACIgDADIAAADQAAADABADIAFADIAGAEIAIADIAIADQAEACADADQADADACAEQABAEAAAGQAAAHgCAGQgDAGgFADQgFAFgHABQgHACgHAAIgKgBg");
	this.shape_5.setTransform(42.1,66.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgYAuQgGgDgEgFQgDgGgCgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAGAAIAFAAIAFABIABABIABACIAAAwIAAAKQABAEACADQACACADACQADABAEAAQADAAAFgDIAKgKIAAg5IABgCIABgBIAEgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIgBgCIAAgKQgHAIgHAEQgHADgHAAQgKAAgGgCg");
	this.shape_6.setTransform(32.7,66.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AA9A/IgGAAIgDAAIgCgCIgBgBIAAhnIgkBnIgCACIgCABIgEAAIgFAAIgGAAIgEAAIgBgCIgCgBIgjhnIAAAAIAABnIgBABIgCACIgDAAIgHAAIgFAAIgEAAIgCgCIgBgBIAAhwQABgFACgDQACgCAFAAIARAAIAIAAQADABACACQACACACADIACAGIAbBLIAAAAIAchKIAEgHIADgFQACgCADgBIAGAAIARAAIAFAAIADACIACAEIAAAEIAABwIAAABIgCACIgDAAIgHAAg");
	this.shape_7.setTransform(18.6,64.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AnQJxIAAzhIOhAAIAAThg");
	this.shape_8.setTransform(46.1,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,93.1,125);


(lib.btn_lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ADICYIAAkvIFoAAIAAEvgAizCYIAAkvIFnAAIAAEvgAouCYIAAkvIFoAAIAAEvg");
	this.shape.setTransform(54.7,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AAAA6QgFgCgDgEQgEgEgCgGQgBgFgBgIIAAgsIgKAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgIIABgFIAAgDIACgCIABAAIAKAAIAAgTIABgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAAATIATAAIABAAIACACIAAADIABAFIgBAIQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgTAAIAAAoQAAAHACAEQADADAFAAIAEAAIADgBIACgBIABAAIABAAIABACIAAACIABAFIgBAGIgBAEIgCABIgFACIgEAAIgGABQgHAAgFgCg");
	this.shape_1.setTransform(64.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgDBFIgGAAIgEgBIgCgCIgBgCIAAhFIgLAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBgIIAAgEIABgEIABgCIACAAIAKAAIAAgHQAAgJACgGQACgHAEgFQADgEAFgCQAGgCAIgBIAHABIAGACIACABIABABIABADIAAAGIAAAEIgBADIgBABIgBAAIgBAAIgCgBIgDAAIgEgBIgEABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgCAFIAAAHIAAAIIAQAAIABAAIACACIAAAEIABAEIgBAIQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgQAAIAABFIgBACIgCACIgDABIgFAAg");
	this.shape_2.setTransform(58.5,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AAABDIgFAAIgEgBIgCgCIAAgCIAAhVIAAgCIACgBIAEgBIAFgBIAGABIAEABIACABIAAACIAABVIAAACIgCACIgEABIgGAAgAgKgrQgDgCAAgIQAAgHADgDQADgCAHAAQAIgBADADQADADAAAHQAAAHgDADQgDADgIAAQgIAAgCgDg");
	this.shape_3.setTransform(52.7,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgaA/QgDAAgCgBQgCgCgBgFIAAhyIABgBIACgCIAEAAIAGgBIAHABIAEAAIABACIABABIAABmIAnAAIACAAIABABIAAAEIAAAFIAAAEIAAAEIgBACIgCAAg");
	this.shape_4.setTransform(46.6,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("ADBCYIAAkvIFoAAIAAEvgAi1CYIAAkvIFnAAIAAEvgAopCYIAAkvIFoAAIAAEvg");
	this.shape_5.setTransform(55.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-0.2,111.9,30.4);


(lib.btn_library = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("AvQOlIAA9DIRiAAIAAADIgHAAIAAQNIIdAAIAAgBIEpAAIAAM0gACTBpIAAwNIM+AAIAAQNg");
	this.shape.setTransform(148.9,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgQA9IgDgBIgBgBIABgDIALgcIgDgCIgCgCIgchLIgBgFIABgDIAEgBIAHAAIAGAAIAEAAIACACIABADIASA3IABAAIARg4IACgDIADgBIAHAAIAHAAIAEABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEIgmBuQAAABgEABIgKABIgGAAg");
	this.shape_1.setTransform(229.5,57.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgOAuIgGAAIgDgBIgCgBIgBgCIAAhSIABgBIACgBIADgBIAEAAIAFAAIADABIACABIAAABIAAALIAGgIIAFgFIAFgCIAFgBIADAAIADABIACAAIACABIABABIAAACIABADIAAAFIgBAGIAAADIgBACIgCAAIgBAAIgCgBIgDgBIgDAAIgEABIgEACIgEAFIgEAHIAAAyIgBACIgCABIgDABIgGAAg");
	this.shape_2.setTransform(221.9,55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgTAtQgFgCgEgDQgEgDgCgFQgDgGAAgHQAAgGADgGQADgFAGgCQAFgEAJgCQAIgBAKgBIAIAAIAAgEIgBgHIgCgFIgFgDIgHgBQgFAAgFABIgIADIgGADIgEACIgCgBIgBgCIgBgDIAAgEIAAgFIACgCIAFgDIAHgEIAKgCIAJAAQAKAAAHABQAHACAEAEQAFAEACAGQACAGAAAJIAAA3IgBACIgDABIgGAAIgGAAIgDgBIAAgCIAAgHQgFAGgHADQgHACgHAAQgGABgGgCgAgDAHIgGACQgDACgBADIgBAFQAAAFADADQAEADAGAAQAEAAAEgDIAIgHIAAgOIgJAAIgJABg");
	this.shape_3.setTransform(213.1,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgOAuIgGAAIgDgBIgCgBIgBgCIAAhSIABgBIACgBIADgBIAEAAIAFAAIADABIACABIAAABIAAALIAGgIIAFgFIAFgCIAFgBIADAAIADABIACAAIACABIABABIAAACIABADIAAAFIgBAGIAAADIgBACIgCAAIgBAAIgCgBIgDgBIgDAAIgEABIgEACIgEAFIgEAHIAAAyIgBACIgCABIgDABIgGAAg");
	this.shape_4.setTransform(206.2,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgBBBIgHgCIgGgFIgHgGIAAAJIAAABIgCABIgDABIgFAAIgEAAIgDgBIgCgBIgBgBIAAh6IABgBIACgBIADgBIAGAAIAGAAIADABIACABIABABIAAAuIAGgFIAGgEIAGgCIAHAAQAJAAAHADQAGADAEAHQAEAGACAHQACAJAAAJQAAALgDAIQgCAJgFAHQgEAGgHAEQgGACgJAAIgHAAgAgCgGIgFACIgFAEIgFAGIAAAbIAJAKQAFADAEAAQAEAAADgCQAEgDACgEIADgIIABgKIgBgKIgDgJIgFgFQgDgCgFAAIgDABg");
	this.shape_5.setTransform(197.5,54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AAAA/IgFAAIgEgBIgCgBIAAgBIAAhSIAAgCIACgBIAEgBIAFAAIAFAAIAEABIACABIABACIAABSIgBABIgCABIgEABIgFAAgAgKgoQgCgDAAgHQAAgHACgCQADgDAHAAQAIAAADACQACADAAAHQAAAHgCADQgEACgHAAQgHAAgDgCg");
	this.shape_6.setTransform(189.9,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgZA8QgDAAgCgCQgCgBAAgEIAAhsIAAgCIADgBIADgBIAHAAIAFAAIAEABIACABIAAACIAABfIAlAAIACABIABABIABADIAAAFIAAAFIgBADIgBACIgCAAg");
	this.shape_7.setTransform(184.1,54.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgcBRQgPgGgKgJQgLgLgFgQQgFgQAAgWQAAgSAFgRQAGgQAKgMQAKgLAPgGQAOgGARAAQATAAAOAFQANAGAJAKQAIALAFANQAEAOAAAPIAAAIQAAAGgDAEQgEAEgGAAIhcAAQAAAKADAHQACAJAEAFQAFAGAJADQAHACALAAQALABAIgCIAQgDIAKgFIAGgBIADAAIABADIABAEIAAAHIAAAGIAAAFIgBADIgCADIgGADIgMAEIgSAEQgKABgLAAQgUAAgPgFgAgMg0QgFADgFAGQgDAFgCAHQgDAHAAAIIA/AAQABgSgIgKQgIgLgQAAQgHAAgHADg");
	this.shape_8.setTransform(152,139.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AglBwQgOgDgIgFQgJgGgEgIQgEgHAAgKQAAgFABgFQACgFADgFQACgFAFgEIAJgIQgHgEgEgHQgEgGAAgJQAAgKAEgHQAFgJAHgGQgGgGgDgIQgEgJAAgMQAAgOAFgKQAEgKAJgIQAIgHAMgEQALgEAOAAIANABIAMADIAxAAQADgBABAEQACAEAAAJQAAAIgCAEQgCAEgCAAIgSAAQAEAEABAFQACAGAAAFQAAAOgFAKQgEAKgIAHQgJAIgLADQgMAEgNAAQgIAAgGgCQgHgCgEgCIgDAFQgCADAAADQAAAFAEADQAFADAIABIAkABQANAAAKADQAKADAHAGQAHAGAEAIQADAIAAALQAAAKgFAKQgFALgKAHQgKAHgOAEQgQAFgTAAQgTAAgOgDgAgcA0IgEAFQgCADAAADIgBAFQAAAIAJAFQAJAFAPAAQAJgBAHgCQAGgCAFgCQAEgEABgEQACgEAAgEQAAgIgGgEQgGgEgLgBIgegBQgEADgDAEgAgOhSQgFACgDAEQgDADgCAFIgBALQAAALAGAHQAHAHAMgBQAGAAAFgCQAEgCAEgDQADgEABgEQACgFAAgFQAAgNgHgGQgHgHgLAAQgGAAgFACg");
	this.shape_9.setTransform(135.2,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AApBUIgHgBIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhVQAAgMgCgFQgBgHgDgFQgDgEgFgCQgFgDgHAAQgHAAgIAGQgJAGgJAMIAABjIgBAEIgDACIgHABIgKAAIgLAAIgGgBIgEgCIgBgEIAAiXIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAGgBIAJAAIAJAAIAFABIADACIABADIAAASQANgOANgHQAMgHAOAAQAQAAAKAGQALAFAHAIQAGAJADAMQADAMAAARIAABcIgBAEIgEACIgGABIgKAAIgLAAg");
	this.shape_10.setTransform(117.6,139.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AgqBQQgLgGgGgJQgHgIgDgMQgDgMAAgRIAAhdIABgDIAEgCIAHgBIAKAAIAKAAIAHABIADACIABADIAABWQAAALACAHQABAGAEAEQADAFAFADQAEACAHAAQAHAAAJgGQAIgGAJgLIAAhlIABgDIAEgCIAGgBIALAAIAKAAIAGABIAEACIABADIAACXIgBAEIgDACIgGABIgIAAIgJAAIgGgBIgDgCIgBgEIAAgRQgNAOgNAHQgMAGgOAAQgPAAgLgEg");
	this.shape_11.setTransform(98.7,139.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AglBQQgOgFgKgLQgKgLgFgQQgFgPAAgVQABgSAFgQQAEgQALgMQAKgLARgHQAPgGAUAAQAUAAAQAFQAPAGAJALQAKAKAFAQQAFAQgBAUQAAATgEAQQgGAQgKALQgKANgQAFQgQAHgUAAQgUAAgQgGgAgPgvQgIADgEAHQgFAHgCAJQgCAJgBAMQAAALACAKQADAJADAHQAEAHAIAEQAHADAKAAQAKAAAGgDQAHgEAGgGQAEgHACgJQADgJAAgNQgBgKgCgKQgBgJgEgHQgFgHgHgEQgHgEgLAAQgIAAgHAEg");
	this.shape_12.setTransform(80,139.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AguBvQgGAAgEgDQgEgEAAgHIAAjIIACgDIADgCIAHgBIALgBIALABIAHABIADACIABADIAACxIBFAAIADABIACADIACAFIAAAJIAAAJIgCAGIgCADIgDABg");
	this.shape_13.setTransform(64.3,136.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AglBUIgGgBIgEgCIgBgDIAAiYIABgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAGgBIAIgBIAJABIAGABIADADIABACIAAATIALgOIAJgIQAFgEAFgBIAJgCIAFABIAFAAIAFACIADABIABADIABACIABAGIAAAKIgBAKIgBAFIgBAEIgDABIgDgBIgEgBIgFgBIgFgBIgHACQgEAAgEAEIgIAIIgIAMIAABfIgBADIgDACIgHABIgKABIgLgBg");
	this.shape_14.setTransform(152.4,94.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AgcBRQgPgGgLgKQgKgKgFgQQgFgQAAgWQAAgSAFgRQAGgRAKgLQAKgLAPgGQAOgGARAAQATAAANAFQAOAHAJAKQAIAKAFANQAEAOAAAQIAAAHQAAAGgEAEQgDAEgHAAIhbAAQAAAJACAIQACAJAGAFQAFAFAHAEQAIADAKAAQAMgBAJgBIAOgEIAKgEIAHgBIADABIACACIABAEIAAAHIAAAGIgBAFIgBADIgCADIgGADIgNAEIgRADQgKACgLAAQgTAAgQgFgAgLg0QgHADgDAGQgFAFgCAHQgCAHAAAIIA/AAQAAgSgHgKQgIgKgQAAQgIAAgFACg");
	this.shape_15.setTransform(136.5,94.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AApBUIgHgBIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAhXQAAgKgCgHQgBgGgDgFQgDgEgFgDQgFgCgHAAQgHAAgIAGQgJAGgJAMIAABkIgBADIgDACIgHABIgKABIgLgBIgGgBIgEgCIgBgDIAAiYIABgCQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAGgBIAJgBIAJABIAFABIADADIABACIAAASQANgOANgGQAMgIAOAAQAQAAAKAGQALAFAHAIQAGAKADALQADAMAAARIAABdIgBADIgEACIgGABIgKABIgLgBg");
	this.shape_16.setTransform(118.4,94.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("AgKB0IgGgBIgEgCIgBgDIAAiYIABgCIAEgCIAGgCIAKgBIAKABIAHACIADACIABACIAACYIgBADIgDACIgHABIgKABIgKgBgAgThLQgFgFAAgNQAAgNAFgFQAFgEAOAAQAOAAAFAEQAGAFAAAMQAAANgGAFQgFAGgOAAQgOgBgFgEg");
	this.shape_17.setTransform(104.7,91.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("AgjBTQgLgDgHgHQgHgGgFgJQgEgKAAgMQAAgNAGgJQAFgKAKgGQAKgGAQgDQAPgEAUAAIAOAAIAAgJIgBgMQgBgGgEgDQgDgEgGgCQgFgCgHAAQgLABgJACIgPAFIgKAGQgFACgDAAIgDgBIgCgEIgCgFIAAgHIABgJQAAgCADgDIAIgFIAOgGIASgEQAJgCAJAAQASAAANAEQANADAIAHQAIAIAEALQAEAMAAAPIAABmQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgCACgDAAIgLABIgLgBQgEAAgBgCQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgNQgJALgMAFQgMAGgOAAQgMAAgKgDgAgGANQgHACgFACQgEADgCAFQgDAFAAAFQAAAKAHAFQAGAGAKgBQAIABAIgFQAIgEAHgKIAAgaIgQAAQgKAAgHACg");
	this.shape_18.setTransform(91.2,94.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AglBUIgGgBIgEgCIgBgDIAAiYIABgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAGgBIAIgBIAJABIAGABIADADIABACIAAATIALgOIAJgIQAFgEAFgBIAKgCIAEABIAGAAIAEACIADABIACADIAAACIABAGIAAAKIgBAKIAAAFIgCAEIgDABIgDgBIgEgBIgFgBIgGgBIgGACQgEAAgEAEIgIAIIgIAMIAABfIgBADIgEACIgGABIgKABIgLgBg");
	this.shape_19.setTransform(78.4,94.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AgKBuIgGgBQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgCgDIAAixIg3AAIgCgBIgDgEIgBgFIgBgIIABgJIABgGQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBICbAAIADABIACADIACAGIAAAJIAAAIIgCAFIgCAEIgDABIg4AAIAACxIgBADQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgHABIgLABIgKgBg");
	this.shape_20.setTransform(64.5,91.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AviOoIAA9DIR/AAIAAQOINGAAIAAM1gAClBmIAAwNIM+AAIAAQNg");
	this.shape_21.setTransform(146.7,93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.3,0,195.4,186.7);


(lib.btn_exit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("", "15px 'Calibri-Bold'", "#515151");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.parent = this;
	this.text.setTransform(25.1,3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AprD6IAAnzITXAAIAAHzg");
	this.shape.setTransform(62,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgZAwIgBgBIgBgBIgBgCIAAgEIAAgDIABgCIAAgCIACAAIARAAIAAg9IgOAJIgEABIgBgBIgBgCIAAgEIAAgDIAAgCIABgBIABgCIAVgNIABAAIABAAIADgBIACAAIAFAAIACABIABAAIABACIAABNIAPAAIABAAIABACIABACIAAADIAAAEIgBACIgBABIgBABg");
	this.shape_1.setTransform(77.6,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AAAArQgEgBgCgDQgDgDgBgEIgBgLIAAggIgIAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgBgGIAAgDIABgCIABgCIABAAIAIAAIAAgPIAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIAFgBIADABIADAAIACABIAAABIAAAPIAOAAIACAAIAAACIABACIAAADIgBAGQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgOAAIAAAeQAAAFACADQABACAFAAIACAAIACgBIACAAIABAAIABAAIABABIAAACIAAADIAAAFIgBADIgCABIgDABIgEAAIgEABQgGAAgDgCg");
	this.shape_2.setTransform(67.4,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AAAAyIgEAAIgCgBIgCgBIAAgBIAAhAIAAgBIACgCIACAAIAEgBIAEABIADAAIACACIAAABIAABAIAAABIgCABIgDABIgEAAgAgHggQgCgCgBgFQABgGACgCQACgCAFAAQAGAAADACQACACAAAFQAAAGgCACQgDACgGAAQgFAAgCgCg");
	this.shape_3.setTransform(63.1,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAWAkIgFAAIgDgBIgCgBIgBgBIgLgXIgMAXIgBABIgBABIgDABIgGAAIgEAAIgDgBIgBgCIAAgCIASgfIgQgeIgBgCIABgCIADAAIAGgBIAFABIADAAIABABIACABIAKAWIALgWIABgBIACgBIADAAIAEgBIAFABIADAAIAAACIAAACIgRAeIASAfIABACIgBACIgDABIgGAAg");
	this.shape_4.setTransform(57.8,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgVAvQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAhSQAAgEABgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAuAAIABAAIABACIAAACIAAAEIAAADIAAACIgBABIgBABIghAAIAAAXIAbAAIACAAIABABIABADIAAAEIAAACIgBACIgBACIgCAAIgbAAIAAAbIAhAAIABAAIABABIABACIAAAEIAAAEIgBACIgBABIgBAAg");
	this.shape_5.setTransform(50.9,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgMAxIgDgBIAAgCIAAgCIAJgWIgCgBIgCgCIgWg7IgBgEIABgCIADgBIAGgBIAEABIAEAAIABACIABACIAPArIANgsIABgCIADgBIAFgBIAGABIADABIABACIgBADIgeBWQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgHABIgFAAg");
	this.shape_6.setTransform(94.6,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgIAjQgGgDgEgEQgDgFgCgHQgDgGAAgJQAAgIADgIQACgHAEgEQAFgFAGgCQAGgDAGAAIAGABIAFABIAFACIACACIABACIABABIAAACIAAADIgBAGQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgDgBIgDgCIgEgDIgHgBQgHAAgDAGQgEAFAAAKIABAJIADAHIADAEIAHABIAHgBIAEgCIAEgDIACgBIABABIABABIAAACIAAAEIAAAEIAAACIAAABIgCACIgCACIgFACIgGABIgGABQgHAAgGgCg");
	this.shape_7.setTransform(88,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AAWAkIgEAAIgDgBIgCAAIAAgCIAAgkIgBgHIgCgFIgDgDIgFgBQgDAAgDACIgIAIIAAAqIAAACIgBAAIgDABIgFAAIgEAAIgDgBIgCAAIAAgCIAAhAIAAgBIACgBIACgBIAEAAIAEAAIACABIABABIABABIAAAHQAFgFAGgDQAEgDAGAAQAHAAAFACQAEACADAEIAEAJIABAMIAAAnIAAACIgCAAIgCABIgFAAg");
	this.shape_8.setTransform(80.8,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AgLAjQgHgCgFgFQgEgEgCgHQgCgHAAgJQAAgIACgHQACgHAFgFQAEgFAHgCQAFgDAHAAQAIAAAHADQAFACAEAEQAEAFABAGQACAFAAAHIAAADQAAADgCABQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgmAAIABAHQAAAEADACQACADAEABQACABAFAAIAIgBIAGgBIAFgCIACAAIACAAIAAABIABACIAAADIAAACIgBACIAAACIgBABIgCABIgGACIgHABIgJABQgIAAgGgCgAgFgVQgCABgCACQgCACAAADIgBAHIAaAAQAAgIgDgEQgDgFgHAAQgDAAgDACg");
	this.shape_9.setTransform(73,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgPAwIgKgDQgEgDgBgDQgCgEAAgEIAAgEIADgFIACgDIAEgEIgEgEQgCgDAAgEQAAgEACgDIAFgGIgEgGQgCgDABgGQAAgFABgFQACgEAEgEQADgDAGgCQAEgBAHAAIAFAAIAEABIAVAAIADACIAAAFIAAAGIgDABIgHAAIACAEIABAFQAAAFgCAFQgCAFgEADQgDADgFABQgGABgEAAIgHAAIgEgCIgBACIgBACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQACACADAAIAPABQAFAAAFACQAEABADACQADADABADQACAEAAAEQAAAEgCAFQgCAEgEADQgFAEgGACQgGABgIAAIgOgBgAgLAWIgCACIgBADIAAACQAAAEAEABQADADAHAAIAGgBIAEgDIADgCIABgEQAAgDgDgCQgCgCgFAAIgMAAIgDACgAgGgiIgDACIgCADIAAAFQAAAFACADQAEACAFAAIADAAIAEgCIACgEIAAgEQAAgGgCgCQgDgDgEAAIgGABg");
	this.shape_10.setTransform(65.8,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AgKAkIgFAAIgDgBIgCAAIAAgCIAAhAIAAgBIACgBIACgBIAEAAIAEAAIADABIABABIAAABIAAAIIAEgGIAEgEIAEgCIAFAAIACAAIABAAIACABIACABIABAAIAAACIAAACIAAAEIAAAEIAAADIgBABIgCABIgBgBIgCAAIgBgBIgDAAIgDABIgDACIgEADIgDAGIAAAnIAAACIgBAAIgDABIgEAAg");
	this.shape_11.setTransform(60.1,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AgMAjQgGgCgFgFQgEgEgCgHQgCgHAAgJQAAgIACgHQACgHAFgFQAEgFAGgCQAHgDAGAAQAJAAAFADQAGACAEAEQADAFACAGQACAFAAAHIAAADQAAADgCABQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgoAAIABAHQABAEADACQACADADABQADABAEAAIAJgBIAHgBIAEgCIADAAIABAAIABABIAAACIAAADIAAACIAAACIAAACIgBABIgDABIgFACIgIABIgJABQgIAAgHgCgAgFgVQgCABgBACQgCACgBADIgCAHIAbAAQABgIgEgEQgDgFgHAAQgDAAgDACg");
	this.shape_12.setTransform(53.3,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AArAkIgEAAIgEgBIgBAAIAAgCIAAglIgBgGIgBgFIgEgDIgEgBQgEAAgEACIgHAIIAAAqIAAACIgCAAIgCABIgFAAIgDAAIgDgBIgCAAIAAgCIAAglIgBgGIgCgFIgCgDIgGgBQgDAAgDACIgHAIIAAAqIgBACIgBAAIgDABIgEAAIgFAAIgDgBIgBAAIgBgCIAAhAIABgBIABgBIADgBIADAAIAEAAIACABIABABIABABIAAAHQAGgFAFgDQAFgDAGAAIAIABQACAAADACIAEAEIACAFIAGgGIAGgDIAGgDIAFAAQAGAAAFACQAFACACAEQADAEABAFIABAKIAAApIgBACIAAAAIgDABIgFAAg");
	this.shape_13.setTransform(43.5,12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AgVAvQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIAAhRQAAgDABgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAuAAIABAAIABACIAAACIAAADIAAAEIAAACIgBABIgBABIghAAIAAAXIAbAAIACABIABABIABACIAAAEIAAACIgBACIgBABIgCAAIgbAAIAAAbIAhAAIABABIABABIABADIAAADIAAAEIgBACIgBABIgBAAg");
	this.shape_14.setTransform(33.9,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AprD6IAAnzITXAAIAAHzg");
	this.shape_15.setTransform(62,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,124,50);


(lib.btn_emergencyExit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AkWOiIAA9DIIuAAIAAdDg");
	this.shape.setTransform(38.1,74.8);

	this.text = new cjs.Text("E\nX\nI\nT\n\n2", "bold 14px 'Calibri'", "#000099");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(46.7,15.7);

	this.text_1 = new cjs.Text("E\nM\nE\nR\nG\nE\nN\nC\nY", "bold 14px 'Calibri'", "#000099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(26.8,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkWOjIAAgBIgBAAIAA9DIIuAAIAAAAIABAAIAAdEg");
	this.shape_1.setTransform(37.6,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.2,-18.2,55.9,186);


(lib.btn_aqua = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Ab2PRIAAjxIDTAAIAADxgAb2nwIAAjvIDTAAIAADvgA/IrfIAAjxIDSAAIAADxg");
	this.shape.setTransform(199.3,97.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AAfAzIgHAAIgEgBIgCgBIAAgCIAAgzIgBgLIgDgGQgCgDgDgCQgDgBgEAAQgEAAgFADQgFAEgFAHIAAA8IgBACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgCIAAhbIABgBIACgCIADAAIAFgBIAGABIADAAIACACIAAABIAAALQAIgIAIgEQAGgFAJAAQAJAAAHAEQAGADAEAFQAEAFACAHQACAHAAAKIAAA4IgBACIgCABIgEABIgGAAg");
	this.shape_1.setTransform(201,122.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgVAwQgJgDgHgHQgFgGgDgKQgDgJAAgMQAAgLADgJQADgKAGgHQAHgHAJgEQAJgEAMAAQAMAAAKAEQAIADAGAHQAGAGADAJQADAKAAAMQAAALgDAJQgDAKgHAHQgGAHgJAEQgKAEgLAAQgNAAgIgEgAgJgcQgFACgCAEQgDAEgBAGQgCAGABAGIABAMQAAAGADAEQACAEAFADQAFACAFAAQAGAAAEgCQAEgCADgEQADgEABgGQABgGABgHIgBgLQgCgGgDgEQgCgEgEgDQgFgCgGAAQgFAAgEACg");
	this.shape_2.setTransform(189.7,122.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AAABGIgFAAIgEgBIgCgBIgBgCIAAhaIABgCIACgCIAEAAIAFgBIAGABIAEAAIACACIABACIAABaIgBACIgCABIgEABIgGAAgAgLgtQgDgDAAgHQAAgIADgDQADgDAIAAQAJAAADADQADADAAAHQAAAIgDADQgDADgJAAQgIAAgDgDg");
	this.shape_3.setTransform(181.5,120.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAAA9QgGgCgDgFQgEgDgCgHQgBgGAAgIIAAguIgLAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIgBgIIAAgEIABgEIABgBIACgBIALAAIAAgUIAAgCIACgCIAEgBIAGAAIAGAAIAEABIACACIAAACIAAAUIAUAAIACABIABABIABAEIAAAEIgBAIQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgUAAIAAAqQAAAIADADQACAEAGAAIAEAAIADgBIACgBIABgBIACABIAAACIABACIAAAFIAAAHIgCAEIgCABIgFACIgFAAIgGAAQgHAAgFgBg");
	this.shape_4.setTransform(175.1,121.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgVAyQgGgCgFgEQgEgEgDgFQgCgGAAgHQAAgIADgGQADgGAHgDQAGgEAJgBQAJgCALAAIAJAAIAAgGIgBgHQAAgEgCgCQgCgCgEgBIgHgBIgMABIgJAEIgGADIgEABIgCAAIgCgDIgBgDIAAgEIABgFIACgDIAFgEIAIgDIALgDIAKgBQALAAAIADQAHACAFAEQAFAEACAHQADAHAAAKIAAA8IgBACIgEACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgIADQgHAEgIAAQgHAAgGgCgAgDAIQgFABgCACQgDABgBADQgCADAAADQAAAGAEADQAEADAGAAQAEAAAFgCQAFgDAEgGIAAgPIgKAAIgJABg");
	this.shape_5.setTransform(166.4,122.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AAAA9QgGgCgDgFQgEgDgCgHQgBgGAAgIIAAguIgLAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIgBgIIAAgEIABgEIABgBIACgBIALAAIAAgUIAAgCIACgCIAEgBIAGAAIAGAAIAEABIACACIAAACIAAAUIAUAAIACABIABABIABAEIAAAEIgBAIQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgUAAIAAAqQAAAIADADQACAEAGAAIAEAAIADgBIACgBIABgBIACABIAAACIABACIAAAFIAAAHIgCAEIgCABIgFACIgFAAIgGAAQgHAAgFgBg");
	this.shape_6.setTransform(157.8,121.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgRBDIgLgCIgHgEIgFgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgIIAAgFIABgEIABgBIACgBIAEACIAGADIAKAEQAGACAHAAIAIgBQAEgBADgDIAEgFQABgDAAgEQAAgFgCgDQgDgDgDgCIgIgFIgLgFIgKgFIgJgHQgEgEgDgGQgCgGAAgJQAAgJAEgHQADgIAGgEQAGgFAIgCQAIgDAIAAIAKABIAJACIAHADIAEACIACACIAAACIABADIAAAEIAAAFIgBAEIgBACIgCAAIgDgBIgGgDIgJgDQgEgCgGAAIgHABQgDABgCACQgDACgBADIgBAFQAAAFADADIAGAGIAIAFIALAEIAKAGQAFADAEADQAEAFADAGQACAFAAAIQAAALgEAIQgDAIgHAFQgHAFgJADQgJADgJAAQgHAAgFgCg");
	this.shape_7.setTransform(149.4,121.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgWBDQgIgCgFgDQgGgEgCgEQgCgFAAgFIAAgHIADgFIAEgGIAGgEQgFgDgCgEQgCgEAAgFQAAgGACgEIAHgJQgDgDgCgFQgCgGAAgHQAAgIACgGQADgGAFgFQAFgEAHgCQAHgDAJAAIAHABIAHABIAdAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIABAIQAAAFgBACQgBABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgLAAQADACABADIABAGQAAAJgDAGQgDAGgFAEQgFAEgHADQgHACgHAAIgJgBIgGgCIgCADIgBACQAAAEADACQACABAFAAIAVABIAOACQAGADAEADQAEAEADAEQACAFAAAGQAAAHgDAGQgDAGgGAFQgGAEgJADQgJACgLAAQgMAAgIgCgAgQAfIgDADIgBADIgBAEQAAAFAGADQAFADAJAAQAFgBAEgBQAEgBADgCIADgEIABgGQAAgEgEgCQgDgDgHAAIgRgBIgEAEgAgIgwQgDAAgCADQgCACgBADIgBAGQAAAHAEAEQAEAEAIAAIAFgBIAFgEIADgEIABgHQAAgHgEgEQgEgEgHAAQgDAAgDACg");
	this.shape_8.setTransform(207.2,96.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AAfAzIgHAAIgEgBIgCgBIAAgCIAAgzIgBgLIgDgGQgCgDgDgCQgDgBgEAAQgEAAgFADQgFAEgFAHIAAA8IgBACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgCIAAhbIABgBIACgCIADAAIAFgBIAGABIADAAIACACIAAABIAAALQAIgIAIgEQAGgFAJAAQAJAAAHAEQAGADAEAFQAEAFACAHQACAHAAAKIAAA4IgBACIgCABIgEABIgGAAg");
	this.shape_9.setTransform(196.7,95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AAABGIgFAAIgEgBIgCgBIgBgCIAAhaIABgCIACgCIAEAAIAFgBIAGABIAEAAIACACIABACIAABaIgBACIgCABIgEABIgGAAgAgLgtQgDgDAAgHQAAgIADgDQADgDAIAAQAJAAADADQADADAAAHQAAAIgDADQgDADgJAAQgIAAgDgDg");
	this.shape_10.setTransform(188.5,93.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AAdBHIgHAAIgEAAIgDgBIgCgCIgcgxIAAAxIgBACIgDAAIgDABIgHAAIgGAAIgEgBIgCAAIAAgCIAAiGIAAgCIACgCIAEgBIAGAAIAHAAIADABIADACIABACIAABPIAagjIABgDIADgBIAEgBIAGAAIAHAAIAEABIADABIAAACIgBAEIgCADIgbAeIAfAvIACAEIAAADIAAACIgCAAIgEABIgHAAg");
	this.shape_11.setTransform(181.4,93);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AAfAzIgHAAIgEgBIgCgBIAAgCIAAgzIgBgLIgDgGQgCgDgDgCQgDgBgEAAQgEAAgFADQgFAEgFAHIAAA8IgBACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIgBgCIAAhbIABgBIACgCIADAAIAFgBIAGABIADAAIACACIAAABIAAALQAIgIAIgEQAGgFAJAAQAJAAAHAEQAGADAEAFQAEAFACAHQACAHAAAKIAAA4IgBACIgCABIgEABIgGAAg");
	this.shape_12.setTransform(170.2,95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AAABGIgFAAIgEgBIgCgBIgBgCIAAhaIABgCIACgCIAEAAIAFgBIAGABIAEAAIACACIABACIAABaIgBACIgCABIgEABIgGAAgAgLgtQgDgDAAgHQAAgIADgDQADgDAIAAQAJAAADADQADADAAAHQAAAIgDADQgDADgJAAQgIAAgDgDg");
	this.shape_13.setTransform(162,93.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AgPAzIgHAAIgEgBIgCgBIAAgCIAAhbIAAgBIACgCIAEAAIAFgBIAFABIAEAAIABACIABABIAAAMIAGgJIAGgFQACgCADgBIAGgBIADABIADAAIADABIACABIABABIAAACIAAADIAAAGIAAAGIAAAEIgBABIgCABIgCAAIgCgBIgDgBIgEAAIgEABIgEACIgFAFIgEAIIAAA4IgBACIgCABIgEABIgGAAg");
	this.shape_14.setTransform(156.2,95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AguBCQgDAAgDgCQgCgCAAgEIAAhzQAAgEACgCQADgCADAAIAiAAQAQAAANAEQAMAEAJAIQAIAIAFAMQAEAMAAAQQAAARgFANQgEANgJAIQgJAJgNADQgNAEgRAAgAgbAtIAOAAQALAAAGgDQAIgDAFgGQAGgFACgJQACgJABgKQgBgKgCgIQgCgIgFgGQgFgGgIgDQgGgDgNAAIgNAAg");
	this.shape_15.setTransform(145.7,93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("Ab1PRIAAjxIDSAAIAADxgAb6nwIAAjvIDSAAIAADvgA/LrfIAAjxIDSAAIAADxg");
	this.shape_16.setTransform(199.2,97.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("A72rgIRbIdAb3LhI3wloAb3nwI3wEt");
	this.shape_17.setTransform(195.8,97.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,398.5,195.3);


(lib.btn_A803 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ApsJyIAAzjITZAAIAATjg");
	this.shape.setTransform(62.1,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgeBfQgMgDgHgGQgJgHgEgJQgEgJAAgMQAAgIACgHQADgHAFgGQAEgGAHgGQAHgFAJgEIgMgJQgHgFgEgFQgEgGgCgHQgCgGAAgIQAAgMAEgJQAEgJAHgHQAJgHAMgEQALgDAPAAQAQAAALADQALAEAIAGQAGAGAEAJQAEAIgBAKQAAAHgCAHQgCAGgEAGQgEAGgGAFQgGAFgIAFQAJAEAHAFQAHAFAFAGQAFAGADAHQACAHAAAIQAAANgFAKQgEAKgIAHQgKAHgNAEQgMADgQAAQgQAAgNgDgAgNAUIgIAIQgEAEgCAFQgBAEAAAFQAAAMAHAGQAIAGANAAQAOAAAIgGQAHgHAAgKQAAgGgCgEQgCgFgDgEQgFgEgFgDIgNgIIgMAHgAgSg/QgFAFAAAKQAAAFABAEQABAEADADIAJAHIALAHQALgGAGgHQAFgHAAgJQABgFgCgEQgBgEgEgDQgDgDgEgCQgFgBgGAAQgMAAgGAGg");
	this.shape_1.setTransform(92.2,73);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgIBfIgGgBIgDgCIgBgDIAAiyIABgCIADgCIAGgBIAIgBIAJABIAGABIADACIABACIAACyIgBADIgDACIgGABIgJABIgIgBg");
	this.shape_2.setTransform(73.8,73);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgJBfIgFgBIgEgCIgBgDIAAiYIgvAAIgCgBIgDgCIgBgFIAAgHIAAgIIABgFIADgCIACgBICFAAIACABIACACIABAFIAAAIIAAAHIgBAFIgCACIgCABIgwAAIAACYIgBADIgDACIgGABIgJAAIgJAAg");
	this.shape_3.setTransform(62.4,73.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQADgDAGAAIAtAAIAMAAIAOACQAJACAIAFQAJAEAHAHQAGAHADAJQADAKAAALQAAAQgFANQgFALgJAIQgKAJgOAEQgOAEgRAAIgQAAIAAA9IgBADIgDACIgGABIgJAAIgKAAgAgZAAIARAAQAIAAAHgDQAFgCAFgFQADgEACgGQADgHAAgHQAAgKgEgGQgDgHgGgDQgFgDgFgBIgLgBIgQAAg");
	this.shape_4.setTransform(47.7,73.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQAEgDAFAAIAtAAIAMAAIAOACQAJACAJAFQAIAEAHAHQAFAHAEAJQADAKAAALQAAAQgFANQgFALgJAIQgKAJgOAEQgNAEgSAAIgQAAIAAA9IgBADIgEACIgFABIgJAAIgKAAgAgZAAIARAAQAIAAAGgDQAGgCAFgFQADgEACgGQACgHAAgHQAAgKgDgGQgEgHgFgDQgEgDgGgBIgLgBIgQAAg");
	this.shape_5.setTransform(31.7,73.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgbBhIgPgEIgLgEIgFgDIgCgDIgBgDIgBgFIAAgIIABgJQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIAGACIAJAEIANAEQAHACAKAAQAIAAAFgCQAGgBAEgEQAFgDACgFQACgFAAgGQAAgHgDgFQgCgFgFgEQgFgEgHgCQgIgCgKAAIgRAAIgDAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIgBgEIgBgGIABgHIABgFIACgCIADAAIARAAQAIAAAHgCQAGgCAEgEQAEgDADgGQACgFAAgGIgCgJQgBgFgDgDQgEgDgEgCQgFgCgGAAQgIAAgHADIgMAFIgJAFIgFACIgCAAIgCgCIgBgFIAAgHIAAgGIABgEIABgDIACgCIAGgEQAEgDAHgDQAHgDAJgBQAJgCALAAQANAAAKADQALADAHAGQAHAGAEAJQAEAJAAALQAAAJgCAHQgDAIgEAGQgEAGgGAEQgHAEgIACIAAAAQAKABAIADQAIAEAFAGQAGAGACAHQADAIAAAIQAAAOgFALQgFALgKAIQgKAHgNAEQgOAEgPAAQgJAAgJgBg");
	this.shape_6.setTransform(85.7,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AghBcQgNgHgHgNQgIgMgDgSQgDgSAAgXQAAgWAEgSQAEgTAIgNQAIgMANgHQAOgHASAAQATAAANAHQANAGAHANQAIAMADASQADASAAAXQAAAWgEASQgEATgIAMQgIANgNAHQgOAHgSAAQgTAAgNgGgAgNg+QgGAEgDAIQgDAIgCANQgBAMAAARQAAATACANQABAOAEAHQADAIAFADQAGAEAHAAQAFAAAFgCQAEgCADgEQAEgDACgGIADgNIACgQIABgVIgBgXIgCgSIgEgMQgCgGgEgDQgDgDgEgBQgEgCgFAAQgIAAgFAFg");
	this.shape_7.setTransform(70.6,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgeBfQgMgDgHgGQgJgHgEgJQgEgJAAgMQAAgIACgHQADgHAEgGQAFgGAHgGQAIgFAIgEIgMgJQgHgFgEgFQgEgGgCgHQgCgGAAgIQAAgMADgJQAEgJAIgHQAJgHAMgEQAMgDAOAAQAQAAALADQALAEAIAGQAGAGAEAJQAEAIgBAKQAAAHgCAHQgCAGgEAGQgEAGgGAFQgGAFgIAFQAJAEAHAFQAHAFAFAGQAFAGADAHQACAHAAAIQAAANgFAKQgEAKgJAHQgJAHgMAEQgNADgQAAQgQAAgNgDgAgNAUIgJAIQgDAEgCAFQgBAEAAAFQAAAMAHAGQAHAGAPAAQAOAAAHgGQAHgHAAgKQAAgGgCgEQgCgFgDgEQgEgEgGgDIgNgIIgMAHgAgSg/QgFAFAAAKQgBAFACAEQACAEACADIAJAHIALAHQALgGAGgHQAGgHgBgJQABgFgCgEQgCgEgCgDQgEgDgEgCQgFgBgGAAQgLAAgHAGg");
	this.shape_8.setTransform(55.4,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AA5BfIgGAAIgDgCIgCgDIgMgmIhGAAIgNAlIgBADIgDACIgGABIgLABIgKgBQgEAAgBgCQgBgCAAgDIACgIIA7inIABgEQABgBAAAAQAAAAABAAQAAgBABAAQABAAABAAIAGgBIANgBIAMABIAIABQABAAAAAAQABAAABABQAAAAABAAQAAAAABABIACAEIA6CnIACAJQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBACgFAAIgLABIgMgBgAgcAWIA1AAIgahQg");
	this.shape_9.setTransform(38.7,34.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("ApsJyIAAzjITZAAIAATjg");
	this.shape_10.setTransform(62.1,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,124.1,125.3);


(lib.btn_A802 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ApsJsIAAzYITZAAIAATYg");
	this.shape.setTransform(62.1,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AglBfIgGgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIACgEIBCiTIhPAAQgDAAgBgEQgCgEAAgJIABgHIABgFIACgDIACgBIBwAAIAEAAIADACIACAFIAAAJIAAAHIgBAGIgCAFIgCAGIg9CPIgCADIgEACIgGABIgKAAIgNAAg");
	this.shape_1.setTransform(90.1,79);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgIBfIgGgBIgEgCIgBgDIAAiyIABgCIAEgCIAGgBIAIgBIAJABIAGABIADACIABACIAACyIgBADIgDACIgGABIgJABIgIgBg");
	this.shape_2.setTransform(71.7,79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgJBfIgFgBIgEgCIgBgDIAAiYIgvAAIgCgBIgCgCIgCgFIAAgHIAAgIIACgFIACgCIACgBICFAAIACABIACACIABAFIABAIIgBAHIgBAFIgCACIgCABIgwAAIAACYIgBADIgDACIgGABIgJAAIgJAAg");
	this.shape_3.setTransform(60.3,79);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQADgDAGAAIAtAAIAMAAIAOACQAJACAIAFQAJAEAGAHQAGAHADAJQAEAKAAALQAAAQgFANQgFALgKAIQgJAJgOAEQgOAEgSAAIgQAAIAAA9IAAADIgDACIgHABIgJAAIgJAAgAgaAAIASAAQAIAAAHgDQAFgCAEgFQAFgEACgGQACgHAAgHQgBgKgDgGQgDgHgFgDQgGgDgFgBIgLgBIgRAAg");
	this.shape_4.setTransform(45.6,79);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQADgDAGAAIAtAAIAMAAIAOACQAJACAIAFQAJAEAHAHQAGAHADAJQADAKAAALQAAAQgFANQgFALgJAIQgKAJgOAEQgOAEgRAAIgQAAIAAA9IgBADIgDACIgGABIgJAAIgKAAgAgZAAIARAAQAIAAAHgDQAFgCAFgFQADgEACgGQADgHAAgHQAAgKgEgGQgDgHgGgDQgFgDgFgBIgLgBIgQAAg");
	this.shape_5.setTransform(29.7,79);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgzBhIgFgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgCgBgEIAAgIIAAgIIABgGIAEgFIAEgGIAhgjIAQgTQAFgHADgHQADgHACgGIABgLQAAgFgCgEQgBgEgDgEQgDgDgDgCQgFgCgGAAQgJAAgGADQgHACgFACIgIAGIgGACIgCgBIgCgDIgBgFIAAgJIAAgGIABgDIABgDIADgEIAHgEQAEgDAHgDIAQgDQAJgCAJgBQAOABALAEQALADAIAHQAHAGAEAKQADAIAAALQAAAJgCAJQgCAJgFAKQgGAKgKANQgKAMgQARIgWAWIBKAAIADABIACADIABAFIAAAHIAAAHIgBAFIgCADIgDABg");
	this.shape_6.setTransform(83.8,40.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AghBcQgNgHgHgNQgIgMgDgSQgDgSAAgXQAAgWAEgSQAEgTAIgNQAIgMANgHQAOgHASAAQATAAANAHQANAGAHANQAIAMADASQADASAAAXQAAAWgEASQgEATgIAMQgIANgNAHQgOAHgSAAQgTAAgNgGgAgNg+QgGAEgDAIQgDAIgCANQgBAMAAARQAAATACANQABAOAEAHQADAIAFADQAGAEAHAAQAFAAAFgCQAEgCADgEQAEgDACgGIADgNIACgQIABgVIgBgXIgCgSIgEgMQgCgGgEgDQgDgDgEgBQgEgCgFAAQgIAAgFAFg");
	this.shape_7.setTransform(68.5,40.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgeBfQgLgDgJgGQgIgHgEgJQgEgJAAgMQAAgIADgHQACgHAEgGQAGgGAHgGQAHgFAIgEIgNgJQgGgFgEgFQgEgGgDgHQgBgGAAgIQAAgMADgJQAFgJAIgHQAHgHANgEQAMgDAOAAQAQAAALADQALAEAHAGQAHAGAEAJQAEAIAAAKQgBAHgCAHQgCAGgEAGQgEAGgGAFQgGAFgIAFQAJAEAHAFQAHAFAFAGQAFAGADAHQACAHAAAIQAAANgEAKQgFAKgJAHQgIAHgNAEQgNADgQAAQgQAAgNgDgAgNAUIgJAIQgDAEgBAFQgCAEAAAFQAAAMAHAGQAIAGAOAAQANAAAIgGQAHgHAAgKQAAgGgCgEQgCgFgEgEQgEgEgFgDIgNgIIgMAHgAgRg/QgHAFAAAKQABAFABAEQABAEAEADIAIAHIALAHQALgGAGgHQAGgHgBgJQAAgFgBgEQgBgEgDgDQgDgDgFgCQgFgBgGAAQgMAAgFAGg");
	this.shape_8.setTransform(53.3,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AA6BfIgHAAIgDgCIgCgDIgMgmIhHAAIgLAlIgCADIgDACIgGABIgLABIgKgBQgEAAgBgCQgBgCAAgDIACgIIA6inIACgEQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAHgBIAMgBIAMABIAIABQABAAAAAAQABAAABABQAAAAABAAQAAAAABABIABAEIA7CnIACAJQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgCACgEAAIgLABIgLgBgAgcAWIA1AAIgahQg");
	this.shape_9.setTransform(36.6,40.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("ApsJtIAAzYITZAAIAATYg");
	this.shape_10.setTransform(62.1,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,124.1,124.1);


(lib.btn_A801 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ApsJyIAAzjITZAAIAATjg");
	this.shape.setTransform(62.1,56.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgYBfQgKgDgHgFQgHgGgEgIQgFgIgDgKQgCgKgBgMIgBgaIABgWQABgMADgMQADgLAGgLQAFgLAKgIQAIgIANgEQANgFARAAIALABIAKABIAJADIAEACIACACIABADIAAADIAAAFIAAAIIgBAEIgBADIgDAAIgEAAIgHgDIgJgCIgNgBQgMAAgHAFQgIAEgFAIQgFAHgDAKQgCAKAAALIAHgEIAJgDIALgDIALgBQAPAAAKAEQAKAEAHAIQAGAHADAJQADALAAAMQAAAPgEAMQgFAMgIAJQgJAJgMAFQgMAFgQAAQgNAAgKgDgAgFAFIgHACIgIAEIgGADQAAAQABALQACAKAEAGQADAGAFADQAFADAGAAQAHAAAFgDQAFgCAEgFIAFgLQABgGAAgHIgBgNQgBgGgDgDQgDgEgFgCQgFgCgHAAIgHAAg");
	this.shape_1.setTransform(93.3,81);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgIBfIgGgBIgEgCIgBgDIAAiyIABgCIAEgCIAGgBIAIgBIAKABIAFABIAEACIABACIAACyIgBADIgEACIgFABIgKABIgIgBg");
	this.shape_2.setTransform(74.7,81);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgIBfIgHgBIgCgCIgBgDIAAiYIgwAAIgDgBIgBgCIgBgFIAAgHIAAgIIABgFIABgCIADgBICEAAIADABIACACIABAFIABAIIgBAHIgBAFIgCACIgDABIgvAAIAACYIgBADIgDACIgGABIgJAAIgIAAg");
	this.shape_3.setTransform(63.3,81);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQADgDAGAAIAtAAIAMAAIAPACQAIACAJAFQAIAEAGAHQAHAHACAJQAEAKAAALQAAAQgFANQgFALgJAIQgKAJgOAEQgNAEgTAAIgPAAIAAA9IgBADIgEACIgGABIgJAAIgJAAgAgZAAIARAAQAIAAAGgDQAHgCADgFQAFgEABgGQACgHAAgHQABgKgEgGQgEgHgEgDQgFgDgGgBIgLgBIgQAAg");
	this.shape_4.setTransform(48.6,81);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("Ag2BfIgGgBIgDgCIgBgDIAAiqQAAgGAEgEQAEgDAFAAIAtAAIAMAAIAPACQAIACAIAFQAJAEAGAHQAHAHACAJQAEAKAAALQAAAQgFANQgFALgKAIQgJAJgOAEQgNAEgTAAIgQAAIAAA9IAAADIgDACIgHABIgJAAIgJAAgAgaAAIASAAQAIAAAGgDQAGgCAEgFQAEgEADgGQABgHAAgHQAAgKgDgGQgDgHgFgDQgGgDgFgBIgLgBIgRAAg");
	this.shape_5.setTransform(32.7,81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgzBfIgDAAIgBgCIgBgFIgBgHIABgHIAAgFIACgCIADgBIAjAAIAAh7IgfASIgFABIgDgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgIIAAgGIABgEIABgDIADgCIApgbIABgBIADAAIAFAAIAHAAIAJAAIAEAAIADACIABACIAACcIAeAAIADABIACACIABAFIABAHIgBAHIgBAFIgCACIgDAAg");
	this.shape_6.setTransform(87.1,42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AghBcQgNgHgHgNQgIgMgDgSQgDgSAAgXQAAgWAEgSQAEgTAIgNQAIgMANgHQAOgHASAAQATAAANAHQANAGAHANQAIAMADASQADASAAAXQAAAWgEASQgEATgIAMQgIANgNAHQgOAHgSAAQgTAAgNgGgAgNg+QgGAEgDAIQgDAIgCANQgBAMAAARQAAATACANQABAOAEAHQADAIAFADQAGAEAHAAQAFAAAFgCQAEgCADgEQAEgDACgGIADgNIACgQIABgVIgBgXIgCgSIgEgMQgCgGgEgDQgDgDgEgBQgEgCgFAAQgIAAgFAFg");
	this.shape_7.setTransform(71.5,42.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgdBfQgMgDgJgGQgIgHgEgJQgEgJAAgMQAAgIADgHQACgHAFgGQAEgGAIgGQAHgFAJgEIgOgJQgGgFgEgFQgEgGgDgHQgCgGAAgIQAAgMAFgJQADgJAJgHQAIgHALgEQANgDAOAAQAQAAALADQAMAEAGAGQAIAGADAJQADAIABAKQAAAHgCAHQgDAGgEAGQgEAGgGAFQgGAFgIAFQAJAEAHAFQAHAFAFAGQAFAGACAHQADAHAAAIQAAANgFAKQgEAKgIAHQgKAHgNAEQgMADgQAAQgQAAgMgDgAgNAUIgIAIQgEAEgCAFQgBAEAAAFQAAAMAIAGQAGAGAOAAQAOAAAIgGQAHgHAAgKQAAgGgCgEQgCgFgEgEQgDgEgHgDIgMgIIgMAHgAgRg/QgGAFgBAKQAAAFACAEQACAEADADIAIAHIALAHQALgGAGgHQAFgHABgJQgBgFgBgEQgCgEgDgDQgCgDgGgCQgEgBgGAAQgMAAgFAGg");
	this.shape_8.setTransform(56.3,42.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AA6BfIgHAAIgDgCIgBgDIgOgmIhGAAIgMAlIgBADIgDACIgGABIgKABIgLgBQgDAAgCgCQgCgCABgDIACgIIA7inIACgEQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAIAHgBIAMgBIANABIAIABQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABIACAEIA7CnIACAJQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgCACgEAAIgLABIgLgBgAgcAWIA0AAIgZhQg");
	this.shape_9.setTransform(39.6,42.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("ApsJyIAAzjITZAAIAATjg");
	this.shape_10.setTransform(62.1,57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.9,124.1,125.3);


(lib.btn_A800 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ApsJxIAAzhITZAAIAAThg");
	this.shape.setTransform(62.1,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgBBFIgHgEIgHgEIgHgHIAAAJIAAACIgCABIgEACIgEAAIgFAAIgEgCIgBgBIgBgCIAAh+IABgCIACgCIADgBIAGAAIAGAAIAEABIACACIABACIAAAvIAGgFIAHgEIAGgCIAHgBQAKAAAHAEQAGAEAFAGQAEAHACAHQACAKAAAJQAAAMgDAJQgCAJgFAGQgFAHgHADQgHAEgJAAIgHAAgAgDgHIgFADIgFAEIgFAGIAAAdQAFAGAFAEQAEADAEAAQAFAAAEgCIAFgHIADgJIABgKIgBgKQAAgFgCgEQgCgDgEgDQgDgCgFAAIgEAAg");
	this.shape_1.setTransform(113.3,72.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgUAwQgGgDgEgDQgEgDgCgGQgDgFAAgHQAAgHADgHQADgFAGgDQAGgDAJgCQAJgCAKAAIAJAAIAAgFIgBgHIgDgGIgFgDIgHAAQgGgBgFACIgIADIgHADIgEACIgBgBIgCgCIgBgEIAAgDIAAgFIACgDIAFgDIAIgEIAKgCIAKgBQALAAAHACQAHACAFAEQAEAFADAGQACAHAAAJIAAA5IgBACIgDACIgGAAIgHAAIgDgCIgBgCIAAgHQgFAGgHADQgHADgHAAQgHAAgGgBgAgDAHIgHADIgEAFIgBAFQAAAFAEADQADAEAGAAQAEAAAFgDQAEgCAFgFIAAgQIgKAAIgJABg");
	this.shape_2.setTransform(102.5,74.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgaA/QgEAAgCgBQgBgDAAgEIAAhyIAAgBIACgBIAEgBIAGAAIAGAAIAEABIADABIAAABIAABmIAnAAIABAAIABACIACADIAAAFIAAAEIgCAEIgBACIgBAAg");
	this.shape_3.setTransform(94.3,72.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgPAwIgGAAIgEgBIgBgBIgBgCIAAhWIABgBIABgCIADAAIAFgBIAGABIADAAIABACIABABIAAALIAGgIIAFgFQACgCADAAIAGgBIACAAIADAAIAEABIABABIABABIAAACIAAADIABAFIgBAGIAAAEIgBABIgBABIgDAAIgCgBIgCgBIgDAAIgFABIgEACIgFAFIgDAHIAAA1IgBACIgCABIgEABIgGAAg");
	this.shape_4.setTransform(81.9,74);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgQAuQgJgCgFgHQgGgGgDgIQgDgKAAgMQAAgLADgJQADgJAGgHQAGgGAIgEQAIgDAKAAQALAAAHADQAIADAFAGQAFAGACAIQADAHAAAKIAAADQAAAEgCACQgCACgDAAIg1AAQAAAGABAEQACAFADADQACAEAFABQAEACAGAAIAMgBIAIgCIAFgDIAFgBIABABIABABIAAADIAAAEIAAADIAAADIAAACIgBABIgEACIgHACIgKADIgMAAQgLAAgJgDgAgGgdIgGAFIgEAHIgBAIIAkAAQAAgKgEgGQgEgFgKAAQgDgBgEACg");
	this.shape_5.setTransform(72.8,74.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AAAA6QgFgCgEgEQgDgEgCgGQgBgFAAgIIAAgsIgLAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgIIAAgFIABgDIABgCIACAAIALAAIAAgTIAAgCIACgBIAEgBIAGgBIAFABIADABIACABIABACIAAATIATAAIACAAIABACIABADIAAAFIgBAIQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgTAAIAAAoQAAAHADAEQABADAHAAIADAAIACgBIACgBIACAAIACAAIAAACIABACIAAAFIAAAGIgCAEIgDABIgEACIgFAAIgFABQgIAAgEgCg");
	this.shape_6.setTransform(64.4,73);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgYAuQgGgDgDgFQgEgGgCgGQgBgHgBgKIAAg0IABgCIACgBIAEgBIAGAAIAFAAIAFABIABABIABACIAAAwIABAKQAAAEACADQACACADACQADABAEAAQADAAAFgDIAKgKIAAg5IABgCIABgBIAEgBIAGAAIAGAAIAEABIACABIAAACIAABWIAAACIgCABIgDABIgFAAIgFAAIgEgBIgBgBIgBgCIAAgKQgHAIgHAEQgHADgHAAQgKAAgGgCg");
	this.shape_7.setTransform(55.7,74.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AglBBIgDAAIgCgCIgBgBIAAh5IABgCIABgBIAEgBIAFAAIAEAAIAEABIABABIABACIAAAKIAHgHIAIgFIAHgDIAIgBQAKAAAHAEQAGAEAFAGQAEAHACAJQACAIAAAKQAAAMgDAIQgCAJgFAHQgFAGgHAEQgHADgJAAIgGAAIgGgCIgGgEIgGgGIAAAqIgBABIgCACIgEAAIgGABIgGgBgAgDgrIgFACIgFAFIgFAGIAAAdQAFAFAFAEQAEAEAEAAQAFAAADgDQAEgCACgEQACgDABgFIABgKIgBgLQAAgFgCgEQgCgEgEgCQgDgDgFAAIgEABg");
	this.shape_8.setTransform(45.2,75.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AA5AwIgGAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgFAAIgEgBIgCgBIAAgCIAAgyIgBgIIgDgGQgBgDgDgBQgDgCgDAAQgFAAgEAEQgFADgFAHIAAA4IAAACIgCABIgEABIgGAAIgGAAIgEgBIgCgBIAAgCIAAhWIAAgBIACgCIADAAIAFgBIAFABIAEAAIABACIABABIAAAKQAHgHAHgEQAHgEAIAAIAKABIAHADIAFAFIAEAHIAIgIIAHgEIAIgDIAHgBQAJAAAGADQAGADADAFQAEAFACAGQABAHAAAIIAAA2IAAACIgCABIgEABIgGAAg");
	this.shape_9.setTransform(31.5,74);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgUAuQgJgDgGgHQgFgGgDgIQgDgJAAgMQAAgKADgKQADgJAGgGQAGgHAJgEQAJgDALAAQAMAAAIADQAJAEAGAFQAFAHADAJQADAJAAALQAAALgDAIQgDAKgGAGQgGAHgJADQgJAEgLAAQgMAAgIgDgAgIgbQgFADgCAEQgDADgBAGIgBALIABAMQABAFACAEQADAEAEACQAEACAFABQAFgBAEgCQAFgCACgDQADgEABgFIABgNIgBgKQgBgGgCgEQgDgEgEgDQgEgCgGAAQgEAAgEACg");
	this.shape_10.setTransform(17.9,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AgNA9QgKgEgHgIQgIgIgEgMQgEgLAAgQQAAgPAFgNQAEgMAIgJQAHgIALgFQALgEAMAAIAKABIAJACIAIADIAEAEIACACIABACIAAADIABAFIgBAFIAAADIgCACIgBAAIgEgBIgGgEIgIgEQgFgCgHAAQgHAAgGAEQgFADgEAFQgFAGgCAIQgCAIAAAJQAAALADAJQACAIAEAFQAEAFAFADQAGADAIAAQAHAAAFgCIAIgEIAGgDIAEgCIABABIABABIABAEIAAAFIAAAEIgBADIAAACIgCACIgEADIgIAEIgKACIgMABQgMAAgLgEg");
	this.shape_11.setTransform(7.4,72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AgWA9QgIgEgFgJQgFgIgCgMQgCgMAAgPQAAgOACgNQADgMAFgJQAGgIAJgFQAJgEALAAQANAAAJAEQAIAFAFAIQAFAIACAMQACAMAAAPQAAAPgCAMQgDAMgFAJQgGAIgJAFQgIAEgMAAQgNAAgJgEgAgIgpQgEADgCAFQgDAGAAAIIgBATIABAWQABAIACAGQACAFAEACQAEACAEAAQAEAAACgBQADgBADgDIADgGIADgJIABgLIAAgNIAAgPIgCgMIgCgJIgEgFIgFgDIgGgBQgFAAgDADg");
	this.shape_12.setTransform(76.7,46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AgWA9QgIgEgFgJQgFgIgCgMQgCgMAAgPQAAgOACgNQADgMAFgJQAGgIAJgFQAJgEALAAQANAAAJAEQAIAFAFAIQAFAIACAMQACAMAAAPQAAAPgCAMQgDAMgFAJQgGAIgJAFQgIAEgMAAQgNAAgJgEgAgIgpQgEADgCAFQgDAGAAAIIgBATIABAWQABAIACAGQACAFAEACQAEACAEAAQAEAAACgBQADgBADgDIADgGIADgJIABgLIAAgNIAAgPIgCgMIgCgJIgEgFIgFgDIgGgBQgFAAgDADg");
	this.shape_13.setTransform(66.5,46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AgTA/QgIgCgGgEQgFgEgDgGQgDgGAAgIQAAgGACgEQABgFAEgEQADgEAFgEIAKgGIgJgFIgGgHQgDgEgCgFQgBgEAAgFQAAgIADgGQACgGAGgFQAFgEAIgDQAIgCAJAAQALAAAHACQAIACAFAEQAEAEADAGQACAGAAAHIgCAJIgEAIIgHAHIgJAHIALAFIAIAIQADAEACAEQACAFAAAFQAAAJgDAHQgDAGgGAFQgGAFgJACQgIACgKAAQgLAAgIgCgAgIAOIgGAFIgDAGIgBAGQAAAIAEAEQAFAEAJAAQAKAAAEgFQAFgEAAgHIgBgGIgEgGIgGgFIgIgFIgIAFgAgLgqQgEAEAAAHIABAFIADAFIAFAFIAHAFQAIgFADgEQAEgFAAgGIgBgGIgDgFIgFgDIgHgBQgHAAgEAEg");
	this.shape_14.setTransform(56.4,46);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AAuBAIgIAAIgEgBIgCgBIgBgCIgJgaIguAAIgIAZIgBACIgCACIgEABIgHAAIgHAAIgEgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgGIAnhvIACgCIACgCIAFgBIAIAAIAIAAIAFABIADACIABADIAoBvIABAFIgBADIgEACIgHAAgAgSAPIAiAAIgQg1IgBAAg");
	this.shape_15.setTransform(45.3,46);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC00").s().p("ApsJsIAAzXITZAAIAATXg");
	this.shape_16.setTransform(62.1,62.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,125);


(lib.Scene_1_Toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Toilet
	this.btn_toilet = new lib.btn_toilet();
	this.btn_toilet.name = "btn_toilet";
	this.btn_toilet.parent = this;
	this.btn_toilet.setTransform(344.5,0);
	new cjs.ButtonHelper(this.btn_toilet, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_toilet).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Toilet, null, null);


(lib.Scene_1_Tangga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tangga
	this.btn_tangga = new lib.btn_tangga();
	this.btn_tangga.name = "btn_tangga";
	this.btn_tangga.parent = this;
	this.btn_tangga.setTransform(359,106.5,1,1.052,0,0,0,16.1,17.7);
	new cjs.ButtonHelper(this.btn_tangga, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_tangga).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Tangga, null, null);


(lib.Scene_1_script = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// script
	this.btn_pic = new lib.Symbol5();
	this.btn_pic.name = "btn_pic";
	this.btn_pic.parent = this;
	this.btn_pic.setTransform(120.9,619.6,1.024,1,0,0,0,62.5,53.6);
	new cjs.ButtonHelper(this.btn_pic, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_pic).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_script, null, null);


(lib.Scene_1_Musholla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Musholla
	this.btn_mushola = new lib.btn_mushola();
	this.btn_mushola.name = "btn_mushola";
	this.btn_mushola.parent = this;
	this.btn_mushola.setTransform(297.4,62.5,0.999,1,0,0,0,46.5,62.5);
	new cjs.ButtonHelper(this.btn_mushola, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_mushola).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Musholla, null, null);


(lib.Scene_1_Lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lift
	this.btn_lift = new lib.btn_lift();
	this.btn_lift.name = "btn_lift";
	this.btn_lift.parent = this;
	this.btn_lift.setTransform(470.2,74.5,1,1,0,0,0,55.2,15.2);
	new cjs.ButtonHelper(this.btn_lift, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_lift).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Lift, null, null);


(lib.Scene_1_Library = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Library
	this.btn_library = new lib.btn_library();
	this.btn_library.name = "btn_library";
	this.btn_library.parent = this;
	this.btn_library.setTransform(127.1,93,1,1,0,0,0,124,93);
	new cjs.ButtonHelper(this.btn_library, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_library).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Library, null, null);


(lib.Scene_1_Exit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Exit2
	this.btn_exit2 = new lib.btn_emergencyExit2();
	this.btn_exit2.name = "btn_exit2";
	this.btn_exit2.parent = this;
	this.btn_exit2.setTransform(15.1,111.9,1,1,0,0,0,27.9,93);
	new cjs.ButtonHelper(this.btn_exit2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_exit2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Exit2, null, null);


(lib.Scene_1_Exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Exit
	this.btn_exit = new lib.btn_exit1();
	this.btn_exit.name = "btn_exit";
	this.btn_exit.parent = this;
	this.btn_exit.setTransform(639.8,525.2,1,0.946,0,0,0,62,25.2);
	new cjs.ButtonHelper(this.btn_exit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_exit).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Exit, null, null);


(lib.Scene_1_border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.instance = new lib.btn_tengah();
	this.instance.parent = this;
	this.instance.setTransform(259.8,368.4,1,1,0,0,0,262.4,181.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_border, null, null);


(lib.Scene_1_Aqua1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Aqua1
	this.btn_drinkingStation = new lib.btn_aqua();
	this.btn_drinkingStation.name = "btn_drinkingStation";
	this.btn_drinkingStation.parent = this;
	this.btn_drinkingStation.setTransform(346.3,259.7,1,1,0,0,0,199.3,97.7);
	new cjs.ButtonHelper(this.btn_drinkingStation, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_drinkingStation).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Aqua1, null, null);


(lib.Scene_1_A803 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A803
	this.btn_a803 = new lib.btn_A803();
	this.btn_a803.name = "btn_a803";
	this.btn_a803.parent = this;
	this.btn_a803.setTransform(639.9,446.2,1,1,0,0,0,62.1,62.6);
	new cjs.ButtonHelper(this.btn_a803, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_a803).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A803, null, null);


(lib.Scene_1_A802 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A802
	this.btn_a802 = new lib.btn_A802();
	this.btn_a802.name = "btn_a802";
	this.btn_a802.parent = this;
	this.btn_a802.setTransform(639.9,313.1,1,0.999,0,0,0,62.1,62.6);
	new cjs.ButtonHelper(this.btn_a802, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_a802).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A802, null, null);


(lib.Scene_1_A801 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A801
	this.btn_a801 = new lib.btn_A801();
	this.btn_a801.name = "btn_a801";
	this.btn_a801.parent = this;
	this.btn_a801.setTransform(639.9,191.2,1,0.998,0,0,0,62.1,62.7);
	new cjs.ButtonHelper(this.btn_a801, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_a801).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A801, null, null);


(lib.Scene_1_A800 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// A800
	this.btn_computerLab = new lib.btn_A800();
	this.btn_computerLab.name = "btn_computerLab";
	this.btn_computerLab.parent = this;
	this.btn_computerLab.setTransform(639.9,67.1,1,0.975,0,0,0,62.1,69);
	new cjs.ButtonHelper(this.btn_computerLab, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_computerLab).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_A800, null, null);


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
	this.text.setTransform(58.2,7);

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
	this.btn_staffOnly = new lib.btn_stafffff();
	this.btn_staffOnly.name = "btn_staffOnly";
	this.btn_staffOnly.parent = this;
	this.btn_staffOnly.setTransform(471.9,29.6,1,1,0,0,0,56.6,29.6);
	new cjs.ButtonHelper(this.btn_staffOnly, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_staffOnly).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Staff_only, null, null);


// stage content:
(lib.lt8 = function(mode,startPosition,loop) {
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
		this.btn_tangga = this.Tangga.btn_tangga;
		this.btn_drinkingStation = this.Aqua1.btn_drinkingStation;
		this.btn_exit2 = this.Exit2.btn_exit2;
		this.btn_toilet = this.Toilet.btn_toilet;
		this.btn_mushola = this.Musholla.btn_mushola;
		this.btn_library = this.Library.btn_library;
		this.btn_lift = this.Lift.btn_lift;
		this.btn_staffOnly = this.Staff_only.btn_staffOnly;
		this.btn_exit = this.Exit.btn_exit;
		this.btn_a803 = this.A803.btn_a803;
		this.btn_a802 = this.A802.btn_a802;
		this.btn_a801 = this.A801.btn_a801;
		this.btn_computerLab = this.A800.btn_computerLab;
		this.btn_pic = this.script.btn_pic;
		this.TEXT1 = this.Text.TEXT1;
		this.TEXT2 = this.Text.TEXT2;
		this.btn_a801.addEventListener("click",a801.bind(this));
		this.btn_a802.addEventListener("click",a802.bind(this));
		this.btn_a803.addEventListener("click",a803.bind(this));
		this.btn_library.addEventListener("click",library.bind(this));
		this.btn_mushola.addEventListener("click",mushola.bind(this));
		this.btn_computerLab.addEventListener("click",lab.bind(this));
		this.btn_exit.addEventListener("click",exit.bind(this));
		this.btn_exit2.addEventListener("click",exit.bind(this));
		this.btn_staffOnly.addEventListener("click",staffOnly.bind(this));
		this.btn_lift.addEventListener("click",lift.bind(this));
		this.btn_toilet.addEventListener("click",toilet.bind(this));
		this.btn_tangga.addEventListener("click",tangga.bind(this));
		this.btn_drinkingStation.addEventListener("click",drinkingStation.bind(this));
		this.btn_pic.visible=false;
		this.TEXT1.visible=false;
		this.TEXT2.visible=false;
		function a801(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text='PPTI6 - A801';
			this.TEXT2.text='PPTI 6 menempati ruangan A801, diberi nama AVENGERS yang berarti "Advanced and Enthusiastic Generation Six" oleh para mahasiswanya. Berisi 43 mahasiswa, 10 mahasiswi dan 33 mahasiswa';
			console.log(this.btn_pic);
			this.btn_pic.instance.image.src="../../assets/mapping/ppti6.png";
			
		}
		
		function a802(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text='PPTI7 - A802';
			this.TEXT2.text='PPTI 7 menempati ruangan A802, diberi nama ALLEGIAN7 yang berarti "Altruistic Legends Being Allied in 7" oleh para mahasiswanya. Berisi 35 mahasiswa, 11 mahasiswi dan 24 mahasiswa';
			this.btn_pic.instance.image.src="../../assets/mapping/ppti7.png";
		}
		
		function a803(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text='PPTI8 - A803';
			this.TEXT2.text='PPTI 8 menempati ruangan A803, diberi nama ALM8TY (almighty) yang berarti "A Lustrous and Marvelous EIGHT Community" oleh para mahasiswanya. Berisi 35 mahasiswa, 12 mahasiswi dan 23 mahasiswa';
			this.btn_pic.instance.image.src="../../assets/mapping/ppti8.png";
		}
		
		function library(){
			this.btn_pic.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.visible=true;
			this.TEXT1.text="Trainer Lounge and Library";
			this.TEXT2.text="Trainer Lounge adalah tempat dosen PPA/PPTI untuk mengistirahatkan diri. Terdapat Library di dalam ruangan ini yang merupakan perpustakaan tempat karyawan, dosen, maupun mahasiwa PPA/PPTI membaca dan meminjam buku.";
			this.btn_pic.instance.image.src="../../assets/mapping/library.png";
		}
		
		function mushola(){
			this.TEXT1.text="Mushola";
			this.TEXT2.text="Musholla diperuntukan untuk memudahkan para muslim dalam gedung BCA Learning Institute untuk beribadah.";	
			this.btn_pic.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/mushola.png";
		}
		
		function lab(){
			this.btn_pic.visible=true;
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.TEXT1.text="Computer Lab";
			this.TEXT2.text="Ruangan yang dilengkapi komputer sebanyak 45 unit. Fasilitas ini disediakan bagi peserta PPA/PPTI jika pada proses pembelajaran membutuhkan komputer.";	
			this.btn_pic.instance.image.src="../../assets/mapping/lab.png";
		}
		
		function exit(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/exit.png";
			this.TEXT1.text="Emergency Exit";
			this.TEXT2.text="Terletak di dalam Trainer Lounge dan Library, Emergency Exit 2 merupakan pintu keluar darurat apabila terjadi bencana.";
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
			this.TEXT2.text="Lift dipergunakkan untuk naik dan turun ke lantai yang diinginkan.";
		}
		
		function tangga(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/tangga.png";
			this.TEXT1.text="Tangga";
			this.TEXT2.text="Tangga pada lantai 8 dipergunakan untuk turun ke lantai 7 atau naik ke lantai 9.";
		}
		
		function drinkingStation(){
			this.TEXT1.visible=true;
			this.TEXT2.visible=true;
			this.btn_pic.visible=true;
			this.btn_pic.instance.image.src="../../assets/mapping/drinkingStation.png";
			this.TEXT1.text="Drinking Station";
			this.TEXT2.text="Karyawan, dosen, staff, maupun mahasiswa PPA/PPTI diwajibkan untuk membawa botol minum setiap hari dan mereka dapat mengisi air minum melalui dispenser air minum yang disediakan.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Tangga_obj_
	this.Tangga = new lib.Scene_1_Tangga();
	this.Tangga.name = "Tangga";
	this.Tangga.parent = this;
	this.Tangga.setTransform(358.3,106.5,1,1,0,0,0,358.3,106.5);
	this.Tangga.depth = 0;
	this.Tangga.isAttachedToCamera = 0
	this.Tangga.isAttachedToMask = 0
	this.Tangga.layerDepth = 0
	this.Tangga.layerIndex = 0
	this.Tangga.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Tangga).wait(1));

	// Aqua1_obj_
	this.Aqua1 = new lib.Scene_1_Aqua1();
	this.Aqua1.name = "Aqua1";
	this.Aqua1.parent = this;
	this.Aqua1.setTransform(346.2,259.6,1,1,0,0,0,346.2,259.6);
	this.Aqua1.depth = 0;
	this.Aqua1.isAttachedToCamera = 0
	this.Aqua1.isAttachedToMask = 0
	this.Aqua1.layerDepth = 0
	this.Aqua1.layerIndex = 1
	this.Aqua1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Aqua1).wait(1));

	// border_obj_
	this.border = new lib.Scene_1_border();
	this.border.name = "border";
	this.border.parent = this;
	this.border.setTransform(259.8,369.1,1,1,0,0,0,259.8,369.1);
	this.border.depth = 0;
	this.border.isAttachedToCamera = 0
	this.border.isAttachedToMask = 0
	this.border.layerDepth = 0
	this.border.layerIndex = 2
	this.border.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.border).wait(1));

	// Exit2_obj_
	this.Exit2 = new lib.Scene_1_Exit2();
	this.Exit2.name = "Exit2";
	this.Exit2.parent = this;
	this.Exit2.setTransform(23.9,109.8,1,1,0,0,0,23.9,109.8);
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
	this.Toilet.setTransform(360.9,44.1,1,1,0,0,0,360.9,44.1);
	this.Toilet.depth = 0;
	this.Toilet.isAttachedToCamera = 0
	this.Toilet.isAttachedToMask = 0
	this.Toilet.layerDepth = 0
	this.Toilet.layerIndex = 4
	this.Toilet.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Toilet).wait(1));

	// Musholla_obj_
	this.Musholla = new lib.Scene_1_Musholla();
	this.Musholla.name = "Musholla";
	this.Musholla.parent = this;
	this.Musholla.setTransform(297.1,62.5,1,1,0,0,0,297.1,62.5);
	this.Musholla.depth = 0;
	this.Musholla.isAttachedToCamera = 0
	this.Musholla.isAttachedToMask = 0
	this.Musholla.layerDepth = 0
	this.Musholla.layerIndex = 5
	this.Musholla.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Musholla).wait(1));

	// Library_obj_
	this.Library = new lib.Scene_1_Library();
	this.Library.name = "Library";
	this.Library.parent = this;
	this.Library.setTransform(149.9,93.5,1,1,0,0,0,149.9,93.5);
	this.Library.depth = 0;
	this.Library.isAttachedToCamera = 0
	this.Library.isAttachedToMask = 0
	this.Library.layerDepth = 0
	this.Library.layerIndex = 6
	this.Library.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Library).wait(1));

	// Lift_obj_
	this.Lift = new lib.Scene_1_Lift();
	this.Lift.name = "Lift";
	this.Lift.parent = this;
	this.Lift.setTransform(469.7,74.4,1,1,0,0,0,469.7,74.4);
	this.Lift.depth = 0;
	this.Lift.isAttachedToCamera = 0
	this.Lift.isAttachedToMask = 0
	this.Lift.layerDepth = 0
	this.Lift.layerIndex = 7
	this.Lift.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Lift).wait(1));

	// Staff_only_obj_
	this.Staff_only = new lib.Scene_1_Staff_only();
	this.Staff_only.name = "Staff_only";
	this.Staff_only.parent = this;
	this.Staff_only.setTransform(471.8,29.6,1,1,0,0,0,471.8,29.6);
	this.Staff_only.depth = 0;
	this.Staff_only.isAttachedToCamera = 0
	this.Staff_only.isAttachedToMask = 0
	this.Staff_only.layerDepth = 0
	this.Staff_only.layerIndex = 8
	this.Staff_only.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Staff_only).wait(1));

	// Exit_obj_
	this.Exit = new lib.Scene_1_Exit();
	this.Exit.name = "Exit";
	this.Exit.parent = this;
	this.Exit.setTransform(639.8,525.9,1,1,0,0,0,639.8,525.9);
	this.Exit.depth = 0;
	this.Exit.isAttachedToCamera = 0
	this.Exit.isAttachedToMask = 0
	this.Exit.layerDepth = 0
	this.Exit.layerIndex = 9
	this.Exit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Exit).wait(1));

	// A803_obj_
	this.A803 = new lib.Scene_1_A803();
	this.A803.name = "A803";
	this.A803.parent = this;
	this.A803.setTransform(639.8,437.8,1,1,0,0,0,639.8,437.8);
	this.A803.depth = 0;
	this.A803.isAttachedToCamera = 0
	this.A803.isAttachedToMask = 0
	this.A803.layerDepth = 0
	this.A803.layerIndex = 10
	this.A803.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A803).wait(1));

	// A802_obj_
	this.A802 = new lib.Scene_1_A802();
	this.A802.name = "A802";
	this.A802.parent = this;
	this.A802.setTransform(639.8,311.3,1,1,0,0,0,639.8,311.3);
	this.A802.depth = 0;
	this.A802.isAttachedToCamera = 0
	this.A802.isAttachedToMask = 0
	this.A802.layerDepth = 0
	this.A802.layerIndex = 11
	this.A802.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A802).wait(1));

	// A801_obj_
	this.A801 = new lib.Scene_1_A801();
	this.A801.name = "A801";
	this.A801.parent = this;
	this.A801.setTransform(639.8,185.5,1,1,0,0,0,639.8,185.5);
	this.A801.depth = 0;
	this.A801.isAttachedToCamera = 0
	this.A801.isAttachedToMask = 0
	this.A801.layerDepth = 0
	this.A801.layerIndex = 12
	this.A801.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A801).wait(1));

	// A800_obj_
	this.A800 = new lib.Scene_1_A800();
	this.A800.name = "A800";
	this.A800.parent = this;
	this.A800.setTransform(639.8,60.8,1,1,0,0,0,639.8,60.8);
	this.A800.depth = 0;
	this.A800.isAttachedToCamera = 0
	this.A800.isAttachedToMask = 0
	this.A800.layerDepth = 0
	this.A800.layerIndex = 13
	this.A800.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.A800).wait(1));

	// script_obj_
	this.script = new lib.Scene_1_script();
	this.script.name = "script";
	this.script.parent = this;
	this.script.setTransform(120.9,628.5,1,1,0,0,0,120.9,628.5);
	this.script.depth = 0;
	this.script.isAttachedToCamera = 0
	this.script.isAttachedToMask = 0
	this.script.layerDepth = 0
	this.script.layerIndex = 14
	this.script.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.script).wait(1));

	// Text_obj_
	this.Text = new lib.Scene_1_Text();
	this.Text.name = "Text";
	this.Text.parent = this;
	this.Text.setTransform(436.3,631,1,1,0,0,0,436.3,631);
	this.Text.depth = 0;
	this.Text.isAttachedToCamera = 0
	this.Text.isAttachedToMask = 0
	this.Text.layerDepth = 0
	this.Text.layerIndex = 15
	this.Text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(1));

	// dialogBox_obj_
	this.dialogBox = new lib.Scene_1_dialogBox();
	this.dialogBox.name = "dialogBox";
	this.dialogBox.parent = this;
	this.dialogBox.setTransform(357.1,650,1,1,0,0,0,357.1,650);
	this.dialogBox.depth = 0;
	this.dialogBox.isAttachedToCamera = 0
	this.dialogBox.isAttachedToMask = 0
	this.dialogBox.layerDepth = 0
	this.dialogBox.layerIndex = 16
	this.dialogBox.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dialogBox).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(306.6,349.1,800,750.9);
// library properties:
lib.properties = {
	id: 'F73727E29E90E64BA050A0832871AD6F',
	width: 699,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../../assets/mapping/ppti8.jpg?1574927533826", id:"ppti8"}
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