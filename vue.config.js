// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("babel-loader")
      .loader("babel-loader")
      .tap(options => {
        // modify the options...
        options = {
          ...options,
          presets: ["@vue/cli-plugin-babel/preset", "@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-optional-chaining"]
        };
        return options;
      });
  }
};
