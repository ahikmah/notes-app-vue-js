module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'dist/' : './',
  outputDir: '../dist',
  indexPath: '../index.html',
  pages: {
    index: {
      // entry for the page
      entry: './src/main.js',
      title: 'Aloka Notes App',
    },
  },
  devServer: {
    public: 'localhost:8081',
    host: 'localhost',
    port:8081
  }
}