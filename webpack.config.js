const webpack = require ('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: `${__dirname}/public`,
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // Webpack 4.0 does not accept empty anymore
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    mode: 'development'
}