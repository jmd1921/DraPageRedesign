function deleteFormInfo() {
    var inputs = $("form")[0].children;
    for (var i=0; i<inputs.length; i++) {
        $(inputs[i]).val("");
    }
}
function changeBackground(el) {
    var visible = $(".article > *:not(.hide)");
    $(visible).toggleClass("hide");
    var targetId;
    var color;
    var showPagination;
    switch (el.currentTarget.innerHTML) {
        case "PRINCIPAL":
            targetId = 1;
            color = "white";
            break;
        case "QUIENES":
            targetId = 2;
            color = "white";
            showPagination = true;
            break;
        case "QUE":
            targetId = 3;
            color = "white";
            showPagination = true;
            break;
        case "COMO":
            targetId = 4;
            color = "black";
            showPagination = true;
            break;
        case "CONTACTO":
            targetId = 5;
            color = "black";
            showPagination = true;
            break;
    }
    
    if (showPagination)
        $("footer > nav").fadeIn();
    else
        $("footer > nav").hide();
    
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
