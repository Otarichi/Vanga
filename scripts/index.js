// https://www.facebook.com/embed/instantgames/175878683487724/player?game_url=https://localhost:8080

home = document.getElementById("logo");
home.onclick = function (){
    count = 0;
    ID = null;
    SEX  = null;
    index = null;
    $('.answerDiv').remove();
    $('.itemDiv').remove();
    getData();
}
// info functions


// laguage change functions
document.getElementById(LANG + "LangButtonDiv").style.backgroundColor = "#421855"; 
kaLang = document.getElementById("kaLangButtonDiv");
kaLang.onclick = function (){
    let colorResetDiv = document.getElementById(LANG + "LangButtonDiv");
    colorResetDiv.style.backgroundColor = "#FF7105";
    LANG = "ka";
    this.style.backgroundColor = "#421855";
    if (ID !== null){
        $('.answerDiv').remove();
        play();
    } else {
        $('.itemDiv').remove();
        count = 0;
        getData();
    }
}

maLang = document.getElementById("maLangButtonDiv");
maLang.onclick = function (){
    let colorResetDiv = document.getElementById(LANG + "LangButtonDiv");
    colorResetDiv.style.backgroundColor = "#FF7105";
    LANG = "ma";
    this.style.backgroundColor = "#421855";
    if (ID !== null){
        $('.answerDiv').remove();
        play();
    } else {
        $('.itemDiv').remove();
        count = 0;
        getData();
    }
}

enLang = document.getElementById("enLangButtonDiv");
enLang.onclick = function (){
    let colorResetDiv = document.getElementById(LANG + "LangButtonDiv");
    colorResetDiv.style.backgroundColor = "#FF7105";
    LANG = "en";
    this.style.backgroundColor = "#421855";
    if (ID !== null){
        $('.answerDiv').remove();
        play();
    } else {
        $('.itemDiv').remove();
        count = 0;
        getData();
    }
}
// laguage change functions


// start Data get functions
function getData() {
    $.getJSON( "data/itemsMain.json", function(data) {
        for (i = 1; i <= 10; i++) {
            try {
                var itemDiv = document.createElement("div");
                itemDiv.className = "itemDiv";
                itemDiv.onclick = function(){
                    ID = data[count].id;
                    SEX = data[count].SEX;
                    data.played = data.played + 1;
                    $('.itemDiv').remove();
                    play();
                };
                var itemImg = document.createElement("img");
                itemImg.className = "itemImg";
                itemImg.src = "assets/itemsMain/" + data[count].id + ".jpg";
                var itemTextDiv = document.createElement("div");
                itemTextDiv.className = "itemTextDiv";
                itemTextDiv.innerHTML = data[count].title[LANG];
                itemDiv.appendChild(itemImg);
                itemDiv.appendChild(itemTextDiv);
                document.body.appendChild(itemDiv);
                count = count + 1;
            } catch (e){
                count = count - 1;
                break;
            }
        }
    });  
}
// end getData function


