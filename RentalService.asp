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
            <div class="cbtn" onclick='openPform(1);'>联系我们</div>
          </div>
      
          <div class="right hidden">
            <div class="title">出租指南</div>
            <div class="txt2"> <a href="#">伦敦住宅出租房东指南</a><br/><a href="#">伦敦住宅出租房东指南</a><br/><a href="#">伦敦住宅出租房东指南</a></div>
          </div>
          <div class="h20 hidden"></div>
          <div class="left">
            <div class="title">热门房源推荐</div>
            <div class="txt3" >
<%'列表
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select top 3 * from [Table_Product] where Passed=1 and elite=1"
sql=sql+" and clbid='11'"
sql=sql+" order by "
sql=sql+"OrderId desc,articleid desc"
rs.Open sql,conn,1,1
i=0
   do while not rs.eof
%>

          <div class="row" style="margin:20px 0;"><a class="li tra wow fadeInUp animated b_c" href="/housedetail/<%=rs("articleid")%>.html">
              <div class="pic tra col-md-6 col-xs-6"><img src="<%if rs("defaultpicurl")="" then%>/xgwl/img/nopic.jpg<%else%>/<%=rs("defaultpicurl")%><%end if%>"/></div>
              <div class="info tra col-md-6 col-xs-6" style="padding-left:0;">
                <div class="tit ellipsis ls1"><%=rs("entitle")%></div>
                <div class="city ellipsis ls1"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
                <div class="price ls2"><%=rs("jgjj")%>万/平</div>
              </div></a></div>

              <%
              rs.movenext
i=i+1
loop
rs.close
set rs=nothing
              %>
              
              <a class="xmore" href="/houseproperty.html" style="margin-right:10px;">查看更多...</a>
              
            </div>
          </div>
            <div class="left">
            <div class="title">最新资讯推荐</div>
            <div class="txt3 " style="padding:20px 10px 0 10px;">


        <%	  
          set rsnew=Server.CreateObject("ADODB.Recordset")
          sqlnew="select top 5 * from [prod] where (classid=25 or classid=26 or classid=27)"
    sqlnew=sqlnew+" order by oid desc,prod_id desc"
      rsnew.Open sqlnew,conn,1,1      
      do while not rsnew.eof%>
<a href="/newsview/<%=rsnew("prod_id")%>.html" target="_blank" class="li2 ellipsis tra"><%=rsnew("prod_name")%></a>
      <%rsnew.movenext
            loop
            rsnew.close
      set rsnew=nothing%>
      <a class="xmore" href="/news/25/1.html">查看更多...</a>

            </div>
          </div>
        </div>
      </div>
    </div>
        <!--#include file="inc/pfrom.asp"-->
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
<script src="xgwl/js/dfrom.js"></script>
<script src="xgwl/js/pfrom.js"></script>
  </body>
</html>