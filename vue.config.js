module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        port: 8080,
        proxy: 'https://urun-takip.firebaseio.com/'
    }
}