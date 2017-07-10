<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->

    <link href="xgwl/css/pages/marketreport.css" rel="stylesheet"/>
    <!--数据链接-->
<%pro_id=request.QueryString("id")
call SafeRequest(pro_id)
set rsnew=Server.CreateObject("ADODB.Recordset")
sql="select * from [prod] where prod_id="&pro_id
rsnew.Open sql,conn,1,1
Counter=rsnew("Counter")+1
update="UPDATE [prod] SET [counter]="&Counter&" WHERE prod_id="&pro_id
'response.write rsnew("Counter")
conn.execute update
t=rsnew("title2")
k=rsnew("Keywords")
d=rsnew("Description")%>
    <title><%=t%></title>
    <meta name="Keywords" content="<%=k%>"/>
    <meta name="Decription" content="<%=d%>"/>
<!--数据链接结束-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Market Report</div>
      <div class="h2">市场报告</div>
    </div>
    <div class="container"></div>
    <div class="h50"></div>
    <div class="main"> 
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h1><%=rsnew("prod_name")%></h1>
            <div class="txt"><%=RemoveHTML(rsnew("prod_detailen"))%></div>
            <%if request.cookies("username")="" then%>
            <a class="cbtn down" href='/Login.asp' target='_blank'>登录后即可下载</a>
            <%else%>
            <a class="cbtn down" href='<%=rsnew("prod_pic2")%>' target='_blank'>立即下载</a>
            <%end if%>
          </div>
          <div class="col-md-3">
            <div class="login">
              <%if request.cookies("username")="" then%>
              <div class="tit">登录或注册查看下载报告</div><a class="cbtn" href="/Login.asp">登录</a><a class="cbtn" href="/Register.asp">注册</a>
              <%else%>
              <div class="tit">当前登录用户 <%=request.cookies("username")%></div><a class="cbtn" href="/quit.asp">安全退出</a>
              <%end if%>
            </div>
            <div class="contact">
              <div class="tit">想了解更多请联系我们</div><a class="cbtn1" href='#'>联系我们</a>
            </div>
            <div class="aboutmore">
              <div class="tit">了解更多资讯</div><a class="cbtn" href='/news.asp'>查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>