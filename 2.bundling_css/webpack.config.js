/*
this config file is based on nodejs, the modularization method is Commonjs
*/

// resolve is used to concatenate the absolute path
const {resolve} = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    // loader: used to preprocess the file other than js or json
    module: {
        rules: [
            {
                // specify the files to process
                test: /\.css$/,
                // specify the loaders to use
                use: [
                    // Execute from the bottom to the top:
                    // inside the head tag, create style tag based on the specification in built.js
                    'style-loader',
                    // turn css into a Commonjs module and included it in built.js
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // turn less file into css file
                    'less-loader'
                ]
            }
        ]
    },
    // plugins
    plugins: [

    ],
    mode: 'development'
}