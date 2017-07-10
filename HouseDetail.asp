<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->

    <link href="xgwl/css/pages/HouseDetail.css" rel="stylesheet"/>
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
           <div class="item <%if i=0 then%>active<%end if%>" onclick="window.location.href='<%=prs("url")%>';" style="background:url(<%=prs("file")%>);"></div>
         <%
        	i=i+1
        prs.movenext
        	loop
        prs.close
        set prs=nothing
        %>
        </div>
        <div class="baseinfo"> 
          <div class="tit"><%=rs("entitle")%><span class="status1"><%=rs("clxname")%></span></div>
          <div class="country"><%=rs("bigclassname")%> / <%=rs("smallclassname")%></div>
          <div class="txt">所属热区：<span class="txtv"><%=rs("ctdname")%></span></div>
          <div class="txt">物业类型：<span class="txtv"><%=rs("ckfsname")%></span></div>
          <div class="txt">面积均价：<span class="txtv"><%=rs("jgjj")%>元/平</span></div>
          <div class="txt">项目地址：<span class="txtv"><%=rs("qt")%></span></div>
          <div class="infoc">
            <%if rs("jgzj2")="0" or rs("jgzj2")="" then%>
            <div class="price"><%=rs("jgzj")%><em>万起</em><!---<%=rs("jgzj2")%><em>万</em>--></div>
            <%else%>
            <div class="price"><%=rs("jgzj")%><em>万</em>~<%=rs("jgzj2")%><em>万</em></div>
            <%end if%>
            <span class="cbtn tra" onclick="openPform();">抢购房源</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ul class="housenav"><a class="on topLink" href="#f1">项目介绍</a><a class="topLink" href="#f2">项目图片</a><a class="topLink" href="#f3">地理位置</a><a class="topLink" href="#f4">主力户型</a><a class="topLink hidden-xs" href="#f5">其他推荐</a></ul>
      <div class="dinfo" id="f1">
        <div class="dtit">项目介绍
          <ul class="icolist">
            <li class="li1 b_c hidden-xs"><img src="xgwl/img/housedetail_ico1.svg"/>房贷计算器</li>
            <li class="li3 b_c hidden-xs"><img src="xgwl/img/housedetail_ico3.svg"/>即时汇率</li>
            <%if request.cookies("username")="" then%>
             <li class="li2 b_c1" onclick='location.href="register.asp"'><img src="xgwl/img/housedetail_ico2.svg"/>注册/登录后下载资料</li>
              <%else%>
               <li class="li2 b_c1"><img src="xgwl/img/housedetail_ico2.svg"/>资料下载</li>
          
              <%end if%>
           
          </ul>
        </div>
        <div class="dtxt">
          <%=rs("content")%></div>
      </div>
      <div class="dinfo" id="f2">
        <div class="dtit">项目图片</div>
        <div class="dtxt"> 
          <!--新的轮播样式-->
          <link href="xgwl/css/lib/swiper-3.4.0.min.css" rel="stylesheet"/>
          
    <style>
    .pc-slide {
	width: 100%;
	margin: 0 auto;
}

.view .swiper-container {
	width: 100%;
	height: 470px;
}
.view .swiper-container img{
	width: 100%;
  height:100%;

}
.view .arrow-left {
	background: url(xgwl/img/index_tab_l.png) no-repeat left top;
	position: absolute;
	left: 10px;
	top: 50%;
	margin-top: -25px;
	width: 28px;
	height: 51px;
	z-index: 10;
}

.view .arrow-right {
	background: url(xgwl/img/index_tab_r.png) no-repeat left bottom;
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
	background: url(xgwl/img/feel3.png) no-repeat left top;
	position: absolute;
	left: 10px;
	top: 50%;
	margin-top: -9px;
	width: 9px;
	height: 18px;
	z-index: 10;
}

.preview .arrow-right {
	background: url(xgwl/img/feel4.png) no-repeat left bottom;
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
					<img src="<%=prs("pic_url")%>" alt="">
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
					<img src="<%=prs("pic_url")%>" alt="">
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
      <div class="dinfo" id="f3">
        <div class="dtit">地理位置</div>
        <div class="dtxt"><%=rs("content1")%>
          <!--地图开始-->
          <script src="xgwl/js/googlemap.js"></script>
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
    <script type='text/javascript'>
        var qualityValue = 80;
        var showMap = +'1';
        var mapZoom = 12;
        var propertyLocation = '<%=rs("qt")%>';
        var property_LAT = 33.6857;
        var property_LONG = -117.826;
        $(show_google_map);
    </script>
          <!--地图结束-->
        </div>
      </div>
      <div class="dinfo" id="f4">
        <div class="dtit">主力户型
          <div class="cbtn">抢购房源</div>
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
              <div class="swiper-slide hxtpic"><img src="<%=prs("file")%>"/>
              <div class="tit"><%=prs("tit")%></div>
              <div class="txt"><%=replace(prs("txt"),"&gt;",">")%><br><%=prs("jg")%></div>
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

          <%
          rs.close
            	set rs=nothing%>
      <div class="dinfo" id="f5">
        <div class="dtit">其他推荐</div>
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
<!--#include file="inc/pfrom.asp"-->
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
<script src="xgwl/js/lib/swiper-2.7.6.jquery.min.js"></script>
<!--<script src="xgwl/js/lib/swiper-3.4.2.jquery.min.js"></script>-->
<script src="xgwl/js/dfrom.js"></script>
<script src="xgwl/js/pfrom.js"></script>
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