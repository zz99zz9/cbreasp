<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="../inc/config.asp"-->
        <%
        lyname=request("lyname")
        lytel=request("lytel")
        lyemail=request("lyemail")
        lytext=request("lytext")
        lyqq=request("lyqq")
        lYsex=request("lYsex")

    conn.execute"INSERT INTO [lyb] (lyname,lytel,lyemail,lytext,lyqq,lYsex) VALUES ('"&lyname&"','"&lytel&"','"&lyemail&"','"&lytext&"','"&lyqq&"','"&lYsex&"')"
    Response.Write("ok")


        %>
