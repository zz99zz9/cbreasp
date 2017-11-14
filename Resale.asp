<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
<!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/resale.css" rel="stylesheet"/>
   <%dim tdkid
tdkid=3%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">Resale</div>
      <div class="h2">二手房</div>
    </div>
    <!--.container
    .skid
      span.ctit 
        a.li.on(href='#') 英国
        a.li(href='#') 美国
        a.li(href='#') 澳洲
    -->
    <div class="main"> 
      <div class="container">
       <%'列表
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select top 3 * from [Table_Product] where Passed=1 and elite=1"
sql=sql+" and clbid='12'"
sql=sql+" order by "
sql=sql+"OrderId desc,articleid desc"
rs.Open sql,conn,1,1
i=0%>
<%
    if rs.bof and rs.eof then
    response.write("暂无内容")
  '  response.write sql
    else
    rs.PageSize=16 '设置页码
    pagecount=rs.PageCount '获取总页码
    page=int(page) '接收页码
    if page<=0 then page=1 '判断
    if request("page")="" then page=1
    rs.AbsolutePage=page '设置本页页码
    i=0
    do while not rs.eof and i<rs.PageSize
    %>
        <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated b_c" href="housedetail.asp?id=<%=rs("articleid")%>">
            <div class="pic tra"><img src="<%if rs("defaultpicurl")="" then%>xgwl/img/nopic.jpg<%else%><%=rs("defaultpicurl")%><%end if%>"/></div>
            <div class="info tra">
              <div class="tit ellipsis ls1"><%=rs("entitle")%></div>
              <div class="addr ellipsis ls1"><%=rs("qt")%></div>
              <div class="city ellipsis ls1"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
              <div class="kid ellipsis ls1">物业类型：<%=rs("clxname")%> </div>
              <div class="price ls2"><%=rs("jgzj")%>万</div>
            </div></a></div>
              <%
              rs.movenext
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
                              <%if rs.pagecount > 0 then%>
                              <td width="15%" align="left" valign="middle" >当前页<%=page%>/<%=rs.PageCount%></td>
                              <%else%>
                              <td width="15%" align="left" valign="middle" >当前页0/0</td>
                              <%end if%>
                              <td width="70%" align="right" ><%if page>1 then%><a href="?page=1&c=<%=cid%>">首页</a>

                                  <a href="?page=<%=page -1%>&c=<%=cid%>">上一页</a>
                                  <%end if%>
                                <%if rs.PageCount<>1 and page<>rs.PageCount then%>
                                  <a href="?page=<%=page +1%>&c=<%=cid%>">下一页</a>

                                  <a href="?page=<%=rs.PageCount%>&c=<%=cid%>">尾页</a>
                                  <%end if%>|转到第
                                <select name="select" onChange="javascript:location=this.options[this.selectedIndex].value;">
                                    <%
          for i = 1 to rs.PageCount
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
                          <%	rs.close
	set rs=nothing%>
      </div>
    </div>
    <!--#include file="inc/pfrom.asp"-->
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
<script src="/xgwl/js/dfrom.js"></script>
<script src="/xgwl/js/pfrom.js"></script>
  </body>
</html>