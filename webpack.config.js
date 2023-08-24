const path = require( 'path' );


module.exports = {

    entry: {
        'main': './src/main.js'
    },

    output: {
        path: path.join( __dirname, 'public' ),

        filename: 'js/[name].bundle.js'
    },

    devtool: 'source-map',

}