// start play function
function play() {
    $.getJSON( "data/items.json", function(data_items){

        let answerDiv = document.createElement("div");
        answerDiv.className = "answerDiv";

        function addTitle() {
            let answerTitleDiv = document.createElement("div");
            answerTitleDiv.className = "answerTitleDiv";
            answerTitleDiv.innerHTML = data_items[ID].title[LANG];
            answerDiv.appendChild(answerTitleDiv);
        }

        function addShare_tryAgainButtons() {
            let share_AgainDiv = document.createElement('div');
            share_AgainDiv.className = "share_AgainDiv";
            share_AgainDiv.id = "share_AgainDiv";
            let shareDiv = document.createElement('div');
            shareDiv.className = "shareDiv";
            let fbIco = document.createElement("img");
            fbIco.src = "assets/baseMain/fb.png";
            let sText = document.createElement("p");
            sText.innerHTML = data_items.share_button[LANG];
            shareDiv.onclick = function(){
                shareFun(canvasImage);
            };
            let againDiv = document.createElement('div');
            againDiv.className = "againDiv";
            let tryIco = document.createElement("img");
            tryIco.src = "assets/baseMain/try.png";
            let tryText = document.createElement("p");
            tryText.innerHTML = data_items.try_again[LANG];
            againDiv.onclick = function (){
                if (againBool){
                    if (index == data_items[ID].sum-1){
                        index = -1;
                    }
                    index = index + 1;
                    $('.share_AgainDiv').remove();
                    $('#answerCanvas').remove();
                    addShare_tryAgainButtons();
                    answer();
                    addShare_tryAgainButtons();
                    let getJS = document.createElement('script');
                    getJS.src = "scripts/scripts_for/" + ID + ".js";
                    document.body.appendChild(getJS);
                }
            }
            shareDiv.appendChild(fbIco);
            shareDiv.appendChild(sText);
            againDiv.appendChild(tryIco);
            againDiv.appendChild(tryText);
            share_AgainDiv.appendChild(againDiv);
            share_AgainDiv.appendChild(shareDiv);
            answerDiv.appendChild(share_AgainDiv);
        }

        function addSEXSelector() {
            let genderSelectDiv = document.createElement("div");
            genderSelectDiv.className = "genderSelectDiv";
            genderSelectDiv.innerHTML = data_items.langSelector.langSelectTitle[LANG];

            let genderSelectDivMale = document.createElement("div");
            genderSelectDivMale.className = "genderSelectDivMale_Female";
            genderSelectDivMale.innerHTML = data_items.langSelector.langMale[LANG];
            genderSelectDivMale.onclick = function(){
                if (SEX !== "yes"){
                    SEX = "male";
                    $('.share_AgainDiv').remove();
                    $('#answerCanvas').remove();
                    addShare_tryAgainButtons();
                    answer();
                    addShare_tryAgainButtons();
                    let getJS = document.createElement('script');
                    getJS.src = "scripts/scripts_for/" + ID + ".js";
                    document.body.appendChild(getJS);

                } else {
                    SEX = "male";
                    addShare_tryAgainButtons();
                    answer();
                    addShare_tryAgainButtons();
                    let getJS = document.createElement('script');
                    getJS.src = "scripts/scripts_for/" + ID + ".js";
                    document.body.appendChild(getJS);
                }
            };

            let genderSelectDivFemale = document.createElement("div");
            genderSelectDivFemale.className = "genderSelectDivMale_Female";
            genderSelectDivFemale.innerHTML = data_items.langSelector.langFemale[LANG];
            genderSelectDivFemale.onclick = function(){
                if (SEX !== "yes"){
                    SEX = "female";
                    $('.share_AgainDiv').remove();
                    $('#answerCanvas').remove();
                    addShare_tryAgainButtons();
                    answer();
                    addShare_tryAgainButtons();
                    let getJS = document.createElement('script');
                    getJS.src = "scripts/scripts_for/" + ID + ".js";
                    document.body.appendChild(getJS);

                } else {
                    SEX = "female";
                    addShare_tryAgainButtons();
                    answer();
                    addShare_tryAgainButtons();
                    let getJS = document.createElement('script');
                    getJS.src = "scripts/scripts_for/" + ID + ".js";
                    document.body.appendChild(getJS);
                }
            };
            let BR = document.createElement("br");
            let BR2 = document.createElement("br");
            BR2.id = "br2";
            answerDiv.appendChild(genderSelectDiv);
            answerDiv.appendChild(genderSelectDivMale);
            answerDiv.appendChild(genderSelectDivFemale);
            answerDiv.appendChild(BR);
            answerDiv.appendChild(BR2);
        }

        function answer() {
            finished = false;
            let answerCanvas = document.createElement("canvas");
            answerCanvas.id = "answerCanvas";
            answerDiv.appendChild(answerCanvas);
            let loadFrame = document.createElement("iframe");
            loadFrame.id = "loadFrame";
            loadFrame.src = "loading.html";
            answerDiv.appendChild(loadFrame);
            let getJS = document.createElement('script');
            getJS.src = "scripts/scripts_for/" + ID + ".js";
            document.body.appendChild(getJS);
            window.location.href = "#br2";
            function loading(){
                if (!finished){
                    $("#answerCanvas").hide();
                    $("#loadFrame").show();
                    setTimeout(function(){
                        loading();
                    }, 1500)
                    againBool = false;
                } else {
                    $("#loadFrame").remove();
                    $("#answerCanvas").show();
                    window.location.href = "#br2";
                    againBool = true;
                }
            }
            loading();
        }


        if (SEX == "yes") {
            addTitle();
            addSEXSelector();
        }

        if (SEX == "female" || SEX == "male") {
            addTitle();
            addSEXSelector();
            addShare_tryAgainButtons();
            answer();
            addShare_tryAgainButtons();
        }
        if (SEX == "no") {
            addTitle();
            addShare_tryAgainButtons();
            answer();
            addShare_tryAgainButtons();
        }

        document.body.appendChild(answerDiv);
    });
}
// end play function

if (ID !== null){
    play();
} else {
    getData()
}


let n = 3500;

window.addEventListener('scroll', function () {
    let scrollingY = scrollY;

    function add() {
        n = n + 3500
    }

    if (scrollingY > n){
        getData();
        add();
    }
    console.log(scrollingY);
});