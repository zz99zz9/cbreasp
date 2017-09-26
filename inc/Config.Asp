<%
dim SqlLocalName
dim SqlUserName
Dim SqlPassword
Dim SqlDataBaseName

dim Ser
ser=12
if ser=1 then
SqlLocalName="cnazcsqlsrv01.database.chinacloudapi.cn"            '链接用IP,本地用LOCAL,,远程用IP  测试:(local) 
 SqlUserName="srvadmin"                  '用户名  测试:sa 
SqlPassword="*De3gTZP8eA>?Xx>"              '用户密码  测试:123456 
SqlDataBaseName="cbre"            '数据库名称  测试:cbre 
else
SqlLocalName="(local)"            '链接用IP,本地用LOCAL,,远程用IP  测试:(local) 
 SqlUserName="sa"                  '用户名  测试:sa 
SqlPassword="123456"              '用户密码  测试:123456 
SqlDataBaseName="cbre"            '数据库名称  测试:cbre 
end if


connstr="Provider=SqlOLEDB;User ID="&SqlUserName&";Password="&SqlPassword&";Initial cataLog="&SqlDataBaseName&"; Data source="&SqlLocalName&";"
Set Conn=Server.CreateObject("ADODB.Connection")
Conn.Open connstr


Set oRs=Server.CreateObject("ADODB.Recordset")
oRs.Open "select * from Table_SiteInfo ",conn,1,1
SiteName=oRs("Sitename")				'网站名称
SiteTitle=oRs("SiteTitle")				'网站标题
siteKey=oRs("SiteKey")					'网站关键字
SiteCont=oRs("SiteCont")				'网站描述
SiteURl=oRs("SiteURl")					'网站地址
SiteCopyRight=oRs("SiteCopyRight")		'网站版权信息
SiteBeiAn=oRs("SiteBeiAn")				'网站备案信息
WebmasterName=oRs("WebmasteRName")      '站长姓名
WebmasterEmail=oRs("WebmasteREmail")    '站长信箱
CoName=oRs("CoName")					'企业名称
CoTel=oRs("CoTel")						'企业电话
CoFax=oRs("CoFax")						'企业传真
CoMail=oRs("CoMail")					'企业传真
CoAddr=oRs("CoAddr")					'企业地址
CoCode=oRs("CoCode")					'企业邮编
oRs.close
set oRs=Nothing
QQ="897358445"


%>