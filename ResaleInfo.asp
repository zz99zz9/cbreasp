<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/resale.css" rel="stylesheet"/>
    <link href="xgwl/css/pages/resaleInfo.css" rel="stylesheet"/>
   <%dim tdkid
tdkid=3%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Resale</div>
      <div class="h2">二手房</div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="left">
            <!--<div class="title">二手房</div>-->
            <div class="txt">
             <!---->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="rightbtn b_c tra">
            <div class="tit">我想卖</div>
            <div class="txt2">我们一直在寻找想要成为我们动态</div>

          </div>
          <a class="rightbtn rightbtn2 b_c tra" href="Resale.asp">
            <div class="tit">我想买</div>
            <div class="txt2">我们一直在寻找想要成为我们动态</div>
       
          </a>
        </div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>