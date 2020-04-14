module.exports = {
    devServer: {
        proxy: {
            '/api/v2':{
                target: 'http://localhost:3000'
            }
        }
    }
};
