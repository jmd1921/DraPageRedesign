function deleteFormInfo() {
    var inputs = $("form")[0].children;
    for (var i=0; i<inputs.length; i++) {
        $(inputs[i]).val("");
    }
}
function sendForm() {
    var name = $('[name="nombre"]');
    var mail = $('[name="mail"]');
    var tel = $('[name="telefono"]');
    var msg = $('[name="mensaje"]');
    
    if(name.val().length <= 0 || mail.val().length <= 0 || tel.val().length <= 0 || msg.val().length <= 0)
        return false;
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
    $("form").submit(function() {
        var url = "send_email.php"; 
        $.ajax({
               type: "POST",
               url: url,
               data: $("form").serialize(),
               success: function(data) {
                   alert(data); 
               },
               error: function(err) {
                    alert(err);
                }
             });

        return false;
    });
});


