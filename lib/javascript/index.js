import Sharetastic from './sharetastic'

(function(window, $) {

    $.fn.sharetastic = function (options) {
        return this.each(function() {
            const element = $(this)
            const isInitialized = element.hasClass('sharetastic--initialized')
            if(!isInitialized) {
                new Sharetastic(element[0], options).sort()
            }
        })
    }

})(window, jQuery);