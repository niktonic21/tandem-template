// NOTE: this is a workaround for ui kitten error - https://github.com/akveo/react-native-ui-kitten/issues/996#issuecomment-616115469
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// eslint-disable-next-line func-names
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            alias: {
                'react-native': 'react-native-web',
                'react-native-linear-gradient': 'react-native-web-linear-gradient'
            },
            babel: {
                dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
            }
        },
        argv
    );
    return config;
};
