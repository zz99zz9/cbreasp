<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->

    <link href="/xgwl/css/pages/HouseDetail.css" rel="stylesheet"/>
    <%id=request.QueryString("id")
%>
<%set Rs=Server.CreateObject("ADODB.Recordset")
if id="" then
  sql="select * from [Table_Product]"
  else
  sql="select * from [Table_Product] where articleid="&id
  end if
'  sql=sql+"and SmallClassId="&mapid
  sql=sql+" order by Orderid"
 Rs.Open sql,conn,1,1
 t=rs("title2")
k=rs("Keywords")
d=rs("Description")%>
    <title><%=t%></title>
    <meta name="Keywords" content="<%=k%>"/>
    <meta name="Decription" content="<%=d%>"/>
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="housepic">
      <div class="carousel slide" id="carousel-example-generic" data-ride="carousel">
        <ol class="carousel-indicators">
          <li class="active hidden" data-target="#carousel-example-generic" data-slide-to="0"></li>
          <!--<li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>-->
        </ol>
        <div class="carousel-inner" role="listbox">

           <div class="item active" style="background:url(<%if rs("defaultpicurl2")<>"" then%>/<%=rs("defaultpicurl2")%><%else%>/UploadFiles/201707111951239041.jpg<%end if%>);"></div>

        </div>
          <%if rs("jgjj")=0 then
   jgjj="待定"
   else
   jgjj=rs("jgjj")&"元/m²"
   end if%>
        <div class="baseinfo"> 
          <div class="tit"><%=rs("entitle")%></div>
          <div class="country"><%=rs("bigclassname")%> / <%=rs("smallclassname")%><span class="status1"><%=rs("clxname")%></span></div>
          <div class="txt">所属热区：<span class="txtv"><%=rs("ctdname")%></span></div>
          <div class="txt">物业类型：<span class="txtv"><%=rs("ckfsname")%></span></div>
          <div class="txt">面积均价：<span class="txtv"><%=jgjj%></span></div>
          <div class="txt">项目地址：<span class="txtv"><%=rs("qt")%></span></div>
          <div class="infoc">
            <%if rs("jgzj")="0" or rs("jgzj")="" then%>
<div class="price">价格待定</div>
            <%else%>
            <%if rs("jgzj2")="0" or rs("jgzj2")="" then%>
            <div class="price"><%=rs("jgzj")%><em>万起</em><!---<%=rs("jgzj2")%><em>万</em>--></div>
            <%else%>
            <div class="price"><%=rs("jgzj")%><em>万</em>~<%=rs("jgzj2")%><em>万</em></div>
            <%end if%>
            <%end if%>
            <span class="cbtn tra" onclick="openPform(1);"><%if rs("clxid")=7 then%>抢购房源<%else%>联系我们<%end if%></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mbx hidden-xs"><div class="container"><a href="/">首页</a> &gt; <a href="/houseproperty.html">新房</a> &gt; <a href="/housedetail/<%=id%>.html"><%=rs("entitle")%></a> <!-- sharebar button begin -->
<div class="bshare-custom icon-medium" ><div class="bsPromo bsPromo2"></div><a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a><a title="分享到新浪微博" class="bshare-sinaminiblog" href="javascript:void(0);"></a><a title="分享到Facebook" class="bshare-facebook" href="javascript:void(0);"></a><a title="分享到Twitter" class="bshare-twitter" href="javascript:void(0);"></a><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count" style="float: none;">51.7K</span></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>
<!-- sharebar button end --></div></div>
    <div class="container">

      <ul class="housenav"><a class="topLink on" href="#f2">项目图片</a><a class="topLink" href="#f1">项目介绍</a><a class="topLink" href="#f3">地理位置</a><a class="topLink" href="#f4">主力户型</a><a class="topLink hidden-xs" href="#f5">其他推荐</a></ul>

      <div class="dinfo" id="f2">
        <div class="dtit">项目图片</div>
        <div class="dtxt"> 
          <!--新的轮播样式-->
          <link href="/xgwl/css/lib/swiper-3.4.0.min.css" rel="stylesheet"/>
          
    <style>
    .pc-slide {
	width: 100%;
	margin: 0 auto;
}

