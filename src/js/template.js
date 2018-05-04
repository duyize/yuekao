define(["jquery","handlebars"],function($,Handlebars){
    return function render(id,data,content){
        var source = $(id).html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $(content).html(html);
    }
});