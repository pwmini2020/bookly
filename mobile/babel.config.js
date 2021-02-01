module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [["module:react-native-dotenv"],
            ["transform-inline-environment-variables", {
                "include": [
                    "NODE_ENV",
                    "APP_ENV"
                ]
            }]
        ],
    };
};
