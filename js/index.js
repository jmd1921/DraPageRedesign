function deleteFormInfo() {
    var inputs = $("form")[0].children;
    for(i=0; i<inputs.length; i++) {
        $(inputs[i]).val("");
    }
}

function changeBackground(el) {
    
    var visible = $(".article > *:not(.hide)");
    $(visible).toggleClass("hide");
    
    var targetId;
    var color;
    switch (el.currentTarget.innerHTML) {
        case "PRINCIPAL":
            targetId = 1;
            color = "white";
            break;
        case "QUIENES":
            targetId = 2;
            color = "white";
            break;
        case "QUE":
            targetId = 3;
            color = "white";
            break;
        case "COMO":
            targetId = 4;
            color = "black";
            break;
        case "CONTACTO":
            targetId = 5;
            color = "black";
            break;
    }
    
    var article = $("#background" + targetId + ", #content" + targetId);
    article.css("color", color);
    article.toggleClass("hide");
    article.hide();
    article.fadeIn();
}

$(document).ready(function () {
    $(".link > a").click(changeBackground);
    $("#cancelForm").click(deleteFormInfo);
});
