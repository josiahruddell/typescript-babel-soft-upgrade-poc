module.exports = {
    entry: './dist/ts-src/index.jsx',
    output: {
        filename: './dist/bundle.js',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        loaders: [{ 
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] } 
        }],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.jsx?$/, loader: 'source-map-loader' }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};