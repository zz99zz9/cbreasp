<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->
    <link href="/xgwl/css/pages/hotspots.css" rel="stylesheet"/>
           <%dim tdkid
tdkid=5

cid=request.QueryString("c")%>
<!--#include file="./inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="./inc/header.asp"-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="nav">
            <a class="<%if cid=1 then%>on<%end if%>" href="/hotspots/1.html">伦敦</a>
            <a class="<%if cid=2 then%>on<%end if%>" href="/hotspots/2.html">悉尼</a>
            <!--<a href="hotspots2.asp">墨尔本</a>-->
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <%if cid=1 then%>
          <div class="map"><img src="/xgwl/img/london2.0.jpg"/>
            <i class="point pt1" title="Hammersmith 哈默史密斯"></i>
            <i class="point pt2" title="Fulham 富勒姆"></i>
            <i class="point pt3" title="Mayfair 梅菲尔"></i>
            <i class="point pt4" title="Fitzrovia 费兹罗维亚"></i>
            <i class="point pt5" title="Nine Elms 九榆树"></i>
            <i class="point pt6" title="Covent Garden 科文特花园"></i>
            <i class="point pt7" title="Southbank 泰晤士河南岸"></i>
            <i class="point pt8" title="The City 伦敦金融城"></i>
            <i class="point pt9" title="Wapping 沃平"></i>
            <i class="point pt10" title="The Docklands 码头区"></i>
          </div>
          <%elseif cid=2 then%>
          <div class="map"><img src="/xgwl/img/xini2.0.jpg"/>
            <i class="point xn1" title="Sydney CBD 悉尼中心商务区"></i>
            <i class="point xn2" title="Eastern Sydney 悉尼东区"></i>
            <i class="point xn3" title="Sydney Inner West 悉尼内西区"></i>
            <i class="point xn4" title="South Sydney 悉尼南区"></i>
            <i class="point xn5" title="Sydney Upper North Shore 悉尼上北区"></i>
          </div>
          <%end if%>
        </div>
        <div class="col-md-5">
<%if cid=1 then%>
          <div class="info" style="background-image:url('/xgwl/img/hotspots/ldbg.png');">
            <div class="tit">伦敦</div>
            <div class="txt ellipsis2">伦敦是工商业和住宅混合区，港口指伦敦塔桥至泰晤士河河口之间的地区。整个大伦敦面积1580平方公里。</div><a class="cbtn " href="/hotspotsinfo/1.html" target="_blank">了解更多</a>
          </div>
<%elseif cid=2 then%>
<div class="info" style="background-image:url('/xgwl/img/hotspots/ldbg.png');">
            <div class="tit ">悉尼</div>
            <div class="txt ellipsis2">悉尼是工商业和住宅混合区，港口指悉尼塔桥至泰晤士河河口之间的地区。整个大悉尼面积1580平方公里。</div><a class="cbtn " href="/hotspotsinfo2/1.html" target="_blank">了解更多</a>
          </div>
<%end if%>
          <div class="hinfo">
            <ul class="hlist">
              <%'列表
            if cid=1 then scid=24
            if cid=2 then scid=28
            if cid="" then scid=24
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=1 "
sql=sql+" and clbid='11'"
sql=sql+" and smallclassid='"&scid&"'"
sql=sql+" order by "
sql=sql+"OrderId desc,articleid desc"
rs.Open sql,conn,1,1
i=0
   do while not rs.eof
%>
              <a class="b_c" href="housedetail.asp?id=<%=rs("articleid")%>" title="<%=rs("entitle")%>">
                <div class="pic"><img src="/<%if rs("defaultpicurl")="" then%>xgwl/img/nopic.jpg<%else%><%=rs("defaultpicurl")%><%end if%>"/></div>
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
rs.close
set rs=nothing
              %>


            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 hidden-xs" style="line-height:200%;">热区关键词：<br>
          <%
          if cid=1 or cid="" then clid=20
          if cid=2 then clid=21
          set rsnew=Server.CreateObject("ADODB.Recordset")
            sqlnew="select * from [prod] where classid="&clid
            rsnew.Open sqlnew,conn,1,1
            do while not rsnew.eof%>
            <a href="/hotspotsview/<%=rsnew("prod_id")%>.html" class="requ" target="_blank"><%=rsnew("prod_name")%></a>
            <%rsnew.movenext
        	i=i+1
            loop
     %>
        </div>
      </div>
    </div>
     <!--#include file="./inc/pfrom.asp"-->
<!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
<script src="/xgwl/js/map.js"></script>
  </body>
</html>