const path = require('path')

module.exports = {
    // Source files
    src: path.resolve(__dirname, '../src'),

    // Production build files
    dist: path.resolve(__dirname, '../dist'),

    // Web resources
    web: path.resolve(__dirname, '../web'),

    // Build web
    build: path.resolve(__dirname, '../build'),

    // Static files that get copied to build folder
    public: path.resolve(__dirname, '../public'),
}
