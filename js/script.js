$(document).ready(function() {

    $("#show").mouseover(function() {
        $("#menunav").show()
   })
    $("#show").mouseout(function() {
        $("#menunav").hide()
    })

    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});
window.onload = function () {
    console.log("window is loaded");

}


 
    //$("#show").on('click', function() {
    //    $("#element").show();
    //    return false;
    //});
   