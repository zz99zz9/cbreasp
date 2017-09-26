//首页搜索相关的js
$(".searchbor ul li").click(function(){
    var tab = $(this).parent(".searchbor ul");
    var stab = tab.parent(".searchbor");
    var v1=$(this).attr("class").indexOf("v1");
    var v2=$(this).attr("class").indexOf("v2");
    var v3=$(this).attr("class").indexOf("v3");
    var skid=0;
    $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
    if(v1>-1){
      skid=1;
      stab.find('.inputbor .sarr').css('margin-left','25px');
      stab.find('.inputbor .skid').val(1);
      stab.find('.inputbor .sint').attr('placeholder','请输入国家，如英国、澳大利亚等，或项目名称');
    }else if(v2>-1){
      skid=2;
      stab.find('.inputbor .sarr').css('margin-left','102px');
      stab.find('.inputbor .skid').val(2);
      stab.find('.inputbor .sint').attr('placeholder','请输入国家，如英国、澳大利亚等，或项目名称');
    }else if(v3>-1){
        skid=3;
      stab.find('.inputbor .sarr').css('margin-left','190px');
      stab.find('.inputbor .skid').val(3);
      stab.find('.inputbor .sint').attr('placeholder','请输入国家，如英国、澳大利亚等');
    };
});
$(".searchbor .inputbor .sbtn").click(function(){
    var tab = $(this).parent(".inputbor");
    var sdata = {
        skid:tab.find('.skid').val(),
        sint:tab.find('.sint').val()
    }
    console.log(sdata);
    if(sdata.sint!=undefined&&sdata.sint!=""&&sdata.sint!=null){
         if(sdata.skid==1){
             window.location.href='HouseProperty.asp?key='+sdata.sint
         }
         if(sdata.skid==2){
             alert("二手房内容整理中……")
         }
         if(sdata.skid==3){
             window.location.href='MarketReport.asp?key='+sdata.sint
         }
    }else{
        alert("请输入搜索关键词！")
        $(".sint").focus();
    }
})
//底部表单相关
//打开表单
$(".openbform").click(function(){
$('.bform').fadeIn(); 
})
//关闭表单
$('.bform .container i.bclose').click(function(){
   $('.bform').fadeOut(); 
})
//提交表单
$('#bbtn').click(function(){
    var reg2 = /^1\d{10}$/;     //验证手机号正则
    var bform={
        lyname:$("#bname").val(),
        lytel:$("#bmobile").val(),
        lyemail:$("#bcountry").val(),
        lytext:$("#bcity").val(),
        lyqq:'1'
    }
    if(bform.lyname==""){
        alert("请输入姓名！")
        $("#bname").focus();
    }else if(bform.lytel==""){
        alert("手机号不能为空！")
        $("#bmobile").focus();
    }else if(!reg2.test(bform.lytel)){
        alert("请正确输入手机号！")
        $("#bmobile").focus();
    }else{
        $.post("/api/lyb.asp",bform,
            function(data,status){
                if(status=="success"){
				   if(data=='has'){
						alert("此手机号已经提交过了!");//请检查手机号码是否正确
				   }else if(data=='ok'){
                       alert("提交成功，我们将尽快和您联系！")
		$("#bname").val("");
		$("#bmobile").val("");
	   $("#bcountry").val("");
       $("#bcity").val("");
				   }
                }
            });
    }
//console.log(bform)
})
//判断客户端是电脑还是移动设备
if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)){
	var url=location.href.split("/intl/")
	url2=url[0]+"/intl/m/"+url[1]
//	location.href=url2; //可以换成http地址
}
//最后更新时间
$(document).ready(function () {
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };
  $('[data-toggle="tooltip"]').tooltip()
  console.log("最后更新日期2017.9.26 by 任刚");
});
//验证短信60秒倒计时
var wait=60;
function time(o) {
  if (wait == 0) {
   $(o).removeAttr("disabled");  
   $(o).val("重新发送验证码");
   wait = 60;
  } else { 
 
   $(o).attr("disabled", true);
   $(o).val("重新发送(" + wait + ")");
   wait--;
   setTimeout(function() {
    time(o)
   },
   1000)
  }
 }

