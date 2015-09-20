/* 
By including everything in the (function() {}) self-enclosed JavaScript pattern, 
we’re making sure that all the variables in our plugin will stay safely outside 
of the global namespace.
 */
(function($) {
    $.fn.helloWorld = function(options) {
        
        // Establish our default settings
        var settings = $.extend({
            text         : 'Hello, World!!!',
            color        : null,
            fontStyle    : null
        }, options);
        
            return this.each(function() {
            $(this).text(settings.text);
        });
    }
}(jQuery));
