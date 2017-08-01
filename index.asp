<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
<!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
    <!--#include file="./inc/head.asp"-->
<%dim tdkid
tdkid=1%>
<!--#include file="./inc/tdk.asp"-->
    <link href="/xgwl/css/pages/index.css" rel="stylesheet"/>
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="ed">
      <div class="carousel slide" id="carousel-example-generic" data-ride="carousel">
        <ol class="carousel-indicators">
          <li class="active" data-target="#carousel-example-generic" data-slide-to="0"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <%Set prs= Server.CreateObject("ADODB.Recordset")
        psql="select top 3 * From [links] where wid=1 order by oid desc,ID desc"
        prs.open psql,conn,1,1
        i=0%>
        <%do while not prs.eof%>
           <div class="item <%if i=0 then%>active<%end if%>" onclick="window.location.href='<%=prs("url")%>';" style="background:url(<%=prs("file")%>);">
<div class="carousel-caption">
             <h1><%=prs("stit")%></h1>
             </div>
              <!--<p class="tra"><%=prs("stxt")%></p>
               <a href="<%=prs("url")%>" class="tra a"><span>查看详情</span><em class="more-arr">&gt;</em></a>
            <em class="bgmask tra"></em>-->
          </div>
         <%
        	i=i+1
        prs.movenext
        	loop
        prs.close
        set prs=nothing
        %>
          
        </div>
        <!--<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>-->
      </div>
      <div class="searchbor hidden-sm hidden-xs">
        <ul>
          <li class="v1 on">新房</li>
          <li class="v2">二手房</li>
          <li class="v3">市场报告</li>
        </ul>
        <div class="inputbor"><i class="sarr tra"></i>
          <input class="sint" type="text" placeholder="请输入国家，如英国、澳大利亚等，或项目名称"/>
          <input class="skid" type="hidden" value="1"/><span class="sbtn">开始搜索</span>
        </div>
      </div>
    </div>
    <div class="part1 featured">
      <div class="container">
        <div class="plititbor"><span class="etit">FEATURED PROPERTIES</span><a class="more hidden-xs" href="/houseproperty.html">更多</a><span class="ctit">精选新房</span></div>
        <div class="row featured">
        <%'列表
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select top 3 * from [Table_Product] where Passed=1 and elite=1"
sql=sql+" and clbid='11'"
sql=sql+" order by "
sql=sql+"OrderId desc,articleid desc"
rs.Open sql,conn,1,1
i=0
   do while not rs.eof
   if rs("jgjj")=0 then
   jgjj="价格待定"
   else
   jgjj=rs("jgjj")&"元/平"
   end if
%>

          <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated" href="housedetail/<%=rs("articleid")%>.html">
              <div class="pic tra"><img src="<%if rs("defaultpicurl")="" then%>xgwl/img/nopic.jpg<%else%><%=rs("defaultpicurl")%><%end if%>"/>
                <span class="status1"><%=rs("clxname")%></span>
                <div class="pmask tra"><span class="ls2"><%=jgjj%></span></div>
              </div>
              <div class="info tra">
                <div class="tit ellipsis ls1"><%=rs("entitle")%></div>
                <div class="city ellipsis ls1"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
                <div class="kid ellipsis ls1">物业类型：<%=rs("ckfsname")%> </div>
              </div></a></div>
              <%
              rs.movenext
