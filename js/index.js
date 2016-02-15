;/**
 * Created by Administrator on 2016/1/16.
 */
$.fn.extend({mousewheel:function(upfn,downfn){
    this.each(function(index,obj){
        var obj=obj||document;
        if(obj.addEventListener){
            obj.addEventListener("mousewheel",fn,false);
            obj.addEventListener("DOMMouseScroll",fn,false);
        }else{
            obj.attachEvent("onmousewheel",fn);
        }
        function fn(e){
            var ev=e||window.event;
            var val=ev.wheelDelta||ev.detail;
            if(navigator.platform=="MacInter"){
                if(val==1||val==-3){
                    upfn.call(obj);
                }else if(val==-1||val==3){
                    downfn.call(obj);
                }
            }else if(navigator.platform=="Win32"){
                if(val==120||val==-3){
                    upfn.call(obj);
                }else if(val==-120||val==3){
                    downfn.call(obj);
                }
            }else{
                alert("请购买正版电脑!!!!");
            }
            e.preventDefault();
        }
    });
}});

$(function(){
    //------------导航
    $('.banner .sort').click(function(){
        var nav=$(this).next('.slidenav');
        var lefts=nav.position().left;
        if(lefts==0){
            nav.animate({left:"-70%"});
        }else{
            nav.animate({left:"0%"});
        }
    })
    $('.slidenav p').click(function(){
        $('.slidenav').animate({left:"-70%"});
    })


    //---------------图片

    $('.card .row div').click(function(){
        $('.card .row a').css('border','none');
        $(this).find('a').css('border','1px solid #999');
        var cat=$(this).attr('data-filter');
        $('.item-row div[data-cat]').css('display','none');
        $('.item-row div[data-cat*='+cat+']').css('display','block');
    });
    $('.alll').click(function(){
        $('.item-row div[data-cat]').css('display','block');
    });

    var itemList=$('.item-row>div[class*=col]');
    itemList.hover(function(){
        $(this).find('.more').css({transform:'scale(1,1)'});
    },function(){
        $(this).find('.more').css({transform:'scale(0)'});
    })
    itemList.click(function(){
        var clientW=$(window).width();
        var clientH=$(window).height();
        var aa=$(this).find('img').attr('src');
        $('.imgbox').css({
            display:'block',
            width:clientW,height:clientH
        });
        $('.imgda').attr('src',aa);
    });
    $('.imgclose').click(function(){
        $('.imgbox').css({display:'none'});
    });
    $('.imgda').mousewheel(function(){
        $(this).css('width',$(this).width()+10);
        $(this).css('height',$(this).height()+10);
    },function(){
        $(this).css('width',$(this).width()-10);
        $(this).css('height',$(this).height()-10);
    })

    // -----------------------游戏----
    var game=$('.gamebox li');
    game.hover(function(){
        game.css({width:'12.5%'});
        $(this).css({width:'50%'});
    },function(){
        game.css({width:'20%'});
    })

    //----------------------侧滑网站
    $('.slideitem-s .simg').hover(function(){
        $(this).find('.pagemask').css({
            transform:'rotateX(90deg)'
        })
    },function(){
        $(this).find('.pagemask').css({
            transform:'rotateX(0deg)',
            //opcity:0
        })
    })
    //$('.slidebox-l')
    //var index= 0,index1=0;
    //var length=$('.slideitem-l').length;
    //var lbox=$('.slidebox-l');
    //var sbox=$('.slidebox-s');
    //var h1=$('.slideitem-l').height();
    //var h2=$('.slideitem-s').height();
    //$('.slide-left').hover(function(){
    //    $('.slide-btn').css('display','block');
    //},function(){
    //    $('.slide-btn').css('display','none');
    //})
    //
    //var slide=function(){
    //    index++;index1++;
    //    if ( index== length) {
    //        index=0;index1=0;
    //    }
    //    if(index1>=4){
    //        sbox.animate({'marginTop':-(index-3)*h2+'px'});
    //    }else{
    //        sbox.animate({'marginTop':'0px'});
    //    }
    //    lbox.animate({'marginTop':-index*h1+'px'});
    //    $('.slideitem-s').css({borderLeft:'10px solid #fff'});
    //    $('.slideitem-s').eq(index).css('border-left','10px solid red');
    //}
    //var timerId=setInterval(slide,2000);
    //
    //$('.shang').click(function(){
    //    clearInterval(timerId);
    //    index--;index1--;
    //    if ( index < 0) {
    //        index=length-1;index1=length-1;
    //    }
    //    if(index1>=4){
    //        sbox.css({'marginTop':-(index-3)*h2+'px'});
    //    }else{
    //        sbox.css({'marginTop':'0px'});
    //    }
    //    lbox.css({'marginTop':-index*h1+'px'});
    //    $('.slideitem-s').css({borderLeft:'10px solid #fff'});
    //    $('.slideitem-s').eq(index).css('border-left','10px solid red');
    //});
    //$('.xia').click(function(){
    //    clearInterval(timerId);
    //    index1++;index++;
    //    if ( index== length) {
    //        index=0;index1=0;
    //    }
    //    if(index1>=4){
    //        sbox.css({'marginTop':-(index-3)*h2+'px'});
    //    }else{
    //        sbox.css({'marginTop':'0px'});
    //    }
    //    lbox.css({'marginTop':-index*h1+'px'});
    //    $('.slideitem-s').css({borderLeft:'10px solid #fff'});
    //    $('.slideitem-s').eq(index).css('border-left','10px solid red');
    //});

    //技能
    //$('.skill-left').click(function(){
    //    var w=$('.skill-col').width();
    //    var kleft=parseInt($('.skill-ul').css('marginLeft'));
    //    if ( kleft== 0) {
    //        return;
    //    }
    //    $('.skill-ul').css({'marginLeft':kleft+w});
    //    console.log(w,kleft)
    //});
    //$('.skill-right').click(function(){
    //    var w=$('.skill-col').width();
    //    var w2=$('.skill-ul').width();
    //    var kleft=parseInt($('.skill-ul').css('marginLeft'));
    //    if ( kleft <=-w2+w) {
    //        return;
    //    }
    //    $('.skill-ul').css({'marginLeft':kleft-w});
    //    console.log(w,kleft,w2)
    //
    //});
    $('.gotop').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:0},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    $(window).scroll(function(){
        if ($(window).scrollTop()>900) {
            $('.gotop').show();
        }else{
            $('.gotop').hide();
        }
        console.log($(window).scrollTop())
    });
})

