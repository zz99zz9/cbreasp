
<html>
  <head>
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/member.css" rel="stylesheet"/>
    <!--title #{title}-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="container">
      <div class="mform">
        <%if ComeUrl="" then
        ComeUrl=lcase(trim(request.ServerVariables("HTTP_REFERER")))
        end if%>
        <div class="mtit text-center">CBRE会员登录</div>
        <input class="cbreint" placeholder="请输入手机号" type="text" id='logmobile'/>
        <div class="err"></div>
        <input class="cbreint" placeholder="请输入密码" type="password" id='logpassword'/>
        <input type='hidden' value='<%=ComeUrl%>' id='ComeUrl'>
        <div class="err"></div>
        <div class="cbtn" id='logbtn'>立即登录</div>
        <div class="reg">没有帐户，立即&nbsp;<a href="/Register.asp">注册</a></div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
<script src="xgwl/js/dfrom.js"></script>
  </body>
</html>