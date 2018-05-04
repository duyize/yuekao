require.config({
    paths : {
        "handlebars" : "./handlebars-v4.0.11",
        "swiper" : "./swiper",
        "iscroll" : "./iscroll",
        "jquery"  : "./jquery",
        "tpl" : './template'
    }
});

require(['handlebars','swiper','iscroll','jquery','tpl'],function(Handlebars,Swiper,Iscroll,$,tpl){
    $.ajax({
        url : '/index',
        type : 'get',
        dataType : 'json',
        success : function(data){
            var nav_data = data.title;
            console.log(nav_data);
            
            var lei1 = data.bed;  
            console.log(lei1);
            
            var shop1 = data.bed.neirong;

            tpl('#nav',{arr : nav_data},'.nav_ul');
            tpl('#lei1',{data : lei1},'.shop_le1i');
            tpl('#shop1',{data : shop1},'.shop');


        }
    });

    // new Iscroll('.nav',function(){
    //     scrollY : false,
    //     scrollX : true,        
    //     click : true
    // });
});