<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="./Inc/FuncTion.Asp"-->
<!--#Include File="./Inc/config.Asp"-->
<!--#Include File="./Inc/Inc.Asp"-->
<!--#include file="./inc/head.asp"-->
    <link href="/xgwl/css/pages/news.css" rel="stylesheet"/>
               <%dim tdkid
tdkid=6%>
<!--#include file="./inc/tdk.asp"-->
  </head>
  <body>
    <!--数据链接-->
    <%dim cid
cid=request.QueryString("c")

key=request.QueryString("key")
if cid="" and key="" then cid=27
    set rsc=Server.CreateObject("ADODB.Recordset")

	  call SafeRequest(cid)
	  sqlnew="select count(*) as counter from [prod] where classid="&cid
	
    sqlnew=sqlnew+" and (prod_detail like '%"&key&"%' or title2 like '%"&key&"%' or prod_name like '%"&key&"%' or tips like '%"&key&"%')"

rsc.Open sqlnew,conn,1,1
counter=rsc("counter")
    rsc.close
    set rsc=nothing
    set rsnew=Server.CreateObject("ADODB.Recordset")
	  if cid<>"" then
	  call SafeRequest(cid)
	  sqlnew="select * from [prod] where classid="&cid
	  else
	  sqlnew="select * from [prod] where prod_name<>"""
	  end if
    sqlnew=sqlnew+" and (prod_detail like '%"&key&"%' or title2 like '%"&key&"%' or prod_name like '%"&key&"%' or tips like '%"&key&"%')"
	  sqlnew=sqlnew+" order by oid desc,prod_id desc"
rsnew.Open sqlnew,conn,1,1%>
<!--数据链接结束-->
<!--#include file="./inc/header.asp"-->
    <div class="led"> 
      <div class="h1">News</div>
      <div class="h2">最新资讯</div>
    </div>
         <div class="container <%if key<>"" then%>hidden<%end if%>">
    <div class="skid">
            <span class='ctit'><a class=" li <%if cid=27 then%>on<%end if%>" href="/news/27/1.html">展会活动</a><a class="li <%if cid=25 then%>on<%end if%>"  href="/news/25/1.html">置业指南</a><a class="li <%if cid=26 then%>on<%end if%>"  href="/news/26/1.html">行业动态</a></span>
    </div>
    </div>
    <div class="main"> 
      <div class="container">
      <%
if key<>"" then%>
已为您找到关于 "<%=key%>" 的 <%=counter%> 条相关记录
<%end if
%>
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
        <a class="li tra wow fadeInUp animated row" href="/<%if rsnew("url")<>"" then %><%=rsnew("url")%><%else%>newsview/<%=rsnew("prod_id")%>.html<%end if%>" title="<%=rsnew("prod_name")%>" target="_blank">
          <div class="col-md-4">
            <div class="pic tra"><img src="/<%if rsnew("prod_pic")="" then%>xgwl/img/nopic.jpg<%else%><%=rsnew("prod_pic")%><%end if%>"/></div>
          </div>
          <div class="col-md-8">
            <div class="info tra">
              <div class="tit ellipsis ls1"><%=rsnew("prod_name")%><!--<%=formatdatetime(rsnew("prod_date"),2)%>--></div>
              <div class="txt ellipsis5 ls1"><%=left(RemoveHTML(rsnew("prod_detailen")),260)%></div>
              <div class="btn btn-default nbtn hidden-xs">阅读详情</div>
            </div>
          </div></a>

                    <%rsnew.movenext
        	i=i+1
            loop
        	end if
     %>
     <!--pages s-->
          <style>
          .pages{color:#898989;margin-top:40px;margin-bottom:40px;}
          .pages a{padding:5px 13px;border:1px solid #ebebeb;color:#898989;margin-right:10px;}
          .pages a.on{color:#fff;background-color:#898989;}
          .pages select{border:1px solid #ebebeb;}
</style>
           <table width="95%" height="25"  border="0" align="center" cellpadding="0" cellspacing="0" class="pages wow fadeInUp">
                            <tr class="url_1">
                              <%if rsnew.pagecount > 0 then%>
                              <td width="15%" align="left" valign="middle" >当前页<%=page%>/<%=rsnew.PageCount%></td>
                              <%else%>
                              <td width="15%" align="left" valign="middle" >当前页0/0</td>
                              <%end if%>
                              <td width="70%" align="right" >
                                
                                <%if page>1 then%><a href="/news/<%=cid%>/1.html">首页</a>

                                  <a href="/news/<%=cid%>/<%=page -1%>.html">上一页</a>
                                  <%end if%>
                                  <%
          for i = 1 to rsnew.PageCount%>
          <a href="/news/<%=cid%>/<%=i%>.html" class="<%if page=i then%>on<%end if%>"><%=i%></a>
          <%
          next
          %>
                                <%if rsnew.PageCount<>1 and page<>rsnew.PageCount then%>
                                  <a href="/news/<%=cid%>/<%=page +1%>.html">下一页</a>

                                  <a href="/news/<%=cid%>/<%=rsnew.PageCount%>.html">尾页</a>
                                  <%end if%>|转到第
                                <select name="select" onChange="javascript:location=this.options[this.selectedIndex].value;">
                                    <%
          for i = 1 to rsnew.PageCount
          if i = page then%>
                                    <option value="/news/<%=cid%>/<%=i%>.html" selected><%=i%></option>
                                    <%else%>
                                    <option value="/news/<%=cid%>/<%=i%>.html"><%=i%></option>
                                    <%
          end if
          next
          %>
                                </select>
                                页</td>
                            </tr>
                          </table>
                          <!--pages e-->
                          <%   	rsnew.close
                                    	set rsnew=nothing%>
      </div>
    </div>
    <!--#include file="inc/pfrom.asp"-->
<!--#include file="./inc/footer.asp"-->
<!--#include file="./inc/sidebar.asp"-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
  </body>
</html>