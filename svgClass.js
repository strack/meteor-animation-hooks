/* addition of SVG add/removeClass functions, based on Shaw's gist: https://gist.github.com/shshaw/8527276
    MIT License, 2014
*/

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($){
    var addClass = $.fn.addClass;
    $.fn.addClass = function(value) {
        var orig = addClass.apply(this, arguments);

        var elem,
            i = 0,
            len = this.length;

        for (; i < len; i++ ) {
            elem = this[ i ];
            if ( elem instanceof SVGElement ) {
                var classes = $(elem).attr('class');
                if ( classes ) {
                    var index = classes.search(value);
                    if (index === -1) {
                        classes = classes + " " + value;
                        $(elem).attr('class', classes);
                    }
                } else {
                    $(elem).attr('class', value);
                }
            }
        }
        return orig;
    };

    var removeClass = $.fn.removeClass;
    $.fn.removeClass = function(value) {
        var orig = removeClass.apply(this, arguments);

        var elem,
            i = 0,
            len = this.length;

        for (; i < len; i++ ) {
            elem = this[ i ];
            if ( elem instanceof SVGElement ) {
                var classes = $(elem).attr('class');
                if ( classes ) {
                    var index = classes.search(value);
                    if (index !== -1) {
                        classes = classes.substring(0, index) + classes.substring((index + value.length), classes.length);
                        $(elem).attr('class', classes);
                    }
                }
            }
        }
        return orig;
    };
}));