var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var data = require('./src/mock/data.json');

gulp.task('server',function(){
    gulp.src('src')
    .pipe(server({
        open : true,
        port : 8808,
        middleware : function(req,res,next){
            if(req.url==='/index'){
                res.end(JSON.stringify(data));
            }else{
                next();
            }
        }
    }))
});

gulp.task('default',['server'],function(){

});