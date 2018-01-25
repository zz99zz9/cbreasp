$(".map i").click(function(){
    var tab = $(this).parent(".map");
    $(this).addClass('on').siblings(tab.find("i")).removeClass('on');
    var key
    key=this.title;

      $.post("/api/map.asp",{key:key},
             function(data,status){
                 if(status=="success"){
                     data=data.replace(/\"/g, "");
                    data=data.replace(/\'/g, "\"");
                    data=data.replace(/\\/g, "\/");
                    console.log(data)
                    var x=data;
                    var x = JSON.parse(data);
                    
                    $(".col-md-5 .info .tit").html(x.tit);
                    $(".col-md-5 .info .txt").html(x.txt);
                    $(".col-md-5 .info .cbtn").attr("href",x.url);
                    $(".col-md-5 .info").attr("style","background-image:url('/"+x.img+"')");
                    if(x.state=="err"){
                        list=x.msg
                    }else{
                        list="";
                        for (var i=0;i<x.list.length;i++) {
                        list=list+'<a class="b_c" href="'+x.list[i].url+'" title="'+x.list[i].tit+'">';
                        list=list+'<div class="pic"><img src="'+x.list[i].img+'"/></div>';
                        list=list+'<div class="hinfo">';
                        list=list+'<div class="tit ellipsis">'+x.list[i].tit+'</div>';
                        list=list+'<div class="country">'+x.list[i].cc+'</div>';
                        list=list+'<div class="txt ellipsis"> '+x.list[i].jg+'</div></div></a>';

                        }
                    }
                   $(".col-md-5 .hlist").html(list);
                 }
             });

    
})
