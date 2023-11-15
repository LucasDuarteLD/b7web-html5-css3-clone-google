window.onload = function () {
    document.querySelector('.mnb1').addEventListener("click", function () {
        if (document.querySelector('.menu-especial-mobile').style.display == "flex") {
            document.querySelector('.menu-especial-mobile').style.display = "none";
            document.querySelector('footer').style.zIndex = "1";
        } else {
            document.querySelector('.menu-especial-mobile').style.display = "flex";
            document.querySelector('footer').style.zIndex = "-1";
        }
    })
}