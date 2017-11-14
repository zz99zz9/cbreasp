<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->
    <link href="/xgwl/css/pages/about.css" rel="stylesheet"/>
   <%dim tdkid,id
   id=request.QueryString("id")
   'if id<>9 and id<>12 and id<>13 and id<>14 and id<>27 then id=9
   select case id
   case 9
   tdkid=10
    case 12
   tdkid=11
      case 13
   tdkid=12
   case 14
   tdkid=13
      case 27
   tdkid=14
   case else
   tdkid=10
   id=9
   end select
%>
<!--#include file="./inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="./inc/header.asp"-->
    <div class="led"> 
      <div class="h1">About CBRE</div>
      <div class="h2">关于CBRE</div>
    </div>
     <div class="mbx hidden-xs"><div class="container"><a href="/">首页</a> &gt; <a href="/about/1.html">关于CBRE</a> &gt; <a href="/about/<%=id%>.html"><% call sHowInfotit(id)%></a></div></div>
    <div class="container">
      <div class="row">
                <div class="col-md-3">
<ul class="amenu">
  <a href="/about/9.html" class="<%if id=9 then%>on<%end if%>">概览</a>
<a href="/about/12.html" class="<%if id=12 then%>on<%end if%>">企业信息</a>
<a href="/about/13.html" class="<%if id=13 then%>on<%end if%>">愿景和价值观</a>
<a href="/about/14.html" class="<%if id=14 then%>on<%end if%>">案例分析</a>
<a href="/about/27.html" class="<%if id=27 then%>on<%end if%>">荣誉与领导力</a></ul>

        </div>
        <div class="col-md-9">
          <div class="left">

            <div class="txt">
             <% call sHowInfo(id)%>
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