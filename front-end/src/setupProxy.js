const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use('/login',createProxyMiddleware({
                        target: 'http://localhost:5000'
                    })
    );
    app.use('/join',createProxyMiddleware({
        target: 'http://localhost:5000'
    })
);
};