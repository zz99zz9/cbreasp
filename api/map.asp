<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="../inc/config.asp"-->
<!--#include file="../inc/inc.asp"-->
<%
dim i,key,sql,rs,msg,tit,list,pushlist
key=request("key")
'读取热区信息
set rsprod=Server.CreateObject("ADODB.Recordset")
sqlprod="select * from [prod] where prod_name='"&key&"'"
rsprod.Open sqlprod,conn,1,1

if not(rsprod.bof and rsprod.eof) then
info=RemoveHTML(rsprod("prod_detailen"))
img=rsprod("prod_pic")
url="/hotspotsview/"&rsprod("prod_id")&".html"
else
'暂无该热区信息
end if
 rsprod.close
 set rsprod=nothing

'读取热区项目
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where ctdname='"&key&"'"
rs.Open sql,conn,1,1
if not(rs.bof and rs.eof) then
i=1
state="ok"
msg="读取成功"
tit=key
do while not rs.eof
pushlist="{'tit':'"&rs("entitle")&"','cc':'"&rs("bigclassname")&"/"&rs("smallclassname")&"','jg':'均价 "&rs("jgjj")&"元\平 总价"&rs("jgzj")&"万起','img':'/"&rs("defaultpicurl")&"','url':'/housedetail/"&rs("articleid")&".html'}"
'{"tit":rs("entitle"),"cc":rs("bigclassname")&"、"&rs("smallclassname"),"jg":rs("jjzj")&"、"&rs("jgjj"),"img":rs("defaultpicurl"),"url":"/housedetail/"&rs("articleid")&".html"}
if i>1 then pushlist=","&pushlist
list=list+pushlist
rs.movenext
i=i+1
loop
else
state="err"
msg="没有该区项目"
end if
 rs.close
 set rs=nothing

%>
{'msg':'<%=msg%>','state':'<%=state%>""','tit':'<%=key%>','txt':'<%=info%>','img':'<%=img%>','url':'<%=url%>','list':[<%=list%>]}