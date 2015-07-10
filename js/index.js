$(document).ready(function(){
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vph = $(window).height();
    $("body").css("height",vph);
    $("article").css("height", vph -150);
}