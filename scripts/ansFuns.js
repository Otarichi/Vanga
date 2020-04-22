function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function draw(ctx, image, x, y, w=300, h=450) {
    if (!image.complete){
        setTimeout(function () {
            draw(ctx, image, x, y, w, h);
        }, 50);
        return;
    }
    ctx.drawImage(image, x, y, w, h)
}draw(ctx, ringImage, 225, 400, 150, 150)

function f_0() {
    window.addEventListener("load", () => {
        var canvas = document.getElementById("answerCanvas");
        canvas.height = "900";
        canvas.width = "600";
        canvas.style.backgroundColor = "white";
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#421855";
        ctx.fillRect(0, 0, 600, 150);
        ctx.strokeRect(0,0, 600, 900);
        ctx.textAlign = "center";
        ctx.font = "bold 26px Arial sans-serif";
        ctx.fillStyle = "white";
        ctx.fillText(data_items[ID].title[LANG], 300, 85);
        var photos = data_items[ID].SEX;
        var index = Math.floor(Math.random() * photos.length);
        var image = new Image();
        image.src = '/wwww2/assets/items/'+ ID +'/' + data_items[ID].SEX[index]["photo"];
        draw(ctx, image,0, 150);

        var profImgSrc = getCookie("photo");
        var profImage = new Image();
        profImage.src = profImgSrc;
        draw(ctx, profImage, 300,150);

        var ringImage = new Image();
        ringImage.src = '/wwww2/assets/items/'+ ID + "/ring.png";
        draw(ctx, ringImage, 225, 450, 150, 150);

        ctx.fillStyle = "black";
        ctx.fillText(data_items[ID].text[LANG][0], 300, 675);
        ctx.fillStyle = "red";
        ctx.fillText(data_items[ID][SEX][index][LANG], 300, 750);
        ctx.fillStyle = "black";
        ctx.fillText(data_items[ID].text[LANG][1], 300, 825);
    })
}
