    <div class="bform hidden-xs">
      <div class="container containerb">
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="tel">全国热线：4008209889 <span class="ftit">成为会员：</span></div>
          </div>
          <div class="col-md-8 col-sm-8"><span class="lab">姓名</span>
            <input class="cbreform"  type="text" id='bname' value='<%=request.cookies("username")%>'/><span class="lab">手机号</span>
            <input class="ftel cbreform"  type="text" id='bmobile' value='<%=request.cookies("usermobile")%>'/><span class="lab">投资意向国家</span>
            <input class="cbreform" value="" type="text" id='bcountry'/><span class="lab">所在城市</span>
            <input class="cbreform" value="" type="text" id='bcity'/><span class="fbtn tra" id='bbtn'>提交</span>
          </div>
        </div><i class="bclose tra fa fa-close fa-stack-1x"> </i>
      </div>
    </div>
        <div class='openbform b_h hiddex-xs'>成为会员</div>