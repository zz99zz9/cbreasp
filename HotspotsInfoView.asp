<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/news.css" rel="stylesheet"/>
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
      <div class="h1">Investment hotspots</div>
      <div class="h2">投资热区</div>
    </div>
    <div class="main"> 
      <div class="container">

<div class="ntit"><%=rsnew("prod_name")%></div>
<div class="ntime"><%=formatdatetime(rsnew("prod_date"),2)%></div>
<!-- sharebar button begin -->
<div class="bshare-custom icon-medium"><div class="bsPromo bsPromo2"></div><a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a><a title="分享到新浪微博" class="bshare-sinaminiblog" href="javascript:void(0);"></a><a title="分享到Facebook" class="bshare-facebook" href="javascript:void(0);"></a><a title="分享到Twitter" class="bshare-twitter" href="javascript:void(0);"></a><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count" style="float: none;">51.7K</span></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>
<!-- sharebar button end -->
<div class="ninfo"><%=RemoveHTML(rsnew("prod_detailen"))%></div>
<div class="ntxt"><%=rsnew("prod_detail")%>

</div>
<div class="tips" style="font-size:14px;">

<%
if rsnew("tips")<>"" then
response.write"标签："
mystr=rsnew("tips")
mystr=replace(mystr,"，",",")
mystr=split(mystr,",")
for i=0 to ubound(mystr)
'if i>0 then response.write" \ "
response.write "<a href='newssearch.asp?k="&mystr(i)&"' class='tipsinfo' target='_blank'>"&mystr(i)&"</a>"
next
end if  %>
</div>
                  	<div class="pn"><%call sHowDxNewsPN(rsnew("classid"),pro_id)%></div>
                                                <%   	rsnew.close
                                    	set rsnew=nothing%>
                                        
                                              <div class="dinfo" id="f5">
        <div class="dtit">热门推荐</div>
        <div class="dtxt row morehouse">
          <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated b_c" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part1.png"/></div>
              <div class="info tra">
                <div class="tit ellipsis ls1">124 South College Street</div>
                <div class="addr ellipsis ls1">Level 5, 151 Pirie Street Adelaide, SA 5000</div>
                <div class="city ellipsis ls1">国家/伦敦</div>
                <div class="kid ellipsis ls1">物业类型：住宅/别墅 </div>
                <div class="price ls2">30000元/平</div>
              </div></a></div>
          <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated b_c" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part2.png"/></div>
              <div class="info tra">
                <div class="tit ellipsis ls1">124 South College Street</div>
                <div class="addr ellipsis ls1">Level 5, 151 Pirie Street Adelaide, SA 5000</div>
                <div class="city ellipsis ls1">国家/伦敦</div>
                <div class="kid ellipsis ls1">物业类型：住宅/别墅 </div>
                <div class="price ls2">40000元/平</div>
              </div></a></div>
          <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated b_c" href="#">
              <div class="pic tra"><img src="xgwl/img/temp/part3.png"/></div>
              <div class="info tra">
                <div class="tit ellipsis ls1">124 South College Street</div>
                <div class="addr ellipsis ls1">Level 5, 151 Pirie Street Adelaide, SA 5000</div>
                <div class="city ellipsis ls1">国家/伦敦</div>
                <div class="kid ellipsis ls1">物业类型：住宅/别墅 </div>
                <div class="price ls2">40000元/平</div>
              </div></a></div>
        </div>
      </div>

</div>

    
    

      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>