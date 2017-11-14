 <div class="dinfo" id="f5">
        <div class="dtit">热门推荐</div>
        <div class="dtxt row morehouse">
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
   jgjj="待定"
   else
   jgjj=rs("jgjj")&"元/m²"
   end if
%>

          <div class="col-md-4 col-sm-4"><a class="li tra wow fadeInUp animated b_c" href="/housedetail/<%=rs("articleid")%>.html">
              <div class="pic tra"><img src="<%if rs("defaultpicurl")="" then%>/xgwl/img/nopic.jpg<%else%>/<%=rs("defaultpicurl")%><%end if%>"/></div>
              <div class="info tra">
                <div class="tit ellipsis ls1"><%=rs("entitle")%></div>
                
                <div class="city ellipsis ls1"><%=rs("bigclassname")%>/<%=rs("smallclassname")%></div>
                <div class="city ellipsis ls1">物业类型：<%=rs("ckfsname")%> </div>
                <div class="city ellipsis ls1"><%=rs("qt")%></div>
                <div class="price ls2"><%=jgjj%></div>
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