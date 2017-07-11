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
        pname:$("#pname").val(),
        pmobile:$("#pmobile").val(),
        pmail:$("#pmail").val(),
        pfid:$("#pfid").val(),
        pfid:$("#ptxt").val()
    }
    	if ($("#pmobile").hasClass("no")||$("#pname").hasClass("no")||$("#pmail").hasClass("no")||$("#ptxt").hasClass("no")){
		console.log("信息不完善，无法提交")
	}else{
    $(".pform").fadeOut();
    $(".mask").fadeOut();
    console.log(pdata)
    alert("提交成功，我们将尽快和您联系！");
    }

})