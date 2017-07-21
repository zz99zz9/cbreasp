
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
        <div class="mtit">CBRE会员注册<a href="/Login.asp">已有账号，去登录</a></div>
        <input class="msend"  type="button" value="发送验证码" id='regcheckbtn'/><!--onclick="time(this)"-->
        <input class="cbreint tra" placeholder="请输入手机号" type="text" id='regmobile'/>
        <div class="err"></div>
        <input class="cbreint tra" placeholder="请输入短信验证码" type="text" id='regcheck'/>
        <div class="err"></div>
        <input class="cbreint tra" placeholder="姓名" type="text" id='regname'/>
        <div class="err"></div>
        <input class="cbreint tra" placeholder="请输入密码" type="password" id='regpassword'/>
        <div class="err"></div>
        <input class="cbreint tra" placeholder="请再次输入密码" type="password" id='regpassword2'/>
        <input type='hidden' value='<%=ComeUrl%>' id='ComeUrl'>
        <div class="err"></div>
        <div class="cbtn" id='regbtn'>立即注册</div>
      </div>
    </div>
    <!--#include file="inc/pfrom.asp"-->
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
<script src="xgwl/js/dfrom.js"></script>
<script src="xgwl/js/pfrom.js"></script>
  </body>
</html>