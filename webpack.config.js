
module.exports = {
    entry: "./app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //CSS module loader
            { test: /\.css$/, loader: "style!css" },
            // Less module loader
            { test: /\.less$/, loaders: ['style', 'css', 'less']},
            //File loader for the images in the directory ./dist/img/<nom-fichier>.png
            { test: /\.png$/, loader: "file-loader?name=img/[name].png"}
        ]
    }
};
