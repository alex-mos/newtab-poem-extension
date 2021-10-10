module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  pages: {
    newtab: {
      // entry for the page
      entry: "src/newtab.js",
      // the source template
      template: "public/newtab.html",
      // output as dist/index.html
      filename: "newtab.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Newtab Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "newtab"],
    },
  },
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.txt$/i,
  //         use: 'raw-loader',
  //       },
  //     ],
  //   },
  // }
};
