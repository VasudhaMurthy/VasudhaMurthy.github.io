$(document).ready(function() {
    // Smooth scrolling for navigation
    $('nav ul li a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });
});
