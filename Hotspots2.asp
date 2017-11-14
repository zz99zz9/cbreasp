<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/hotspots.css" rel="stylesheet"/>
           <%dim tdkid
tdkid=5%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav">
            <a href="hotspots.asp">伦敦</a>
            
            <a  href="hotspots3.asp">悉尼</a>
            <a class="on" href="hotspots2.asp">墨尔本</a>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="map"><img src="xgwl/img/hotspots/moerben.jpg"/></div>
        </div>
        <div class="col-md-5">
          <div class="info" style="background-image:url('xgwl/img/hotspots/ldbg.png');">
            <div class="tit">墨尔本</div>
            <div class="txt">墨尔本是工商业和住宅混合区，港口指墨尔本塔桥至泰晤士河河口之间的地区。整个大墨尔本面积1580平方公里。</div><a class="cbtn " href="hotpotsInfo.asp?c=22">了解更多</a>
          </div>
          <div class="hinfo">
            <ul class="hlist">

              <%'列表
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=1 "
sql=sql+" and clbid='11'"
sql=sql+" and smallclassid='27'"
sql=sql+" order by "
sql=sql+"OrderId desc,articleid desc"
rs.Open sql,conn,1,1
i=0
if rs.bof and rs.eof then
response.write("热区项目整理中……")
else
   do while not rs.eof
%>
              <a class="b_c" href="housedetail.asp?id=<%=rs("articleid")%>" title="<%=rs("entitle")%>">
                <div class="pic"><img src="<%if rs("defaultpicurl")="" then%>xgwl/img/nopic.jpg<%else%><%=rs("defaultpicurl")%><%end if%>"/></div>
                <div class="hinfo">
                  <div class="tit ellipsis"><%=rs("entitle")%></div>
                  <div class="country"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
                  <div class="txt ellipsis"> 均价 <%=rs("jgjj")%>万/平 总价<%=rs("jgzj")%>万起</div>
                </div>
              </a>
          
              <%
              rs.movenext
i=i+1
loop
end if
rs.close
set rs=nothing
              %>


            </ul>
          </div>
        </div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>