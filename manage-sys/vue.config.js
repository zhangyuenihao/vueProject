module.exports = {
    lintOnSave:false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'network':'@/network'
            }
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    devServer: {
       proxy: {
            '/api': {
                target: 'http://yapi.demo.qunar.com/mock/29046/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
