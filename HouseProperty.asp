<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<html>
  <head>
  <!--#include File="Inc/FuncTion.Asp"-->
<!--#Include File="Inc/config.Asp"-->
<!--#Include File="Inc/Inc.Asp"-->
    <!--#include file="inc/head.asp"-->
    <link href="xgwl/css/pages/HouseProperty.css" rel="stylesheet"/>
   <%dim tdkid
tdkid=2
%>
<%dim bc,sc,fj,lx,lb,order,page
key=request.QueryString("key")
bc=request.QueryString("bc")
sc=request.QueryString("sc")
fj=request.QueryString("fj")'预算
lx=request.QueryString("lx")'物业
lb=request.QueryString("lb")'预留
order=request.QueryString("order")
page=request.QueryString("page")
if bc="" then bc=0
if sc="" then sc=0
if fj="" then fj=0
if lx="" then lx=0
if lb="" then lb=0
if page="" then page=1
if order="" then order=0

%>
<!--#include file="inc/tdk.asp"-->
  </head>
  <body>
<!--#include file="inc/header.asp"-->
    <div class="led"> 
      <div class="h1">New Development</div>
      <div class="h2">新房</div>
    </div>
    <div class="seabor">
      <div class="container">
        <div class="row">
          <div class="col-xg-2">
            <div class="btn-group">
              <%if bc<>0 then
              set rs=Server.CreateObject("ADODB.Recordset")
                           rs.Open "select * from [Table_ProBigClass] where bigclassid="&bc&" order by OrderId desc",conn,1,1
                           country=rs("bigclassname")
                           	rs.close
	set rs=nothing
  end if
  if country="" then country="国家"%>

              <button class="btn btn-default btn-sea dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><%=country%></button>
              <ul class="dropdown-menu" role="menu">
                <%if bc<>0 then%><li><a href='?<%call seaurl(0,0,fj,lx,lb,order,1)%>'>全部国家</a></li><%end if%>
                <%set rs=Server.CreateObject("ADODB.Recordset")
                           rs.Open "select * from [Table_ProBigClass] order by OrderId desc",conn,1,1%>
                 <%do while not rs.eof%>
  
  <li><a href="?<%call seaurl(rs("BigClassId"),0,fj,lx,lb,order,1)%>" <%call ison(bc,rs("BigClassId"))%>><%=rs("BigClassName")%></a></li>
  <%rs.movenext

    loop
	rs.close
	set rs=nothing%>
              </ul>
            </div>
          </div>
          <div class="col-xg-2">
            <div class="btn-group">
              <%if sc<>0 then
              set rs=Server.CreateObject("ADODB.Recordset")
                           rs.Open "select * from [Table_ProsmallClass] where smallclassid="&sc&" order by OrderId desc",conn,1,1
                           city=rs("smallclassname")
                           	rs.close
	set rs=nothing
  end if
  if city="" then city="城市"%>
              <button class="btn btn-default btn-sea dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><%=city%></button>
              <ul class="dropdown-menu" role="menu">
                <%if sc<>0 then%><li><a href='?<%call seaurl(bc,0,fj,lx,lb,order,1)%>'>全部城市</a></li><%end if%>
         <%set rs=Server.CreateObject("ADODB.Recordset")
    rs.Open "select * from [Table_ProSmallClass] where BigClassID="&bc&" order by OrderId desc",conn,1,1%> 
    <%do while not rs.eof%>
                <li><a href="?<%call seaurl(bc,rs("SmallClassId"),fj,lx,lb,order,1)%>" <%call ison(sc,rs("SmallClassId"))%>><%=rs("SmallClassName")%></a></li>
                

  <%rs.movenext

    loop
	rs.close
	set rs=nothing%>
              </ul>
            </div>
          </div>
          <div class="col-xg-2">
            <div class="btn-group">
              <%       
if lx<>0 then
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [class_kfs] where cid="&lx&" order by oid desc"

rs.open sql,conn,1,1
lxname=rs("cname")
end if
if lxname="" then lxname="物业"%>
              <button class="btn btn-default btn-sea dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><%=lxname%></button>
              <ul class="dropdown-menu" role="menu">
                <%if lx<>0 then%><li><a href='?<%call seaurl(bc,sc,fj,0,lb,order,1)%>'>全部物业类型</a></li><%end if%>
       <%
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [class_kfs] order by oid desc"
rs.open sql,conn,1,1
if not(rs.eof and rs.bof) then
do while not rs.eof
%><li> <a href='?<%call seaurl(bc,sc,fj,rs("Cid"),lb,order,1)%>'><%=rs("CName")%></a></li>
           
            <%
rs.movenext
loop
end if
rs.close
%>
                
              </ul>
            </div>
          </div>
          <div class="col-xg-2">
            <div class="btn-group">
                            <%       
if fj<>0 then
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [class_fj] where cid="&fj&" order by oid desc"

