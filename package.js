Package.describe({
    name: "appmill:animation-hooks",
    summary: "Helpers for animation hooks, including SVG",
    version: "0.1.1",
    git: "https://github.com/strack/meteor-animation-hooks.git"
});

Package.onUse(function (api) {
    
    api.versionsFrom('METEOR@0.9.0.1');
    api.use('underscore', 'client');
    api.use('templating', 'client');
    api.use('jquery','client');
    api.addFiles('svgClass.js', 'client');
    api.addFiles('animation-hooks.html', 'client');
    api.addFiles('animation-hooks.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('appmill:animation-hooks', 'client');
    api.addFiles('animation-hooks-tests.js', 'client');
});