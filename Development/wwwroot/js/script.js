$(document).ready(function() {
    $(".navbar-custom-toggle").click(function() {
        let toggleButton = $(".navbar-custom-toggle");
        let bottomMenu = $(".navbar .navbar-content .bottom-menu");
        if(toggleButton.hasClass("active")) {
            toggleButton.removeClass("active");
            bottomMenu.removeClass("active");
        } else {
            toggleButton.addClass("active");
            bottomMenu.addClass("active");
        }
    });   
});

