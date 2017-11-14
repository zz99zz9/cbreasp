$(".pform i.pclose").click(function(){
    $(".pform").fadeOut();
    $(".mask").fadeOut();
})
function openPform(){
        $(".pform").fadeIn();
    $(".mask").fadeIn();
}
//鼠标离开验证
    $("#pmobile").blur(function(){checkwrint222(this);});
    $("#pname").blur(function(){checkwrint1(this);});
    $("#pmail").blur(function(){checkwrint3(this);});
    $("#ptxt").blur(function(){checkwrint7(this);});
//提交表单
$("#pbtn").click(function(){
    checkwrint222("#pmobile");
    checkwrint1("#pname");
    checkwrint3("#pmail");
    checkwrint7("#ptxt");
    var pdata={
        lyname:$("#pname").val(),
        lytel:$("#pmobile").val(),
        lyemail:$("#pmail").val(),
        lYsex:$("#pfid").val(),
        lytext:$("#ptxt").val(),
        lyqq:2

    }
    	if ($("#pmobile").hasClass("no")||$("#pname").hasClass("no")||$("#pmail").hasClass("no")||$("#ptxt").hasClass("no")){
	//	console.log("信息不完善，无法提交")
	}else{
    $(".pform").fadeOut();
    $(".mask").fadeOut();
  //  console.log(pdata)
     $.post("/api/pfrom.asp",pdata,
            function(data,status){
                if(status=="success"){
				   if(data=='has'){
						alert("此手机号已经提交过了!");//请检查手机号码是否正确
				   }else if(data=='ok'){
                       alert("提交成功，我们将尽快和您联系！")
		$("#pmobile").val("");
		$("#pname").val("");
	   $("#pmail").val("");
       $("#ptxt").val("");
				   }
                }
            });
   // alert("提交成功，我们将尽快和您联系！");
    }

})