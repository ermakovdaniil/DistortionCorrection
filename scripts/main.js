var distorter = FisheyeGl();

function onSliderChange() {
    readSliders();
    distorter.run();
}

setSliders();
readSliders();
distorter.run();

var filters = document.getElementById('filters');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = e.target.result;
        distorter.setImage(e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    canvas.style.display = 'block';
    filters.style.display = 'block';
}
