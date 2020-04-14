const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    webpackDevMiddleware(config) {
        config.watchOptions = {
            ignored: [
                /\.git\//,
                /\.next\//,
                /node_modules/
            ]
        };
        return config;
    },
    webpack: (config, options) => {
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
    target: "serverless"
};
