    <div class="pform ">
<h2>报名抢房</h2>
            <input class="cbreint"  type="text" id='pname' value='<%=request.cookies("username")%>' placeholder="请输入姓名"/>
             <div class="err"></div>
            <input class="ftel cbreint"  type="text" id='pmobile' value='<%=request.cookies("usermobile")%>' placeholder="请输入手机号"/>
             <div class="err"></div>
            <input class="cbreint" value="" type="text" id='pmail' placeholder="请输入邮箱地址"/>
             <div class="err"></div>
            <span class="pbtn tra" id='pbtn'>提交报名信息</span>
            <input type="hidden" class="pfid" id="pfid" value="<%=id%>">

<i class="pclose tra fa fa-close fa-stack-1x"></i>
    </div>

<div class="mask"></div>