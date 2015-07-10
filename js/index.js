$(document).ready(function(){
    resizeDiv();
    $(".link").click(function() {
        if(this.innerHTML === "PRINCIPAL")
            __doPostBack();
        write(this)
    });
});

window.onresize = function(event) {
    resizeDiv();
}

function getAmazonURL (name) {
    return "https://s3-us-west-2.amazonaws.com/content-angular-surgeon/" + name.toLowerCase();
}

function resizeDiv() {
    vph = $(window).height();
    $("body").css("height",vph);
    $("article").css("height", vph - 150);
}

function write (e) {
    $("img:not(disabled)").toggleClass("disabled");
    $(e).toggleClass("disabled");
    $.ajax(getAmazonURL(e.innerHTML)+".txt", 
           {    
                success: function(data){
                    $("#article")[0].innerHTML = data;
                }
           });
}