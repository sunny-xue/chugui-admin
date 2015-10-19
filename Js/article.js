 $(function() {
     var editor;
     KindEditor.ready(function(K) {
         //编辑器
         editor = K.create('textarea[name="content"]', {
             allowFileManager: true
         });
     });
     //添加按钮
     $("#add").mouseover(function() {
         $(this).children("b").css("background-position", "-484px -49px");
         $(this).children("span").css("color", "#dc4c31");
     });
     $("#add").mouseout(function() {
         $(this).children("b").css("background-position", "-298px -22px");
         $(this).children("span").css("color", "#8a959e");
     });
     //筛选按钮
     $("#filter").mouseover(function() {
         $(this).children("b").css("background-position", "-449px -49px");
         $(this).children("span").css("color", "#dc4c31");
     });
     $("#filter").mouseout(function() {
         $(this).children("b").css("background-position", "-382px 0px");
         $(this).children("span").css("color", "#8a959e");
     });
     //更多按钮
     $("#more").mouseover(function() {
         $(this).children("b").css("background-position", "-425px -49px");
         $(this).children("span").css("color", "#dc4c31");
     });
     $("#more").mouseout(function() {
         $(this).children("b").css("background-position", "-358px 0px");
         $(this).children("span").css("color", "#8a959e");
     });
     //搜索按钮
     $("#search").mouseover(function() {
         $(this).children("b").css("background-position", "-397px -49px");
     });
     $("#search").mouseout(function() {
         $(this).children("b").css("background-position", "-330px 0px");
     });
     $("#search").click(function() {
         if ($(this).children("b").css("background-position") == "-397px -49px") {
             $(this).children("b").css("background-position", "-295px -74px");
             $(this).mouseover(function() {
                 $(this).children("b").css("background-position", "-295px -74px");
             });
             $(this).mouseout(function() {
                 $(this).children("b").css("background-position", "-268px -74px");
             });
         } else {
             $(this).children("b").css("background-position", "-397px -49px");
             $(this).mouseover(function() {
                 $(this).children("b").css("background-position", "-397px -49px");
             });
             $(this).mouseout(function() {
                 $(this).children("b").css("background-position", "-330px 0px");
             });
         }
     });
     //商品列表-鼠标经过显示操作按钮
     $(".articleList").children("dd").mouseover(function() {
         $(this).children("div").show();
     });
     $(".articleList").children("dd").mouseout(function() {
         $(this).children("div").hide();
     });
     $("#filter").click(function() { //打开筛选条件
         $(".filterMain").show("slow");
     });
     $(".filterTitle").children("span").click(function() { //关闭筛选条件
         $(".filterMain").hide("slow");
     });
     //更多菜单
     $("#more").click(function() {
         $(".more").toggle("slow");
     });
     $(".more1").click(function() {
         $(".more").hide("slow");
         $(".delete").show("slow");
     });
     $(".btnDel").click(function() {
         $(".delete").hide("slow");
     });
     $(".delTitle").children("b").click(function() {
         $(".delete").hide("slow");
         $("#more").click();
     });
     //产品编辑
     $(".btnEdit").click(function() {
         $(".addMain").show("slow");
         $(".addTitle").children("label").html("编辑文章");
     });
     //关闭产品编辑框
     $(".addTitle").children("span").click(function() {
         $(".addMain").hide("slow");
     });
     //添加产品
     $("#add").click(function() {
         $(".addMain").show("slow");
         $(".addTitle").children("label").html("添加文章");
     });
     //列表自选中
     $(".articleList").children("dd").click(function() {
         $(this).children(".listTitle").children("input").prop("checked", $(this).children(".listTitle").children("input").prop("checked") === true ? false : true);
     });
 });