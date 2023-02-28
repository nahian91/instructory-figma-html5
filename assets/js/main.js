$(document).ready(function() {

    $(".faq__box").on("click", ".faq__title", function() {

        $(this).toggleClass("active").next().slideToggle();
        
        $(".faq__desc").not($(this).next()).slideUp(300);
                        
        $(this).siblings().removeClass("active");

    });

})