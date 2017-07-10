<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/marketreport.css" rel="stylesheet"/>
               <%dim tdkid
tdkid=7%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
    <!--数据链接-->
    <%dim cid
cid=request.QueryString("c")
cid=16
    set rsnew=Server.CreateObject("ADODB.Recordset")
	  if cid<>"" then
	  call SafeRequest(cid)
	  sqlnew="select * from [prod] where classid="&cid
	  else
	  sqlnew="select * from [prod] "
	  end if
	  sqlnew=sqlnew+" order by oid desc,prod_id desc"
rsnew.Open sqlnew,conn,1,1%>
<!--数据链接结束-->
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Market Report</div>
      <div class="h2">市场报告</div>
    </div>
    <div class="container">
      <div class="skid"><span class="ctit"> <a class="li on" href="MarketReport.asp">英国</a><a class="li" href="MarketReport2.asp">美国</a><a class="li" href="MarketReport3.asp">澳洲</a></span></div>
    </div>
    <div class="main"> 
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <ul class="report">
  <%
        if rsnew.bof and rsnew.eof then
        response.write("暂无内容")
        else
        rsnew.PageSize=10 '设置页码
        pagecount=rsnew.PageCount '获取总页码
        page=int(request("page")) '接收页码
        if page<=0 then page=1 '判断
        if request("page")="" then page=1
        rsnew.AbsolutePage=page '设置本页页码
        i=0
        do while not rsnew.eof and i<rsnew.PageSize
        %>
              <li class="row wow fadeInUp animated">
                <div class="col-md-9">
                  <div class="tit"> <a href='MarketReportMore.asp?id=<%=rsnew("prod_id")%>'><%=rsnew("prod_name")%></a></div>
                  <div class="time"><%=formatdatetime(rsnew("prod_date"),2)%></div>
                  <div class="txt"><%=left(RemoveHTML(rsnew("prod_detailen")),260)%></div><a class="cbtn tra" href='MarketReportMore.asp?id=<%=rsnew("prod_id")%>'>阅读更多</a>
                </div>
                <div class="col-md-3">
                  <div class="pic"><a class="b_c" href='MarketReportMore.asp?id=<%=rsnew("prod_id")%>'><img src="xgwl/img/marketreport.png"/></a></div>
                </div>
              </li>
 <%rsnew.movenext
        	i=i+1
            loop
        	end if
     %>
            </ul>
            <!--pages s-->
          <style>
          .pages{color:#898989;margin-top:40px;margin-bottom:40px;}
          .pages a{padding:5px 13px;border:1px solid #ebebeb;color:#898989;margin-right:10px;}
          .pages select{border:1px solid #ebebeb;}
</style>
           <table width="95%" height="25"  border="0" align="center" cellpadding="0" cellspacing="0" class="pages wow fadeInUp">
                            <tr class="url_1">
                              <%if rsnew.pagecount > 0 then%>
                              <td width="15%" align="left" valign="middle" >当前页<%=page%>/<%=rsnew.PageCount%></td>
                              <%else%>
                              <td width="15%" align="left" valign="middle" >当前页0/0</td>
                              <%end if%>
                              <td width="70%" align="right" ><%if page>1 then%><a href="?page=1&c=<%=cid%>">首页</a>

                                  <a href="?page=<%=page -1%>&c=<%=cid%>">上一页</a>
                                  <%end if%>
                                <%if rsnew.PageCount<>1 and page<>rsnew.PageCount then%>
                                  <a href="?page=<%=page +1%>&c=<%=cid%>">下一页</a>

                                  <a href="?page=<%=rsnew.PageCount%>&c=<%=cid%>">尾页</a>
                                  <%end if%>|转到第
                                <select name="select" onChange="javascript:location=this.options[this.selectedIndex].value;">
                                    <%
          for i = 1 to rsnew.PageCount
          if i = page then%>
                                    <option value="?page=<%=i%>&c=<%=cid%>" selected><%=i%></option>
                                    <%else%>
                                    <option value="?page=<%=i%>&c=<%=cid%>"><%=i%></option>
                                    <%
          end if
          next
          %>
                                </select>
                                页</td>
                            </tr>
                          </table>
                          <!--pages e-->
            <div class="pages wow fadeInUp animated hidden"><a class="tra" href="#">上一页</a><a class="tra on" href="#">1</a><a class="tra" href="#">2</a><a class="tra" href="#">3</a><a class="tra" href="#">4</a><a class="tra" href="#">5</a><a class="tra" href="#">下一页    </a></div>
          </div>
          <div class="col-md-3">
            <div class="login"><%if request.cookies("username")="" then%>
              <div class="tit">登录或注册查看下载报告</div><a class="cbtn" href="/Login.asp">登录</a><a class="cbtn" href="/Register.asp">注册</a>
              <%else%>
              <div class="tit">当前登录用户 <%=request.cookies("username")%></div><a class="cbtn" href="/quit.asp">安全退出</a>
              <%end if%>
            </div>
            <div class="contact">
              <div class="tit">想了解更多请联系我们</div><a class="cbtn1" href='#'>联系我们</a>
            </div>
            <div class="aboutmore">
              <div class="tit">了解更多资讯</div><a class="cbtn" href='/news.asp'>查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>