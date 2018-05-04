require.config({
    paths : {
        "handlebars" : "./handlebars-v4.0.11",
        "jquery"  : "./jquery",
        "tpl" : './template'
    }
});

require(['handlebars','jquery','tpl'],function(Handlebars,$,tpl){
    $.ajax({
        url : '/index',
        type : 'get',
        dataType : 'json',
        success : function(data){
            var box_data = data.bed.neirong;
            console.log(box_data)
            tpl('#box_',{data : box_data},'.box');


        }
    });
});