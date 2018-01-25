<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="../inc/config.asp"-->
<!--#include file="../inc/md5.asp"-->
<%
username=trim(request("username"))
userpassword=trim(request("userpassword"))
usermobile=trim(request("usermobile"))
Action=trim(request("Action"))

select case Action
  case "list"
  
    case "login"


    set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [member] where usermobile='"&usermobile&"' and userpassword='"&md5(userpassword)&"'",conn,1,3

	If not(rs.Eof And rs.Bof) Then
    response.cookies("username")=trim(rs("username"))
response.cookies("usermobile")=trim(rs("usermobile"))
	 Response.Write("loginok")
	response.end()
    else
    response.write("err")
	end if
	rs.close
	set rs=nothing
  case "add"
conn.execute"INSERT INTO [member] (usermobile,userpassword,username) VALUES ('"&usermobile&"','"&md5(userpassword)&"','"&username&"')"
response.cookies("username")=username
response.cookies("usermobile")=usermobile
  case "mod"
  'conn.execute"update ["&Table&"] set CName='"&CName&"',OID="&OID&",Cdate='"&now()&"',CFile='"&CFile&"' where Cid="&CID&""

  case "del"
  '可加判断是否删除
  conn.execute "delete from [member] where id="&Trim(ID)  

  case else
    	sql="select usermobile from member where usermobile='"&usermobile&"'"  ' 查询数据库中是否有重复记录
	
	set rs = conn.execute(sql)

	If not(rs.Eof And rs.Bof) Then
	 Response.Write("has")
	response.end()
	end if
	rs.close
	set rs=nothing
 end select
%>