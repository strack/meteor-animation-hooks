Package.describe({
    summary: "Helpers for animation hooks, including SVG",
    version: "0.1.0",
    git: ""
});

Package.onUse(function (api) {
    
    api.versionsFrom('METEOR@0.9.0.1');
    api.use('underscore', 'client');
    api.use('templating', 'client');
    api.use('jquery','client');
    api.addFiles('svgClass.js', 'client');
    api.addFiles('strack:animation-hooks.html', 'client');
    api.addFiles('strack:animation-hooks.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('strack:animation-hooks', 'client');
    api.addFiles('strack:animation-hooks-tests.js', 'client');
});