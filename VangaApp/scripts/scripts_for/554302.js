var canvasImage;

function draw(canvas, ctx, image_1, image_2, image_3) {
    if (!image_1.complete || !image_2.complete || !image_3.complete){
        setTimeout(function () {
            draw(canvas, ctx, image_1, image_2, image_3);
        }, 50);
        return;
    }
    ctx.drawImage(image_1, 0, 150, 300, 450);
    ctx.drawImage(image_2, 300, 150, 300, 450);
    ctx.drawImage(image_3, 225, 450, 150, 150);
    canvasImage = canvas.toDataURL();
}


$.getJSON( "data/items.json", function(data_items){
    var canvas = document.getElementById("answerCanvas");
    canvas.height = "900";
    canvas.width = "600";
    canvas.style.backgroundColor = "white";
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "#421855";
    ctx.fillRect(0, 0, 600, 150);
    ctx.textAlign = "center";
    ctx.font = "bold 23px BPGNM";
    ctx.fillStyle = "white";
    ctx.fillText(data_items[ID].title[LANG], 300, 85);
    var photos = data_items[ID][SEX];
    if (index == null){
        index = Math.floor(Math.random() * photos.length);
    }
    var femImage = new Image();
    femImage.src = 'assets/items/'+ ID +'/' + data_items[ID][SEX][index]["photo"];
    var ringImage = new Image();
    ringImage.src = 'assets/items/'+ ID + '/ring.png';

    ctx.fillStyle = "black";
    ctx.fillText(data_items[ID].text[LANG][0], 300, 675);
    ctx.fillStyle = "red";
    ctx.fillText(data_items[ID][SEX][index][LANG], 300, 750);
    ctx.fillStyle = "black";
    ctx.fillText(data_items[ID].text[LANG][1], 300, 825);

    draw(canvas, ctx, femImage, profile_Image, ringImage);
    finished = true;
});