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
       /*proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5dc161b79c2ccc4a3130ff05/echarts',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }*/
    }
}
