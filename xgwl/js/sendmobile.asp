<%
dim mobile,content
mobile=request("mobile")
content=request("content")
sendSMS trim(replace(request("mobile"),",",",")),trim(request("content"))
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