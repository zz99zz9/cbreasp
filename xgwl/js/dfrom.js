
/////////////////////////////////////
//          验证管理员表单           //
////////////////////////////////////
var code = Math.floor(Math.random()*9000)+1000;
//输入时验证表单
function getLength(str){
  // \x00-xff代表单字节字符。
  return str.replace(/[^\x00-\xff]/g, "xx").length;
}
    var reg = /[^\w\u4e00-\u9fa5]/g;    // 验证用户名正则 
	var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; // 验证邮箱正则    
    var reg2 = /^1\d{10}$/;     //验证手机号正则
//注册表单提交
$("#regmobile").blur(function(){
checkwrint2(this);
});
$("#regcheck").blur(function(){
checkwrint6(this);
	});
$("#regname").blur(function(){
checkwrint1(this);
	});
$("#regpassword").blur(function(){
checkwrint4(this);
	});
$("#regpassword2").blur(function(){
checkwrint5(this,"#regpassword");
	});
$("#regcheckbtn").click(function(){
	checkwrint2("#regmobile");
	if ($("#regmobile").hasClass("ok")){
	  time("#regcheckbtn");
	  
	  var mobile=$("#regmobile").val();
	  var content='您的验证码是"'+code+'".感谢您关注CBRE,请勿将此短信泄露给其他人'
	//  console.log(mobile)
	  console.log(content)
	//   $.post("xgwl/js/sendmobile.asp",{mobile:mobile,content:content},
    //         function(data,status){
    //             if(status=="success"){

    //             }
    //         });
	}
});
$("#regbtn").click(function(){
	checkwrint2("#regmobile");
	checkwrint6("#regcheck");
	checkwrint1("#regname");
	checkwrint4("#regpassword");
	checkwrint5("#regpassword2","#regpassword");
	if ($("#regmobile").hasClass("no")||$("#regcheck").hasClass("no")||$("#regname").hasClass("no")||$("#regpassword").hasClass("no")||$("#regpassword2").hasClass("no")){
		console.log("信息不完善，无法提交")
	}else{
		var regmobile=$("#regmobile").val();
		var regname=$("#regname").val();
		var regpassword=$("#regpassword").val();
console.log(regmobile+regname+regpassword)
		$.post("api/reg.asp",{usermobile:regmobile,username:regname,userpassword:regpassword,Action:'add'},
            function(data,status){
                if(status=="success"){
                    //var jsObjstr =JSON.parse(data);
                  // console.log(data)
				   alert("注册成功！")
				   var ComeUrl=$("#ComeUrl").val()
				   window.location.href=ComeUrl
                }
            });
	}
});
//登录表单提交
$("#logmobile").blur(function(){
checkwrint22(this);
});
$("#logpassword").blur(function(){
checkwrint4(this);
	});
$("#logbtn").click(function(){
	checkwrint22("#logmobile");
	checkwrint4("#logpassword");
	if ($("#logmobile").hasClass("no")||$("#regpassword").hasClass("no")){
		console.log("信息不完善，无法提交")
	}else{
		var logmobile=$("#logmobile").val();
		var logpassword=$("#logpassword").val();

		$.post("api/reg.asp",{usermobile:logmobile,userpassword:logpassword,Action:'login'},
            function(data,status){
                if(status=="success"){
                    //var jsObjstr =JSON.parse(data);
                  // console.log(data)
				  if(data=="loginok"){
				   alert("登录成功！")
				   var ComeUrl=$("#ComeUrl").val()
				   window.location.href=ComeUrl
				   }else{
					  alert("手机号或登录密码错误！")  
				   }
                }
            });
	}
});
//房源页提交
$("#wrbtn2").click(function(){
checkwrint1("#wrint4");
checkwrint2("#wrint5");
checkwrint3("#wrint6");
if ($("#wrint4").hasClass("no")||$("#wrint5").hasClass("no")||$("#wrint6").hasClass("no")){
console.log("over");
	}else{
	$('.mfzxok').fadeIn()
$(".mask").fadeOut();
$(".mfzxpop").css("bottom","-300px");
setTimeout("$('.mfzxok').fadeOut()",1000);
		  $("#wrint4").val("");
$("#wrint5").val("");
$("#wrint6").val("");
	}
});

