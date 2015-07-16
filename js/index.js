function deleteFormInfo() {
    var inputs = $("form")[0].children;
    for(i=0; i<inputs.length; i++) {
        $(inputs[i]).val("");
    }
}

function createForm() {
    var form = document.createElement("form");
    form.setAttribute("action", "send_email.php");
    form.setAttribute("method", "post");
    var nameInput = document.createElement("input");
    nameInput.type="text";
    nameInput.setAttribute("placeholder","Nombre");
    
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    var mailInput = document.createElement("input");
    mailInput.type="email";
    mailInput.setAttribute("placeholder","Mail");
    
    form.appendChild(mailInput);
    form.appendChild(document.createElement("br"));
    var telInput = document.createElement("input");
    telInput.type="text";
    telInput.setAttribute("placeholder","Teléfono");
    telInput.setAttribute("max", "10");
    
    form.appendChild(telInput);
    form.appendChild(document.createElement("br"));
    var msgInput = document.createElement("textarea");
    msgInput.type="text";
    msgInput.setAttribute("placeholder", "Mensaje");
    msgInput.setAttribute("rows", "4");
    
    form.appendChild(msgInput);
    
    var buttonsContainer = document.createElement("div");
    $(buttonsContainer).toggleClass("btn-inline");
    var sendButton = document.createElement("input");
    sendButton.type = "submit";
    sendButton.setAttribute("value", "Enviar");
    buttonsContainer.appendChild(sendButton);

    var cancelButton = document.createElement("input");
cancelButton.type = "button";
    cancelButton.setAttribute("value", "Cancelar");
    cancelButton.onclick = deleteFormInfo;
    buttonsContainer.appendChild(cancelButton);
    form.appendChild(buttonsContainer);
    
    return form;
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
            img.src = "media/contacto.png";
            text.innerHTML = "";
            if(text.className.indexOf("contact") < 0)
                $(text).toggleClass("contact");
            var container = document.createElement("div");
            $(container).toggleClass("row");
            var form = createForm();
            $(form).toggleClass("col-md-5");
            container.appendChild(form);
            var map = document.createElement("img");
            map.src = "https://maps.googleapis.com/maps/api/staticmap?center=Lavalle1737,Buenos%20Aires&zoom=15&size=400x300&maptype=roadmap&markers=color:red%7CLavalle1737,Buenos%20Aires";
            $(map).toggleClass("col-md-7");
            container.appendChild(map);
            text.appendChild(container);
            break;
    }
    
    if(text.className.indexOf("contact") >= 0 && el.currentTarget.innerHTML != "CONTACTO")
        $(text).toggleClass("contact");
    
    $(text).fadeIn();
    $(img).fadeIn();
}

function resizeDiv() {
    vpw = $(window).width();
    $("body").css("width", vpw);
    $("img").css("width", vpw);
}

$(document).ready(function () {
    $(".link > a").click(changeBackground);
});
