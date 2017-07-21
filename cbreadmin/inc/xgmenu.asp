      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu">
                  <li class="nav0">
                      <a class="" href="index.asp">
                          <i class="icon-dashboard"></i>
                          <span>后台首页</span>
                      </a>
                  </li>
                  
                  <li class="sub-menu nav1">
                      <a href="javascript:;" class="">
                          <i class="icon-book"></i>
                          <span>网站设置</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li class="nav1-1"><a class="" href="sitebase.asp">基本信息管理</a></li>
                          <li class="nav1-2"><a class="" href="sitemanager.asp">管理员管理</a></li>
                          <li class="nav1-3"><a class="" href="sitespase.asp">空间使用信息</a></li>
                          <!-- <li class="nav1-4"><a class="" href="siteinfo.asp">服务器情况</a></li>-->
                          <li class="nav1-4"><a class="" href="tdk_list.asp">网站优化设置</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu nav2">
                      <a href="javascript:;" class="">
                          <i class="icon-cogs"></i>
                          <span>关于公司</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li class="nav2-1"><a class="" href="single.asp?nav=1">二手房介绍</a></li>
            <!---->              <li class="nav2-2"><a class="" href="single.asp?nav=2">租赁服务</a></li>
                                         <!-- <li class="nav2-3"><a class="" href="single.asp?nav=9">海外地产中心</a></li><!----class_links.asp---->
                      </ul>
                  </li>
                   <li class="sub-menu nav3">
                      <a href="javascript:;" class="">
                          <i class="icon-tasks"></i>
                          <span>项目介绍</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li class="nav3-1"><a class="" href="Pro_List.Asp">房源列表</a></li>
                          <li class="nav3-2"><a class="" href="Pro_Add.Asp">发布房源</a></li>
                          <li class="nav3-3"><a class="" href="Pro_Class.Asp">地域分类</a></li>
                          <li class="nav3-7"><a class="" href="class_td.asp">投资热区</a></li>
                          <li class="nav3-8"><a class="" href="class_kfs.asp">物业类型</a></li>
                          <li class="nav3-4"><a class="" href="class_lx.asp">房源类型</a></li>
                          <li class="nav3-5"><a class="" href="class_lb.asp">房源类别</a></li>
                          <li class="nav3-6"><a class="" href="class_fj.asp">房价</a></li>
                          

                      </ul>
                  </li>
                                     <li class="sub-menu nav7">
                                        <a href="javascript:;" class="">
                                            <i class="icon-tasks"></i>
                                            <span>投资热区</span>
                                            <span class="arrow"></span>
                                        </a>
                                        <ul class="sub">
                                <li class="nav7-20"><a class="" href="Prod_list.Asp?Prod_Type=20">伦敦热区列表</a></li>
                                <li class="nav7-20a"><a class="" href="Prod_add.asp?Prod_Type=20">增添伦敦热区</a></li>
                               <li class="nav7-21"><a class="" href="Prod_list.Asp?Prod_Type=21">悉尼热区列表</a></li>
                                <li class="nav7-21a"><a class="" href="Prod_add.asp?Prod_Type=21">增添悉尼热区</a></li>
                                <li class="nav7-22"><a class="" href="Prod_list.Asp?Prod_Type=22">墨尔本热区列表</a></li>
                                <li class="nav7-22a"><a class="" href="Prod_add.asp?Prod_Type=22">增添墨尔本热区</a></li>
                              <!-- <li class="nav7-23"><a class="" href="Prod_list.Asp?Prod_Type=23">国外代表项目列表</a></li>
                                <li class="nav7-23a"><a class="" href="Prod_add.asp?Prod_Type=23">增添国外代表项目</a></li>-->
                                        </ul>
                                    </li>
  <li class="sub-menu nav4">
                      <a href="javascript:;" class="">
                          <i class="icon-tasks"></i>
                          <span>新闻中心</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                     <!--<li class="nav4-5"><a class="" href="class_prod.asp">新闻类别管理</a></li>-->

