$(function(){
	

     $("#conter").height($(document).height() - 110); //客户操作区自适应 N1
     $(window).resize(function() {
         $("#conter").height($(document).height() - 110); //客户操作区自适应 N1
     });
     //顶部消息通知
     $("#notice").mouseover(function() {
         $(this).children("span").css("background-position", "-486px 0px");
     });
     $("#notice").mouseout(function() {
         $(this).children("span").css("background-position", "-466px 0px");
     });
     //主菜单    
     $("#btnFold").mouseenter(function() {
         $(this).children("b").css("background-position", "-349px -24px");
         $(this).children("label").css("display", "block");
     });
     $("#btnFold").mouseout(function() {
         $(this).children("b").css("background-position", "-211px -21px");
         $(this).children("label").css("display", "none");
     });
     $("#btnHelp").mouseover(function() {
         $(this).children("b").css("background-position", "-328px -24px");
         $(this).children("label").css("display", "block");
     });
     $("#btnHelp").mouseout(function() {
         $(this).children("b").css("background-position", "-190px -21px");
         $(this).children("label").css("display", "none");
     });
     $("#btnOpen").mouseover(function() {
         $(this).children("b").css("background-position", "-349px -24px");
         $(this).children("label").css("display", "block");
     });
     $("#btnOpen").mouseout(function() {
         $(this).children("b").css("background-position", "-211px -21px");
         $(this).children("label").css("display", "none");
     });
     $("#btnSet").mouseover(function() {
         $(this).children("b").css("background-position", "-129px -206px");
         $(this).children("label").css("display", "block");
     });
     $("#btnSet").mouseout(function() {
         $(this).children("b").css("background-position", "-106px -206px");
         $(this).children("label").css("display", "none");
     });
     $("#btnFold").click(function() { //主菜单折叠menuBottom
         $("#menu").animate({
             width: "80px"
         }, function() {
             $("#menu").hide().css("width", "220px");
             $("#menu2").show();
         });
         $("#listBox").animate({
             marginLeft: "95px"
         });
         $("#navL").animate({
             marginLeft: "95px"
         });
         $(".menuBottom").animate({
             width: "80px"
         }, function() {
             $(".menuBottom").css("width", "220px");
         });
     });
     $("#btnOpen").click(function() { //主菜单展开
         $("#menu2").animate({
             width: "220px"
         }, function() {
             $("#menu2").hide().css("width", "80px");
             $("#menu").show();
         });
         $("#listBox").animate({
             marginLeft: "235px"
         });
         $("#navL").animate({
             marginLeft: "235px"
         });
     });
     //子菜单
     $("#menu").children("ul").children("li").children("a").click(function() {
         if ($(this).attr("data-url") == "none") {
             $(this).next("dl").toggle("slow");
         } else {
             alert($(this).attr("data-url"));
         }
     });
     $("#menu").children("ul").children("li").children("dl").children("dd").children("a").click(function() {
         alert($(this).attr("data-url"));
     });
     $("#menu2").children("ul").children("li").children("a").click(function() {
         alert($(this).attr("data-url"));
     });
     //我的账户
     $("#accSet").click(function() {
         $(".myAccount").toggle("slow");
     });
     $(".accountTitle").click(function() {
         $("#accSet").click();
     });
});