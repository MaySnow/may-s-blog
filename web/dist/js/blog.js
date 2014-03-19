/**
 * Created by may on 14-3-13.
 */
/**
 * 标题的背景色
 */
$(".blog-nav-item").click(function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
});