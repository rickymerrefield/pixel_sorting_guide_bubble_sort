var n = 0;
var i = 0;

window.onload = function() {
    
    var img = new Image();
    img.src = "detroit.jpg";
    
    var canvas = document.getElementById("canvas");
    canvas.width = 150;
    canvas.height = 103;
    
    window.ctx = canvas.getContext("2d");
    
    img.onload = function() {
        
        ctx.drawImage(img,0,0);
        
        window.imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        
        bubbleSort();
        render();
        
    };
    
};

var bubbleSort = function() {
    
    if (n < imageData.data.length) {
        if (i < imageData.data.length - n - 4) {
            var curRed = imageData.data[i];
            var curGreen = imageData.data[i+1];
            var curBlue = imageData.data[i+2];
            var curBright = (curRed + curGreen + curBlue) / 3;

            var nextRed = imageData.data[i+4];
            var nextGreen = imageData.data[i+5];
            var nextBlue = imageData.data[i+6];
            var nextBright = (nextRed + nextGreen + nextBlue) / 3;

            if (curBright < nextBright) {
                imageData.data[i] = nextRed;
                imageData.data[i+1] = nextGreen;
                imageData.data[i+2] = nextBlue;
                imageData.data[i+4] = curRed;
                imageData.data[i+5] = curGreen;
                imageData.data[i+6] = curBlue;
            }
            
            i += 4;
        } else {
            i = 0;
            n += 4;
        }
    }

    setTimeout(bubbleSort,0);
};

var render = function () {
    ctx.putImageData(imageData,0,0);
    setTimeout(render, 1000/30);
};