.view .swiper-container {
	width: 100%;
	height: 540px;
}
.view .swiper-container img{
	width: 100%;
  height:100%;

}
.view .arrow-left {
	background: url(/xgwl/img/index_tab_l.png) no-repeat left top;
	position: absolute;
	left: 10px;
	top: 50%;
	margin-top: -25px;
	width: 28px;
	height: 51px;
	z-index: 10;
}

.view .arrow-right {
	background: url(/xgwl/img/index_tab_r.png) no-repeat left bottom;
	position: absolute;
	right: 10px;
	top: 50%;
	margin-top: -25px;
	width: 28px;
	height: 51px;
	z-index: 10;
}

.preview {
	width: 100%;
	margin-top: 10px;
	position: relative;
}

.preview .swiper-container {
	width: 680px;
	height: 82px;
	margin-left: 35px;
}

.preview .swiper-slide {
	width: 87px;
	height: 82px;
}

.preview .slide6 {
	width: 82px;
}

.preview .arrow-left {
	background: url(/xgwl/img/feel3.png) no-repeat left top;
	position: absolute;
	left: 10px;
	top: 50%;
	margin-top: -9px;
	width: 9px;
	height: 18px;
	z-index: 10;
}

.preview .arrow-right {
	background: url(/xgwl/img/feel4.png) no-repeat left bottom;
	position: absolute;
	right: 10px;
	top: 50%;
	margin-top: -9px;
	width: 9px;
	height: 18px;
	z-index: 10;
}

.preview img {
	padding: 1px;
}

.preview .active-nav img {
	padding: 0;
	border: 1px solid #F00;
}
.smpic img{width:80px;height:80px;}
@media (max-width: 768px) {
    .pc-slide {
	width: 100%;
	margin: 0 auto;
}

.view .swiper-container {
	width: 100%;
	height: 220px;
}
.preview .swiper-container{
  width:75%;
}
}
</style>
 <div class="pc-slide">
	<div class="view">
		<div class="swiper-container">
			<a class="arrow-left" href="#"></a>
			<a class="arrow-right" href="#"></a>
			<div class="swiper-wrapper">
         <%Set prs= Server.CreateObject("ADODB.Recordset")
psql="select * From [Table_pic] where pro_id="&rs("ArticleID")&" order by oid desc,ID desc"
prs.open psql,conn,1,1%>
<%do while not prs.eof%>

        <div class="swiper-slide">
					<img src="/<%=prs("pic_url")%>" alt="">
				</div>
 <%
	i=i+1

	     prs.movenext
	loop
prs.close
set prs=nothing
%>
			</div>
		</div>
	</div>
	<div class="preview">
		<a class="arrow-left" href="#"></a>
		<a class="arrow-right" href="#"></a>
		<div class="swiper-container">
			<div class="swiper-wrapper">
        <%Set prs= Server.CreateObject("ADODB.Recordset")
psql="select * From [Table_pic] where pro_id="&rs("ArticleID")&" order by oid desc,ID desc"
prs.open psql,conn,1,1
dim i
i=0%>
<%do while not prs.eof%>

        <div class="swiper-slide smpic <%if i=0 then%>active-nav<%end if%>">
					<img src="/<%=prs("pic_url")%>" alt="">
				</div>
 <%
	i=i+1

	     prs.movenext
	loop
prs.close
set prs=nothing
%>

			</div>
		</div>
	</div>
