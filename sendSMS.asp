<%
'------------------------------------------------
'username  用户名
'password   密码
'mobile  手机号
'apikey  apikey秘钥
'content  短信内容
'startTime  UNIX时间戳，不写为立刻发送，http://tool.chinaz.com/Tools/unixtime.aspx （UNIX时间戳网站）

'返回值											说明
'success:msgid								提交成功，发送状态请见4.1
'error:msgid								提交失败
'error:Missing username						用户名为空
'error:Missing password						密码为空
'error:Missing apikey						APIKEY为空
'error:Missing recipient					手机号码为空
'error:Missing message content				短信内容为空
'error:Account is blocked					帐号被禁用
'error:Unrecognized encoding				编码未能识别
'error:APIKEY or password error				APIKEY 或密码错误
'error:Unauthorized IP address				未授权 IP 地址
'error:Account balance is insufficient		余额不足
'error:Black keywords is:党中央				屏蔽词
'------------------------------------------------
'1、GBK编码提交的
'首先urlencode短信内容（content），然后在API请求时，带入encode=gbk

'2、UTF-8编码的

'将content 做urlencode编码后，带入encode=utf8或utf-8
'http://m.5c.com.cn/api/send/index.php?username=filter&password=fdsaasdf123&apikey=36e74088db48842ce54ee65643b8667a&mobile=18610310068&content=%E4%BD%A0%E5%A5%BD%E6%89%8DE%6%94%B6%E7%9B%8A%E9%9F%A6&encode=utf8

'示例
%>
<html>
<head>
<title>美联软通二次开发接口HTTP方式ASP调用演示</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
</head>
<body>
<%
If request("m")="send" Then
	'mobile是手机号,只发一个号码：13800000001。发多个号码：13800000001,13800000002,...N 。使用半角逗号分隔。
	'content是发送的短信内容，特别注意：签名必须设置，网页验证码应用需要加添加【图形识别码】，以防被短信攻击。
	sendSMS trim(replace(request("mobile"),",",",")),trim(request("content"))
Else
%>
<form name=form1 method=post action="?m=send" onSubmit="if(this.mobile.value==''){alert('输入接收手机号码');this.mobile.focus();return false}">
<table width="90%" border="0" align="center" cellpadding="1" cellspacing="1" bgcolor="#CCCCCC">
  <tr>
    <td width="80" height="30" align="center" bgcolor="#FFFFFF">手机号码：</td>
    <td bgcolor="#FFFFFF"><input name=mobile type=text value="13764011245"></td>
  </tr>
  <tr>
    <td width="80" height="30" align="center" bgcolor="#FFFFFF">发送内容：</td>
    <td bgcolor="#FFFFFF">&nbsp;<textarea name="content" rows=6 style="width:98%">感谢您注册CBRE，您的验证码是 6528 。请勿将此短信泄露给其他人</textarea></td>
  </tr>
  <tr>
    <td height="30" colspan="2" align="center" bgcolor="#FFFFFF"><input type=submit value="发送短信" id=submit1 name=submit1></td>
    </tr>
</table>
</form>
<%
End If
%>
</body>
</html>
<%
Sub sendSMS(mobile,content)
'多个手机号之间用“,”分隔
dim username,password,status
dim xmlObj,url
username = "xinggangwl"		'用户名
password_md5 = "BD9CE951E90745D9650B24EB052879DA"'"asdf1234q"	'密码
apikey = "522d4ca8cf43bcb73824097dffdc2ba6"  'apikey秘钥（请登录 http://m.5c.com.cn 短信平台-->账号管理-->我的信息 中复制apikey）
encode = "UTF-8" '页面编码和短信内容编码为GBK。重要说明：如提交短信后收到乱码，请将GBK改为UTF-8测试。如本程序页面为编码格式为：ASCII/GB2312/GBK则该处为GBK。如本页面编码为UTF-8或需要支持繁体，阿拉伯文等Unicode，请将此处写为：UTF-8

url="http://m.5c.com.cn/api/send/?apikey="&apikey&"&username="&username&"&password_md5="&password_md5&"&mobile="&mobile&"&content="&content&"&encode="&encode'server.URLEncode(
Set xmlObj = server.CreateObject("Microsoft.XMLHTTP")
xmlObj.Open "POST",url,false
xmlObj.send()
status = xmlObj.responseText
Set xmlObj = nothing
Response.Write status
End sub
%>