//弹窗提交时验证表单
$("#wrbtn1").click(function(){
checkwrint1("#wrint1");
checkwrint2("#wrint2");
checkwrint3("#wrint3");

if ($("#wrint1").hasClass("no")||$("#wrint2").hasClass("no")||$("#wrint3").hasClass("no")){
console.log("over");
	}else{

console.log("ok");

export_raw($("#downurl").val());//下载文件
$(".intpop").fadeOut();
$(".mask").fadeOut();
$("#wrint1").val("");
$("#wrint2").val("");
$("#wrint3").val("");
$("#downurl").val("");

$.cookie('downcheck','-_-||',{expires: 1});
	}
});
	
	
//验证表单
//checkwrint1 验证用户名
//checkwrint2 验证手机号
//checkwrint3 验证邮箱
//checkwrint4 验证密码
//checkwrint5 验证确认密码
//checkwrint6 验证验证码
function checkwrint1(v){
	    var reg = /[^\w\u4e00-\u9fa5]/g;    // 验证用户名正则 
		if ($(v).val()==""||$(v).val()=="您的姓名"){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入姓名");//名称不能为空
	}else if(reg.test($(v).val())){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 姓名不能含有非法字符");//名称不能含有非法字符

	}else if(getLength($(v).val())<3){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 姓名不能少于3个字符");//名称不能少于4个字符

	}else if(getLength($(v).val())>20){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 姓名不能多于20个字符");//名称不能多于16个字符

	}else {
		$(v).removeClass("no");
		$(v).addClass("ok");
		$(v).next(".err").html("");
}
	}
	
function checkwrint2(v){

		if ($(v).val()==""||$(v).val()=="手机号码"){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入手机号码");//手机号码不能为空

	}else if(!reg2.test($(v).val())){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请检查手机号码是否正确");//请检查手机号码是否正确

	}else{
		$.post("api/reg.asp",{usermobile:$(v).val()},
            function(data,status){
                if(status=="success"){
				   if(data=='has'){
					   	$(v).addClass("no");
						$(v).removeClass("ok");
						$(v).next(".err").html("× 此手机号码已经注册");//请检查手机号码是否正确
				   }else{
		$(v).removeClass("no");
		$(v).addClass("ok");
	$(v).next(".err").html("");
				   }
                }
            });

	}
}
function checkwrint22(v){

		if ($(v).val()==""||$(v).val()=="手机号码"){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入手机号码");//手机号码不能为空

	}else if(!reg2.test($(v).val())){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请检查手机号码是否正确");//请检查手机号码是否正确

	}else{
		$.post("api/reg.asp",{usermobile:$(v).val()},
            function(data,status){
                if(status=="success"){
				   if(data=='has'){
					   	$(v).addClass("ok");
						$(v).removeClass("no");
							$(v).next(".err").html("");
				   }else{
		$(v).removeClass("ok");
		$(v).addClass("no");
	$(v).next(".err").html("× 此手机号码未注册");//请检查手机号码是否正确
				   }
                }
            });

	}
}
function checkwrint3(v){
		if ($(v).val()==""||$(v).val()=="邮箱地址"){ 
		$(v).addClass("no");
		$(v).next(".err").html("× 请输入邮箱地址");//邮箱地址不能为空


	}else{
		$(v).removeClass("no");
		$(v).next(".err").html("");
	}
}
function checkwrint4(v){
	  
		if ($(v).val()==""||$(v).val()==""){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入密码");//名称不能为空


	}else if(getLength($(v).val())<6){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 密码不能小于6个字符");//名称不能少于4个字符

	}else if(getLength($(v).val())>16){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 密码不能大于16个字符");//名称不能多于16个字符

	}else {
		$(v).removeClass("no");
		$(v).addClass("ok");
		$(v).next(".err").html("");
}
	}
function checkwrint5(v,v2){
	  
		if ($(v).val()==""||$(v).val()==""){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入确认密码");//名称不能为空

	}else if($(v).val()!=$(v2).val()){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 两次输入的密码不一样");//名称不能少于4个字符

	}else {
		$(v).removeClass("no");
		$(v).addClass("ok");
		$(v).next(".err").html("");
}
	}
function checkwrint6(v){
    var reg = /[^\w\u4e00-\u9fa5]/g;    // 验证用户名正则 
		if ($(v).val()==""||$(v).val()==""){ 
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 请输入验证码");//名称不能为空
	}else if(reg.test($(v).val())){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 验证码不能含有非法字符");//名称不能含有非法字符

	}else if(getLength($(v).val())<2){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("×");//名称不能少于4个字符

	}else if(getLength($(v).val())>8){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("×");//名称不能多于8个字符
	}else if($(v).val()!=code){
		$(v).addClass("no");
		$(v).removeClass("ok");
		$(v).next(".err").html("× 验证码错误");//名称不能多于8个字符

	}else {
		$(v).removeClass("no");
		$(v).addClass("ok");
		$(v).next(".err").html("");
}
	}