</div>

    <!--轮播结束-->
        </div>
      </div>
      <div class="dinfo" id="f1">
        <div class="dtit">项目介绍
          <ul class="icolist">
            <li class="li1 b_c hidden-xs hidden"><img src="/xgwl/img/housedetail_ico1.svg"/>房贷计算器</li>
            <li class="li3 b_c hidden-xs hidden"><img src="/xgwl/img/housedetail_ico3.svg"/>即时汇率</li>
            <%if request.cookies("username")="" then%>
             <li class="li2 b_c1 hidden" onclick='location.href="register.html"'><img src="/xgwl/img/housedetail_ico2.svg"/>注册/登录后下载资料</li>
              <%else%>
               <li class="li2 b_c1 hidden"><img src="/xgwl/img/housedetail_ico2.svg"/>资料下载</li>
          
              <%end if%>
           
          </ul>
        </div>
        <div class="dtxt">
         
          <%=rs("content")%></div>
      </div>
      <div class="dinfo" id="f3">
        <div class="dtit">地理位置</div>
        <div class="dtxt"><%=rs("content1")%>
          <!--地图开始-->
          <script src="/xgwl/js/googlemap.js"></script>
          <style>.tabContent .google_map_Left, .tabContent .google_map_Container, .tabContent #map_canvas{width: 100%;height: 450px;margin-top: 8px;}</style>
    <div class="tabContent_frame">
        <div class="tabContent_frame_left">
            <div class="tabContent" id="content1">
                <div class="contentContainer"></div>
                <div class="guide_banner">
                    <div class="guide_banner_box" id="us_guide_purchase" onclick="purchase_guide_open()">
                    </div>
                    <div class="middle_box"></div>
                    <div class="guide_banner_box" id="us_guide_school" onclick="school_map_open()">
                    </div>
                </div>
            </div>
        </div>
        <div class="tabContent" id="content2">
            <div class="contentContainer" style="position: relative;">
                <div class="google_map_Left" style="display: none;"></div>
                <div id="map_banner"><a class="j_anchor_tab" href="#address_enquiry" onclick="$('.tableForm input.input:eq(0)').focus();switch_from_address_textarea();">咨询详细地址</a></div>
            </div>
        </div>
    </div>
    <%
    dim wz 
    if rs("wz")<>"" then
    wza=replace(rs("wz"),"，",",")
    wz=split(wza,",") 
    else
    wz=split("51.515123,-0.114588",",")
    end if
    %>
    <script type='text/javascript'>
        var qualityValue = 80;
        var showMap = +'1';
        var mapZoom = 12;
        var propertyLocation = "<%=rs("qt")%>";
        //51.515123，
        var property_LAT = <%=wz(0)%>;
        var property_LONG = <%=wz(1)%>;
        //var property_LAT = 33.6857;
        //var property_LONG = -117.826;
        $(show_google_map);
    </script>
          <!--地图结束-->
        </div>
      </div>
      
      <div class="dinfo" id="f4">
        <div class="dtit">主力户型
          <div class="cbtn"  onclick="openPform(1);">抢购房源</div>
        </div>
        <div class="dtxt"> 
          <!--户型列表-->

<div class="swiper-container2">

  <div class="swiper-wrapper">
          <%Set prs= Server.CreateObject("ADODB.Recordset")
        psql="select top 3 * From [f_hxt] where fid="&rs("ArticleID")&" order by oid desc,ID desc"
        prs.open psql,conn,1,1
        i=0%>
        <%do while not prs.eof%>
              <div class="swiper-slide hxtpic"><img src="/<%=prs("file")%>"/>
              <div class="tit"><%=prs("tit")%></div>
              <!--<div class="txt"><%=replace(prs("txt"),"&gt;",">")%><br><%=prs("jg")%></div>-->
  </div>
         <%
        	i=i+1
        prs.movenext
        	loop
        prs.close
        set prs=nothing
        %>


<!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Add Navigation -->

