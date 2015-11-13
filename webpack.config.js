module.exports =
{ entry :
    { app : __dirname + "/app.js"}


, output :
    { path     : __dirname + "/build"
    , filename : "[name].js"
     }

, resolve :
    { moduleDirectories : ["node_modules"]}

, module :
    { loaders : [
        { test   : /\.css$/
        , loader : "style-loader!css-loader!autoprefixer-loader!stylus-loader"
    }
        ]
    }
}