i=i+1
loop
rs.close
set rs=nothing
              %>
        </div>
      </div>
    </div>
    <div class="part2 featured hidden">
      <div class="container">
        <div class="plititbor"><span class="etit">HOT SECOND-HAND HOUSE</span><a class="more hidden-xs" href="http://www.cbre.com">更多</a><span class="ctit">热门二手房</span></div>
        <div class="row second">
          <div class="col-md-3 col-sm-3"><a class="li tra b_c wow fadeInUp animated" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part22.png"/>
                <div class="price tra ls1">30000元
                  <div class="parr"></div>
                </div>
              </div>
              <div class="info tra">
                <div class="tit ellipsis">124 South College Street</div>
                <div class="city ellipsis">国家/伦敦 伦敦一区</div>
                <div class="finfo ellipsis">2室2厅 120平方</div>
              </div></a></div>
          <div class="col-md-3 col-sm-3"><a class="li tra b_c wow fadeInUp animated" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part21.png"/>
                <div class="price tra ls1">30000元
                  <div class="parr"></div>
                </div>
              </div>
              <div class="info tra">
                <div class="tit ellipsis">124 South College Street</div>
                <div class="city ellipsis">国家/伦敦 伦敦一区</div>
                <div class="finfo ellipsis">2室2厅 120平方</div>
              </div></a></div>
          <div class="col-md-3 col-sm-3"><a class="li tra b_c wow fadeInUp animated" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part23.png"/>
                <div class="price tra ls1">30000元
                  <div class="parr"></div>
                </div>
              </div>
              <div class="info tra">
                <div class="tit ellipsis">124 South College Street</div>
                <div class="city ellipsis">国家/伦敦 伦敦一区</div>
                <div class="finfo ellipsis">2室2厅 120平方</div>
              </div></a></div>
          <div class="col-md-3 col-sm-3"><a class="li tra b_c wow fadeInUp animated" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part24.png"/>
                <div class="price tra ls1">30000元
                  <div class="parr"></div>
                </div>
              </div>
              <div class="info tra">
                <div class="tit ellipsis">124 South College Street</div>
                <div class="city ellipsis">国家/伦敦 伦敦一区</div>
                <div class="finfo ellipsis">2室2厅 120平方</div>
              </div></a></div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="lean wow fadeInUp animated">
              <div class="info ls2">从投资交易和租赁服务，<br>为您的资产增值和您的投资收益保驾护航。</div><br/><a class="abtn tra" href="RentalService.html">租赁服务</a> <a class="abtn tra abtn2" href="ResaleInfo.html">二 手 房</a>
            </div>
          </div>
          <div class="col-md-6 hidden-xs">
            <div class="leaned b_c tra wow fadeInUp animated"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="part4">
      <div class="container">
        <div class="row">
          <div class="col-md-4 wow fadeInUp animated b_c1 tra"><a class="li1" href="hotspotsInfo.html">
              <div class="pic"><img src="xgwl/img/Research_Collage 4-17-900x660.jpg"/></div>
              <div class="info ls1">
                <div class="tit">投资热区</div>
                <div class="txt">聚焦投资热点，甄选潜力区域</div>
                <div class="infobtn">了解详情 <span class="arr tra">&gt;</span></div>
              </div></a></div>
          <div class="col-md-4 wow fadeInUp animated b_c1 tra"><a class="li2" href="news/27/1.html">
              <div class="pic"><img src="xgwl/img/Milestones_Collage 900x660.png"/></div>
              <div class="info ls1">
                <div class="tit">最新资讯</div>
                <div class="txt">网罗最新活动资讯，实时分享市场动态</div>
                <div class="infobtn">了解详情 <span class="arr tra">&gt;</span></div>
              </div></a></div>
          <div class="col-md-4 wow fadeInUp animated b_c1 tra"><a class="li3" href="MarketReport/18/1.html">
              <div class="pic"><img src="xgwl/img/2016 Annual Report collage 900x660.jpg"/></div>
              <div class="info ls1">
                <div class="tit">研究报告</div>
                <div class="txt">深度洞察 权威报告<br>助力做出投资决策</div>
                <div class="infobtn">了解详情 <span class="arr tra">&gt;</span></div>
              </div></a></div>
        </div>
      </div>
    </div>
    <!--<iframe id="portal" src="http://iframe.ondicomdigital.com/cbre-cn/?lang=cn&amp;projectID=a049000000LTRw0&amp;projectName=TestProject&amp;retUrl=http%3A%2F%2Fmydomain%2Fregister%2Fdefault.aspx%3Fsk%3Dsuccess%23thankyou" width="100%" height="500" frameborder="0" scrolling="no"></iframe>-->
<!--#include file="inc/pfrom.asp"-->
    <!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="xgwl/js/pfrom.js"></script>
  </body>
</html>