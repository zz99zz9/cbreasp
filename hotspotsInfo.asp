<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/news.css" rel="stylesheet"/>
               <%dim tdkid
tdkid=5%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
    <!--数据链接-->
    <%dim cid
cid=request.QueryString("c")
if cid="" then cid=25
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
      <div class="h1">Investment hotspots</div>
      <div class="h2">投资热区</div>
    </div>
    <div class="main"> 
      <div class="container">
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
        <a class="li tra wow fadeInUp animated row" href="<%if rsnew("url")<>"" then %><%=rsnew("url")%><%else%>newsview.asp?id=<%=rsnew("prod_id")%><%end if%>" title="<%=rsnew("prod_name")%>" target="_blank">
          <div class="col-md-4">
            <div class="pic tra"><img src="xgwl/img/temp/part1.png"/><!--<%=rsnew("prod_pic")%>--></div>
          </div>
          <div class="col-md-8">
            <div class="info tra">
              <div class="tit ellipsis ls1"><%=rsnew("prod_name")%><!--<%=formatdatetime(rsnew("prod_date"),2)%>--></div>
              <div class="txt ellipsis5 ls1"><%=left(RemoveHTML(rsnew("prod_detailen")),260)%></div>
              <div class="btn btn-default nbtn">阅读详情</div>
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
                          <%   	rsnew.close
                                    	set rsnew=nothing%>
      </div>
    </div>
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>