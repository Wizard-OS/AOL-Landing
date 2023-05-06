$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});
// $(document).ready(function () {
//     window.scrollTo(0,0);
// });


$(document).ready(function () {
    var scrollValue = 0;
    $(document).on("scroll", function () {
        scrollValue = $(document).scrollTop();
// alert(scrollValue);
//         console.log(scrollValue);
        if (scrollValue === 0 || scrollValue === null || scrollValue===undefined) {
            $("#navIzdit").addClass("bg-transparent").removeClass("bg-izdit");
        } else {
            $("#navIzdit").addClass("bg-izdit").removeClass("bg-transparent");

        }
    });
});

