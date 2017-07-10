<script>
    alert("您已安全退出，系统将返回首页！")
</script>
<%
response.cookies("username")=""
response.cookies("usermobile")=""
Response.Redirect "index.Asp"
Response.End()
%>