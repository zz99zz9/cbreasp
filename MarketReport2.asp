<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->
    <link href="/xgwl/css/pages/marketreport.css" rel="stylesheet"/>
               <%dim tdkid
tdkid=7%>
<!--#include file="./inc/tdk.asp"-->
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
<!--#include file="./inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Research Report</div>
      <div class="h2">市场报告</div>
    </div>
    <div class="container">
      <div class="skid"><span class="ctit"> <a class="li" href="/MarketReport/1.html">澳洲</a><a class="li on" href="/MarketReport2/1.html">英国</a><a class="li" href="/MarketReport3/1.html">全球</a></span></div>
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
                  <div class="tit"> <a href='/MarketReportMore/<%=rsnew("prod_id")%>.html'><%=rsnew("prod_name")%></a></div>
                  <div class="time"><%=formatdatetime(rsnew("prod_date"),2)%></div>
                  <div class="txt"><%=left(RemoveHTML(rsnew("prod_detailen")),260)%></div><a class="cbtn tra" href='/MarketReportMore/<%=rsnew("prod_id")%>.html'>阅读更多</a>
                </div>
                <div class="col-md-3">
                  <div class="pic"><a class="b_c" href='/MarketReportMore/<%=rsnew("prod_id")%>.html'><img src="/<%if rsnew("prod_pic")="" then%>xgwl/img/nopic.jpg<%else%><%=rsnew("prod_pic")%><%end if%>"/></a></div>
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
                              <td width="70%" align="right" ><%if page>1 then%><a href="/marketreport2/1.html">首页</a>

                                  <a href="/marketreport2/<%=page -1%>.html">上一页</a>
                                  <%end if%>
                                <%if rsnew.PageCount<>1 and page<>rsnew.PageCount then%>
                                  <a href="/marketreport2/<%=page +1%>.html">下一页</a>

                                  <a href="/marketreport2/<%=rsnew.PageCount%>.html">尾页</a>
                                  <%end if%>|转到第
                                <select name="select" onChange="javascript:location=this.options[this.selectedIndex].value;">
                                    <%
          for i = 1 to rsnew.PageCount
          if i = page then%>
                                    <option value="/marketreport2/<%=i%>.html" selected><%=i%></option>
                                    <%else%>
                                    <option value="/marketreport2/<%=i%>.html"><%=i%></option>
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
<!--#include file="./inc/rightReport.asp"-->
          </div>
        </div>
      </div>
    </div>
    <!--#include file="./inc/pfrom.asp"-->
<!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
  </body>
</html>