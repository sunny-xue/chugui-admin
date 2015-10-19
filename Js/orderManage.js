$(function(){
	//添加按钮
        $("#add").mouseover(function () {
            $(this).children("b").css("background-position", "-484px -49px");
            $(this).children("span").css("color", "#dc4c31");
        });
        $("#add").mouseout(function () {
            $(this).children("b").css("background-position", "-298px -22px");
            $(this).children("span").css("color", "#8a959e");
        });
        //筛选按钮
        $("#filter").mouseover(function () {
            $(this).children("b").css("background-position", "-449px -49px");
            $(this).children("span").css("color", "#dc4c31");
        });
        $("#filter").mouseout(function () {
            $(this).children("b").css("background-position", "-382px 0px");
            $(this).children("span").css("color", "#8a959e");
        });
        //更多按钮
        $("#more").mouseover(function () {
            $(this).children("b").css("background-position", "-425px -49px");
            $(this).children("span").css("color", "#dc4c31");
        });
        $("#more").mouseout(function () {
            $(this).children("b").css("background-position", "-358px 0px");
            $(this).children("span").css("color", "#8a959e");
        });
        //搜索按钮
        $("#search").mouseover(function () {
            $(this).children("b").css("background-position", "-397px -49px");            
        });
        $("#search").mouseout(function () {
            $(this).children("b").css("background-position", "-330px 0px");            
        });
        $("#search").click(function () {
            if ($(this).children("b").css("background-position") == "-397px -49px") {
                $(this).children("b").css("background-position", "-295px -74px");
                $(this).mouseover(function () {
                    $(this).children("b").css("background-position", "-295px -74px");
                });
                $(this).mouseout(function () {
                    $(this).children("b").css("background-position", "-268px -74px");
                });
            } else {
                $(this).children("b").css("background-position", "-397px -49px");
                $(this).mouseover(function () {
                    $(this).children("b").css("background-position", "-397px -49px");
                });
                $(this).mouseout(function () {
                    $(this).children("b").css("background-position", "-330px 0px");
                });
            }
        });
        //商品列表-鼠标经过显示操作按钮
        $(".orderList").children("dt").mouseover(function () {
            $(this).children("label").show();
        });
        $(".orderList").children("dt").mouseout(function () {
            $(this).children("label").hide();
        });        
        $("#filter").click(function () {//打开筛选条件
            $(".filterMain").show("slow");
        });
        $(".filterTitle").children("span").click(function () {//关闭筛选条件
            $(".filterMain").hide("slow");
        });
        //更多菜单
        $("#more").click(function () {
            $(".more").toggle("slow");
        });
        $(".more1").click(function () {
            $(".more").hide("slow");
            $(".send").show("slow");
        });
        $(".btnConf").click(function () {
            $(".send").hide("slow");
        });
        $(".sendTitle").children("b").click(function () {
            $(".send").hide("slow");
            $("#more").click();
        });
        $(".more2").click(function () {
            $(".more").hide("slow");
            $(".invalid").show("slow");
        });
        $(".btnConf").click(function () {
            $(".invalid").hide("slow");
        });
        $(".invalidTitle").children("b").click(function () {
            $(".invalid").hide("slow");
            $("#more").click();
        });
        $('.opeBtns4').click(function(){
            $(".orderMod").show("slow");
        });
        $('.orderMod-closeBtn').click(function(){
            $(".orderMod").hide("slow");
        });
        $('.order-num').click(function(){
            $(".orderDetails").show("slow");
        });
        $('.orderDetails-closeBtn').click(function(){
             $(".orderDetails").hide("slow");
        });
});