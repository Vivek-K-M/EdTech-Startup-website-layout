

// Navigation to differen section throough nabvbar.
$("#title a, #fixed-navbar a, #services a").on("click", function(event){ 
    if(this.hash != "") {           // run if a hash is given.

        // prevent the default action.
        event.preventDefault();
        var hash = this.hash;
        // console.log(hash);

        // get the target cordinates ({top, left} and choose top) of the section to scroll on.
        var target = $(hash).offset().top;

        $("html, body").animate({scrollTop: target}, 800, function(){
            window.location.hash = hash;
        });
    }
});


// to open the hamburger icon slidedown navbar.
$("#hamburger").on("click", function(){ 
    var x = $("#slidedown-UL");
    if(x.css("display") === "block") {
        x.css("display", "none");
    } 
    else {
        x.css("display", "block");
    }
});

// If you click any link on the menu of slidedown navbar then the navbar should collapse automatically.
$("#slidedown-UL a").on("click", function(){
    if($(window).width() < 1000) {
        var x = $("#slidedown-UL");
        if(x.css("display") === "block") {
            x.css("display", "none");
        } 
        else {
            x.css("display", "block");
        }
    } 
});


// window scroll funtion.
window.onscroll = function() {scrollFunction()};
var aboutScrollTop = $("#about").offset().top;      // get the top cordinate for navbar slide down (about-section in this case).
function scrollFunction() {

    // if current document scrollTop is greater than the slide down cordinate the slide down shoul occur.
    if(document.body.scrollTop >= aboutScrollTop || document.documentElement.scrollTop >= aboutScrollTop) {
        $("#fixed-navbar").css("visibility", "visible");
        $("#fixed-navbar").css("top", "0");
    } 
    else {
        $("#fixed-navbar").css("visibility", "hidden");
        $("#fixed-navbar").css("top", "-80px");
    }
} 

