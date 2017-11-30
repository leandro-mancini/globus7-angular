module.exports = {
    staticFileGlobs: [
        'wwwroot/**.html',
        'wwwroot/**.js',
        'wwwroot/assets/*'
    ],
    root: 'wwwroot',
    stripPrefix: 'wwwroot/',
    navigateFallback: '/index.html',
    maximumFileSizeToCacheInBytes: 20971520
};