rs.open sql,conn,1,1
fjname=rs("cname")
end if
if fjname="" then fjname="价格区间"%>
              <button class="btn btn-default btn-sea dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><%=fjname%></button>
              <ul class="dropdown-menu" role="menu">
                <%if fj<>0 then%><li><a href='?<%call seaurl(bc,sc,0,lx,lb,order,1)%>'>全部价格区间</a></li><%end if%>
 <%
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [class_fj] order by oid desc"
rs.open sql,conn,1,1
if not(rs.eof and rs.bof) then
do while not rs.eof
%><li> <a href='?<%call seaurl(bc,sc,rs("Cid"),lx,lb,order,1)%>'><%=rs("CName")%></a></li>
           
            <%
rs.movenext
loop
end if
rs.close
%>
              </ul>
            </div>
          </div>
          <div class="col-xg-2">
            <div class="btn-group">
              <%if order="1" then 
              ordername="总价低到高"
              elseif order="2" then 
              ordername="总价高到低"
              elseif order="3" then 
              ordername="均价低到高"
              elseif order="4" then 
              ordername="均价高到低"
              elseif order="5" then 
              ordername="发布时间排序"
              end if
              if ordername="" then ordername="排序"
              %>
              <button class="btn btn-default btn-sea dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><%=ordername%></button>
              <ul class="dropdown-menu" role="menu">
                <%if order<>0 then%><li><a href='?<%call seaurl(bc,sc,fj,lx,lb,0,1)%>'>默认排序</a></li><%end if%>
                <li><a href='?<%call seaurl(bc,sc,fj,lx,lb,1,1)%>'>总价低到高</a></li>
                <li> <a href='?<%call seaurl(bc,sc,fj,lx,lb,2,1)%>'>总价高到低</a></li>
                <li><a href='?<%call seaurl(bc,sc,fj,lx,lb,3,1)%>'>均价低到高</a></li>
                <li> <a href='?<%call seaurl(bc,sc,fj,lx,lb,4,1)%>'>均价高到低</a></li>
                <li><a href='?<%call seaurl(bc,sc,fj,lx,lb,5,1)%>'>发布时间排序</a></li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main"> 
      <div class="container">
        
        <%'列表
        set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=1"
if bc<>0 and bc<>"" then sql=sql+" and bigclassid="&bc
if sc<>0 and sc<>"" then sql=sql+" and smallclassid="&sc
if fj<>0 and fj<>"" then sql=sql+" and cfjid='"&fj&"'"
if lx<>0 and lx<>"" then sql=sql+" and clxid='"&lx&"'"
if lb<>0 and lb<>"" then sql=sql+" and clbid='"&lb&"'"
if key<>"" then sql=sql+" and (title like '%"&key&"%' or content like '%"&key&"%' or content1 like '%"&key&"%')"

 sql=sql+" and clbid='11'"
sql=sql+" order by "
select case order
	case 0
	'sql=sql+"updatetime desc,Elite,"
	case 1
	sql=sql+"jgzj,"
	case 2
	sql=sql+"jgzj desc,"
	case 3
	sql=sql+"jgjj,"
	case 4
	sql=sql+"jgjj desc,"
	case 5
	sql=sql+"updatetime desc,"
	case 6
	sql=sql+"updatetime,"
end select
sql=sql+"OrderId desc,articleid desc"

rs.Open sql,conn,1,1%>

<%
    if rs.bof and rs.eof then
    response.write("暂无内容")
  '  response.write sql
    else
    rs.PageSize=10 '设置页码
    pagecount=rs.PageCount '获取总页码
    page=int(page) '接收页码
    if page<=0 then page=1 '判断
    if request("page")="" then page=1
    rs.AbsolutePage=page '设置本页页码
    i=0
    do while not rs.eof and i<rs.PageSize
    %>
    <!------------>
        <a class="li tra wow fadeInUp animated row" href="housedetail.asp?id=<%=rs("articleid")%>">
          <div class="col-md-4">
            <div class="pic tra"><img src="<%if rs("defaultpicurl")="" then%>xgwl/img/nopic.jpg<%else%><%=rs("defaultpicurl")%><%end if%>"/></div>
          </div>
          <div class="col-md-5">
            <div class="info tra">
              <div class="tit ellipsis ls1"><%=rs("entitle")%></div>
              <div class="addr ellipsis ls1"><%=rs("qt")%></div>
              <div class="city ellipsis ls1"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
              <div class="city ellipsis ls1">热点区域：<%=rs("ctdname")%></div>
              <div class="kid ellipsis ls1">物业类型：<%=rs("ckfsname")%> </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="price ls2">均价  <span class="pn"><%=rs("jgjj")%></span>万元/m²</div>
          </div></a>
<!------------>

<%
rs.movenext
i=i+1
loop
end if%>

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
<!--#include file="inc/footer.asp"-->
<!--#include file="inc/sidebar.asp"-->
  </body>
</html>