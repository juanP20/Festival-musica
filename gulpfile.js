const  {src, dest} = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css (Done){
    src("src/scss/app.scss") //  identifica la carpeta 
    .pipe(sass()) //compilarlo en las despendecias esta el watch
    .pipe(dest("build/css")) //donde se guardara 

  Done();
}

exports.css = css // lado izquierdo es de gulp y lado derecho es la funcion ..