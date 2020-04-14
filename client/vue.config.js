const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api/v2':{
                target: 'http://localhost:3000'
            }
        }
    }
};
