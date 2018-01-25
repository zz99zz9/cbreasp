            <div class="login"><%if request.cookies("username")="" then%>
              <div class="tit">注册成为VIP下载报告</div><a class="cbtn" href="/Login.html">登录</a><a class="cbtn" href="/Register.html">注册</a>
              <%else%>
              <div class="tit">当前登录用户 <%=request.cookies("username")%></div><a class="cbtn" href="/quit.html">安全退出</a>
              <%end if%>
            </div>
            <div class="contact">
              <div class="tit">了解更多</div><a class="cbtn1" href='javascript:openPform(1);' >联系我们</a>
            </div>
            <div class="aboutmore">
              <div class="tit">更多资讯</div><a class="cbtn" href='/news/27/1.html'>查看更多</a>
            </div>