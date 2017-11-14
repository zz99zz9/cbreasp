<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->

    <link href="/xgwl/css/pages/marketreport.css" rel="stylesheet"/>
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
<!--#include file="./inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Market Report</div>
      <div class="h2">市场报告</div>
    </div>

    <div class="mbx hidden-xs"><div class="container"><a href="/">首页</a> &gt; <a href="/marketreport/<%=rsnew("classid")%>/1.html"><%call showName("class_prod",rsnew("classid"),"cid","cname")%>市场报告</a> &gt; <a href="/newsview/<%=pro_id%>.html"><%=rsnew("prod_name")%></a> </div></div>
    <div class="container"></div>
    <div class="h50"></div>
    <div class="main"> 
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <h1><%=rsnew("prod_name")%></h1>
            <!-- sharebar button begin -->
<div class="bshare-custom icon-medium" ><div class="bsPromo bsPromo2"></div><a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a><a title="分享到新浪微博" class="bshare-sinaminiblog" href="javascript:void(0);"></a><a title="分享到Facebook" class="bshare-facebook" href="javascript:void(0);"></a><a title="分享到Twitter" class="bshare-twitter" href="javascript:void(0);"></a><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count" style="float: none;">51.7K</span></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>
<!-- sharebar button end -->
            <div class="txt"><%=RemoveHTML(rsnew("prod_detailen"))%></div>
            <%if request.cookies("username")="" then%>
            <a class="cbtn down" href='/Login.html' target='_blank'>登录后即可下载</a>
            <%else%>
            <a class="cbtn down" href='/<%=rsnew("prod_pic2")%>' target='_blank'>立即下载</a>
            <%end if%>
          </div>
          <div class="col-md-3">
            <div class="login">
              <%if request.cookies("username")="" then%>
              <div class="tit">登录或注册查看下载报告</div><a class="cbtn" href="/Login.html">登录</a><a class="cbtn" href="/Register.html">注册</a>
              <%else%>
              <div class="tit">当前登录用户 <%=request.cookies("username")%></div><a class="cbtn" href="/quit.html">安全退出</a>
              <%end if%>
            </div>
            <div class="contact">
              <div class="tit">想了解更多请联系我们</div><a class="cbtn1" href='javascript:openPform(1);' >联系我们</a>
            </div>
            <div class="aboutmore">
              <div class="tit">了解更多资讯</div><a class="cbtn" href='/news.html'>查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--#include file="./inc/pfrom.asp"-->
<!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
  </body>
</html>