<li class="nav4-27"><a class="" href="Prod_list.Asp?Prod_Type=27">展会活动列表</a></li>
                          <li class="nav4-27a"><a class="" href="Prod_add.asp?Prod_Type=27">增添展会活动</a></li>
                          <li class="nav4-26"><a class="" href="Prod_list.Asp?Prod_Type=26">行业动态列表</a></li>
                          <li class="nav4-26a"><a class="" href="Prod_add.asp?Prod_Type=26">增添行业动态</a></li>
<li class="nav4-25"><a class="" href="Prod_list.Asp?Prod_Type=25">置业指南列表</a></li>
                          <li class="nav4-25a"><a class="" href="Prod_add.asp?Prod_Type=25">增添置业指南</a></li>



                          <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [class_prod] where cid<>8 order by oid desc,cid desc",conn,1,1
if rs.bof and rs.eof then 
else 

i=0
do while not rs.eof

%>
<!--<li class="nav4-<%=rs("cid")%>"><a class="" href="Prod_list.Asp?Prod_Type=<%=rs("cid")%>"><%=rs("cname")%>列表</a></li>
                          <li class="nav4-<%=rs("cid")%>a"><a class="" href="Prod_add.asp?Prod_Type=<%=rs("cid")%>">增添<%=rs("cname")%></a></li>-->

<%
rs.movenext
	i=i+1
    loop
end if
rs.close
	set rs=nothing%>
                      </ul>
                  </li>
  <li class="sub-menu nav5">
                      <a href="javascript:;" class="">
                          <i class="icon-tasks"></i>
                          <span>市场报告</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                      <li class="nav5-18"><a class="" href="Prod_list.Asp?Prod_Type=18">澳洲市场报告列表</a></li>
                          <li class="nav5-18a"><a class="" href="Prod_add.asp?Prod_Type=18">增添澳洲市场报告</a></li>
<li class="nav5-16"><a class="" href="Prod_list.Asp?Prod_Type=16">英国市场报告列表</a></li>
                          <li class="nav5-16a"><a class="" href="Prod_add.asp?Prod_Type=16">增添英国市场报告</a></li>
<li class="nav5-17"><a class="" href="Prod_list.Asp?Prod_Type=17">全球市场报告列表</a></li>
                          <li class="nav5-17a"><a class="" href="Prod_add.asp?Prod_Type=17">增添全球市场报告</a></li>
                      </ul>
                  </li>

                    <li class="sub-menu nav6">
                                        <a href="javascript:;" class="">
                                            <i class="icon-tasks"></i>
                                            <span>用户及留言</span>
                                            <span class="arrow"></span>
                                        </a>
                                        <ul class="sub">
                                           <!-- <li class="nav6-1"><a class="" href="Prod_list.Asp?Prod_Type=8">销售团队</a></li>
                                            <li class="nav6-2"><a class="" href="Prod_add.asp?Prod_Type=8">发布销售团队</a></li>-->
                                            <li class="nav6-2"><a class="" href="member.asp">查看注册用户</a></li>
                                            <li class="nav6-3"><a class="" href="lyb.asp">查看用户留言</a></li>
                                             <li class="nav6-4"><a class="" href="lyb1.asp">页底报名表</a></li>
                                             <li class="nav6-5"><a class="" href="lyb2.asp">投资意向报名表</a></li>
                                        </ul>
                                    </li>
<!--  -->                <li class="sub-menu nav8">
                      <a href="javascript:;" class="">
                          <i class="icon-tasks"></i>
                          <span>广告链接</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li class="nav8-1"><a class="" href="links.asp?c=1">首页大广告管理</a></li>
                          <!--<li class="nav8-2"><a class="" href="links.asp?c=2">首页小广告管理</a></li>
                          <li class="nav8-3"><a class="" href="links.asp?c=3">项目页广告管理</a></li>
                          <li class="nav8-4"><a class="" href="links.asp?c=4">友情链接管理</a></li>-->
                      </ul>
                  </li>
                  <li>
                      <a class="" href="LogInout.Asp">
                          <i class="icon-user"></i>
                          <span>安全退出</span>
                      </a>
                  </li>
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>