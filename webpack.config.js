const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        filename: 'app-bundle.js',
        path: path.join(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader'
            }
      ]
    },
    devtool: 'source-map'
};