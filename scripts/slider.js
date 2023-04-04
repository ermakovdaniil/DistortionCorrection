var fxSlider = document.getElementById("fxSlider");
var fxSliderLabel = document.getElementById("fxSliderLabel");
fxSliderLabel.innerHTML = fxSlider.value;

fxSlider.oninput = function() {
    fxSliderLabel.innerHTML = this.value;
}

var fySlider = document.getElementById("fySlider");
var fySliderLabel = document.getElementById("fySliderLabel");
fySliderLabel.innerHTML = fySlider.value;

fySlider.oninput = function() {
    fySliderLabel.innerHTML = this.value;
}

var aSlider = document.getElementById("aSlider");
var aSliderLabel = document.getElementById("aSliderLabel");
aSliderLabel.innerHTML = aSlider.value;

aSlider.oninput = function() {
    aSliderLabel.innerHTML = this.value;
}

var bSlider = document.getElementById("bSlider");
var bSliderLabel = document.getElementById("bSliderLabel");
bSliderLabel.innerHTML = bSlider.value;

bSlider.oninput = function() {
    bSliderLabel.innerHTML = this.value;
}

var scaleSlider = document.getElementById("scaleSlider");
var scaleSliderLabel = document.getElementById("scaleSliderLabel");
scaleSliderLabel.innerHTML = scaleSlider.value;

scaleSlider.oninput = function() {
    scaleSliderLabel.innerHTML = this.value;
}

function readSliders() {
    distorter.lens.Fx = parseFloat(fxSliderLabel.innerHTML = fxSlider.value);
    distorter.lens.Fy = parseFloat(fySliderLabel.innerHTML = fySlider.value);
    distorter.lens.a = parseFloat(aSliderLabel.innerHTML = aSlider.value);
    distorter.lens.b = parseFloat(bSliderLabel.innerHTML = bSlider.value);
    distorter.lens.scale = parseFloat(scaleSliderLabel.innerHTML = scaleSlider.value);
}

function setSliders() {
    fxSlider.value = distorter.lens.Fx;
    fySliderLabel.innerHTML = distorter.lens.Fx;
    fySlider.value = distorter.lens.Fy;
    fySliderLabel.innerHTML = distorter.lens.Fy;
    aSlider.value = distorter.lens.a;
    aSliderLabel.innerHTML = distorter.lens.a;
    bSlider.value = distorter.lens.b;
    bSliderLabel.innerHTML = distorter.lens.b;
    scaleSlider.value = distorter.lens.scale;
    scaleSliderLabel.innerHTML = distorter.lens.scale;
}