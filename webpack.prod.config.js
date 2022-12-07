const path = require('path');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './prod'),
    },
};