////////////////////////////////////旧的js，待整理
//搜索时input鼠标按下抬起效果
// input("#wrint1");
// input("#wrint2");
// input("#wrint3");
// input("#wrint4");
// input("#wrint5");
// input("#wrint6");
// input("#skey");
// input("#okey");
// function input(v){
//     var n = $(v);
//     var val=n.val();
//     n.focus(function(){
//         if(n.val()==val){
//             $(this).val('');
//             $(this).css("color","#000");
//         }
//     }).blur(function(){
//         if (n.val()==""){
//             $(this).val(val);
//             $(this).css("color","#4d4d4d");
//         }
//     })
// };
// //向下跳转锚
// $("a.topLink").click(function () {
//     $("html, body").animate({
//         scrollTop: $($(this).attr("href")).offset().top + "px"
//     }, {
//         duration: 1000,
//         easing: "swing"
//     });
//     return false;
// });
// // 选项卡 鼠标经过切换
// $(".TAB li").mousemove(function () {
//     var tab = $(this).parent(".TAB");
//     var con = tab.attr("id");
//     var on = tab.find("li").index(this);
//     $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
//     $(con).eq(on).show().siblings(con).hide();
// });

// // 选项卡 鼠标点击
// $(".TAB_CLICK li").click(function () {
//     var tab = $(this).parent(".TAB_CLICK");
//     var con = tab.attr("id");
//     var on = tab.find("li").index(this);
//     $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
//     $(con).eq(on).show().siblings(con).hide();
// });
// // 选项卡 鼠标点击
// $(".TAB_CLICKa a").click(function () {
//     var tab = $(this).parent(".TAB_CLICKa");
//     var con = tab.attr("id");
//     var on = tab.find("a").index(this);
//     $(this).addClass('on').siblings(tab.find("a")).removeClass('on');
//     $(con).eq(on).show().siblings(con).hide();
// });

// // pc端导航切换
// $(".XGnav .XGli").mousemove(function () {
//     var tab = $(this).parent(".XGnav");
//     var con = tab.attr("id");
//     var on = tab.find(".XGli").index(this);
//     $(this).addClass('on').siblings(tab.find(".XGli")).removeClass('on');
//     if (on != 0 && on != 1) {
//         $(con).eq(on).fadeIn().siblings(con).fadeOut();
//     } else {
//         $(con).fadeOut();
//     }
// });
// $(document).click(function () {
//     $(".pc-nav").fadeOut();
// });
// $(".pc-nav").mouseleave(function () {
//     //  $(".pc-nav").fadeOut();
// });

// //打开弹窗
// function openfrom(v){

//         $("#downurl").val(v);
//         $(".intpop .wrtit").html("请填写表格");
//         $(".intpop").fadeIn();
//         $(".mask").fadeIn();
//         console.log(v);

// }
// function openfrom2(v){
//     if($.cookie('downcheck')=="-_-||"){
//         export_raw(v);
//         console.log($.cookie('downcheck'));
//     }else{
//         $("#downurl").val(v);
//         $(".intpop .wrtit").html("请填写表格，获取资料");
//         $(".intpop").fadeIn();
//         $(".mask").fadeIn();
//         console.log(v);
//     }
// }
// //显示弹窗并定时关闭弹窗
// function showpop() {
//     $('.pop').fadeIn();
//     setTimeout("$('.pop').fadeOut()", 2000);

// }
// $(".cpli").click(function () {
//     showpop();
// });
// $('.pop').click(function () {
//     $('.pop').fadeOut();
// });

// //关闭电脑端默认二级菜单
// if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)) {
//     $(document).off('click.bs.dropdown.data-api');
// }
// ;
// //在线咨询
// function feedback() {
//     alert("在线咨询弹窗")

// }
// $(".sxf").click(function(){
//    var aaa=$(this).parents(".searchint").find(".sint").val();

//     location='4.asp?key='+aaa;
// })
// $(".s2sf").click(function(){
//     var aaa=$(this).parents(".searchint").find(".sint").val();

//    location='3.asp?key='+aaa;
// })