</div>

          <!---->

        </div>
                <div class="swiper-button-white arrow-left2">&lt;</div>
        <div class="swiper-button-white arrow-right2">&gt;</div>
      </div>
      </div>


              <div class="row">
        <%key=rs("bigclassname")
          key2=rs("smallclassname")%>
      <div class="col-sm-6">
      <div class="dinfo" >
        <div class="dtit">市场报告 <a href="/marketreport/1.html" class="more">查看更多 &gt;</a></div>
        <div class="dtxt">
          
          <%	  
          set rsnew=Server.CreateObject("ADODB.Recordset")
          sqlnew="select top 5 * from [prod] where (classid=16 or classid=17 or classid=18)"
    sqlnew=sqlnew+" and (prod_name like '%"&key&"%' or tips like '%"&key&"%' or prod_name like '%"&key2&"%' or tips like '%"&key2&"%')"
    sqlnew=sqlnew+" order by oid desc,prod_id desc"
    'response.write sqlnew
      rsnew.Open sqlnew,conn,1,1
      do while not rsnew.eof%>
<a href="/MarketReportMore/<%=rsnew("prod_id")%>.html" target="_blank" class="li ellipsis tra"><%=rsnew("prod_name")%></a>
      <%rsnew.movenext
            loop
      rsnew.close
      set rsnew=nothing%>
        </div>
        </div>
      </div>
      <div class="col-sm-6">
      <div class="dinfo " >
        <div class="dtit">最新资讯 <a href="/news/25/1.html" class="more">查看更多 &gt;</a></div>
        <div class="dtxt">
          <%	  
          set rsnew=Server.CreateObject("ADODB.Recordset")
          sqlnew="select top 5 * from [prod] where (classid=25 or classid=26 or classid=27)"
    sqlnew=sqlnew+" and (prod_name like '%"&key&"%' or tips like '%"&key&"%' or prod_name like '%"&key2&"%' or tips like '%"&key2&"%')"
    sqlnew=sqlnew+" order by oid desc,prod_id desc"
    'response.write sqlnew
      rsnew.Open sqlnew,conn,1,1      
      do while not rsnew.eof%>
<a href="/newsview/<%=rsnew("prod_id")%>.html" target="_blank" class="li ellipsis tra"><%=rsnew("prod_name")%></a>
      <%rsnew.movenext
            loop
            rsnew.close
      set rsnew=nothing%>
        </div>
        </div>
      </div>
      </div>
              <%
          rs.close
              set rs=nothing%>
     <!--#include file="./inc/hothouses.asp"-->
<!--#include file="./inc/pfrom.asp"-->
<!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="/xgwl/js/lib/swiper-2.7.6.jquery.min.js"></script>
<!--<script src="/xgwl/js/lib/swiper-3.4.2.jquery.min.js"></script>-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
<!--新轮播js-->

<script>
    var viewSwiper = new Swiper('.view .swiper-container', {
	onSlideChangeStart: function() {
		updateNavPosition()
	}
})

$('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
	e.preventDefault()
	if (viewSwiper.activeIndex == 0) {
		viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
		return
	}
	viewSwiper.swipePrev()
})
$('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
	e.preventDefault()
	if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
		viewSwiper.swipeTo(0, 1000);
		return
	}
	viewSwiper.swipeNext()
})

var previewSwiper = new Swiper('.preview .swiper-container', {
	visibilityFullFit: true,
	slidesPerView: 'auto',
	onlyExternal: true,
	onSlideClick: function() {
		viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
	}
})

function updateNavPosition() {
		$('.preview .active-nav').removeClass('active-nav')
		var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
		if (!activeNav.hasClass('swiper-slide-visible')) {
			if (activeNav.index() > previewSwiper.activeIndex) {
				var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
				previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
			} else {
				previewSwiper.swipeTo(activeNav.index())
			}
		}
	}
</script>
<script> 
var mySwiper = new Swiper('.swiper-container2',{
  slidesPerView : 'auto',

        parallax: true,
        speed: 600,
})
  $('.arrow-left2').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right2').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
</script>
  </body>
</html>