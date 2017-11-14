<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="../../inc/config.asp"-->
<%content=request("content")
gsjsid=request("gsjsid")
type_wj=request("type_wj")
if gsjsid="0" then
conn.execute"INSERT INTO [gsjs] (gsjstext,type_wj) VALUES ('"&content&"','"&type_wj&"')"
else
conn.execute"update gsjs set gsjstext='"&content&"',type_wj='"&type_wj&"' where gsjsid="&gsjsid&""
end if
%>ok