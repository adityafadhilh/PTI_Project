// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     if (process.env.NODE_ENV === "development") {
//         app.use(
//             '/search',
//             createProxyMiddleware({
//                 target: 'https://itunes.apple.com',
//                 changeOrigin: true,
//             })
//         );

//         app.use(
//             '/lookup',
//             createProxyMiddleware({
//                 target: 'https://itunes.apple.com',
//                 changeOrigin: true,
//             })
//         );
//     }
// };