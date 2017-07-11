<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="../inc/config.asp"-->
        <%
        lyname=request("lyname")
        lytel=request("lytel")
        lyemail=request("lyemail")
        lytext=request("lytext")
        lyqq=request("lyqq")

        set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [lyb] where lytel='"&lytel&"' and lytel='"&lytel&"'",conn,1,3
	If not(rs.Eof And rs.Bof) Then
	 Response.Write("has")
	response.end()
    else
    conn.execute"INSERT INTO [lyb] (lyname,lytel,lyemail,lytext,lyqq) VALUES ('"&lyname&"','"&lytel&"','"&lyemail&"','"&lytext&"','"&lyqq&"')"
    Response.Write("ok")
	end if
	rs.close
	set rs=nothing
        %>
