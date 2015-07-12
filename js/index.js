window.onresize = function (event) {
    //resizeDiv();
}

function createMap() {
}

function destroyMap() {
}

function changeBackground(el) {
    var img = $("#background")[0];
    var text = $("#content")[0];
    
    $(img).hide();
    $(text).hide();
    
    switch (el.currentTarget.innerHTML) {
        case "PRINCIPAL":
            img.src = "media/HomePage.png";
            text.innerHTML ="";
            break;
        case "QUIENES":
            img.src = "media/feeling.png";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id iaculis risus. Mauris pharetra nibh sagittis tempus mattis. Donec eu sem lorem. Sed mattis eget quam sed consequat. Donec a feugiat ante, a venenatis diam. Donec et nisl fringilla risus pellentesque congue nec ut nunc. Donec vitae mi vestibulum, laoreet metus sed, lobortis eros.";
            $(text).css("color","white");
            break;
        case "QUE":
            img.src = "media/amigas.png";
            text.innerHTML = "Nam varius neque id ultrices luctus. Etiam sit amet pulvinar erat.";
            $(text).css("color","white");
            break;
        case "COMO":
            img.src = "media/gluteos.png";
            text.innerHTML = "Phasellus quis lectus in risus viverra aliquam. Nam aliquet ipsum aliquam tincidunt sagittis. Nulla venenatis a velit interdum eleifend. Proin sollicitudin leo eu lorem scelerisque placerat. Praesent at mollis purus. Fusce vel leo molestie, ornare nulla quis, tincidunt arcu. Maecenas scelerisque accumsan turpis, at porta ante. Suspendisse potenti.";
            $(text).css("color","black");
            break;
        case "CONTACTO":
            img.src = "media/ojos.png";
            text.innerHTML = "";
            createMap();
            break;
    }
    
    if(el.currentTarget.innerHTML != "CONTACTO")
        destroyMap();
    
    $(text).fadeIn();
    $(img).fadeIn();
}

function resizeDiv() {
    vpw = $(window).width();
    $("body").css("width", vpw);
    $("img").css("width", vpw);
}

$(document).ready(function () {
    //resizeDiv();
    $(".link > a").click(changeBackground);
});
