<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/rental.css" rel="stylesheet"/>
       <%dim tdkid
tdkid=4%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Letting Service</div>
      <div class="h2">租赁服务</div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="left">
            <div class="title">我要出租</div>
            <div class="txt">
              <% call sHowInfo(2)%>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="left">
            <div class="title">想要租房</div>
            <div class="txt2">我们一直在寻找想要成为我们动态，快节奏的组织的一部分的卓越的专业人士。在我们的全球办事处之一查看职业机会。</div>
            <div class="cbtn">联系我们</div>
          </div>
          <div class="h20"></div>
          <div class="right">
            <div class="title">出租指南</div>
            <div class="txt2"> <a href="#">伦敦住宅出租房东指南</a><br/><a href="#">伦敦住宅出租房东指南</a><br/><a href="#">伦敦住宅出租房东指南</a></div>
          </div>
        </div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>