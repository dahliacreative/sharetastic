// --------------------------------------------------------------------------
//      _                    _            _   _
//     | |                  | |          | | (_)
//  ___| |__   __ _ _ __ ___| |_ __ _ ___| |_ _  ___
// / __| '_ \ / _` | '__/ _ \ __/ _` / __| __| |/ __|
// \__ \ | | | (_| | | |  __/ || (_| \__ \ |_| | (__
// |___/_| |_|\__,_|_|  \___|\__\__,_|___/\__|_|\___|
//
// --------------------------------------------------------------------------
//  Version: 1.3.6
//   Author: Simon Sturgess
//  Website: dahliacreative.github.io/sharetastic
//     Repo: github.com/dahliacreative/sharetastic
//   Issues: github.com/dahliacreative/sharetastic/issues
// --------------------------------------------------------------------------

(function(window, $) {

  $.fn.sharetastic = function(options) {
    var spriteOption = options && options.hasOwnProperty('sprite'),
        sprite = spriteOption ? options.sprite : 'sharetastic.svg',
        spriteExists = $('.sharetastic__svg').length > 0,
        storedSprite = localStorage.getItem(document.domain + '-sharetastic-svg');

    if(storedSprite) {
      $('body').prepend(storedSprite);
    } else if(this.length > 0 && !spriteExists) {
      $.ajax({
        url: sprite,
        success: function(data) {
          var svg = data.documentElement;
          $('body').prepend(svg);
          localStorage.setItem(document.domain + '-sharetastic-svg', new XMLSerializer().serializeToString($(svg)[0]));
        },
        error: function(e) {
          console.log('SHARETASTIC ERROR\nStatus: ' + e.status + '\n' + sprite + ' - ' + e.statusText);
        }
      });
    }


    return this.each(function() {
      var el = $(this),
          initialized = el.hasClass('sharetastic--initialized');
      if(!initialized) {
        new Sharetastic(el, options).sort();
      }
    });
  };


  // --------------------------------------------------------------------------
  // Sharetastic Constructor
  // --------------------------------------------------------------------------
   var Sharetastic = function(el, options) {

    // Get page Details
    this.page = {
      url: this.getMetaContent('og:url'),
      title: this.getMetaContent('og:title'),
      description: this.getMetaContent('og:description'),
      image: this.getMetaContent('og:image')
    };

    // Initialise the element
    this.el = el;
    this.el.addClass('sharetastic sharetastic--initialized');

    var defaults = {
      sprite: 'sharetastic.svg',
      popup: true,
      services: {
        facebook: {
          order: 0,
          name: 'Facebook',
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-facebook'
          }
        },
        instagram: false,
        twitter: {
          order: 2,
          name: 'Twitter',
          href: 'http://twitter.com/home?status=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.description) + ' - ' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-twitter'
          }
        },
        pinterest: {
          order: 3,
          name: 'Pinterest',
          href: 'http://pinterest.com/pin/create/link/?url=' + encodeURIComponent(this.page.url) + '&description=' + encodeURIComponent(this.page.title) + ' - ' + encodeURIComponent(this.page.description) + '&media=' + encodeURIComponent(this.page.image),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-pinterest'
          }
        },
        linkedin: {
          order: 4,
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(this.page.url) + '&title=' + encodeURIComponent(this.page.title) + '&summary=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-linkedin'
          }
        },
        googleplus: {
          order: 5,
          name: 'Google +',
          href: 'https://plus.google.com/share?url=' + encodeURIComponent(this.page.url),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-googleplus'
          }
        },
        flickr: false,
        tumblr: {
          order: 7,
          name: 'Tumblr',
          href: 'http://www.tumblr.com/share/link?url=' + encodeURIComponent(this.page.url) + '&name=' + encodeURIComponent(this.page.title) + '&description=' + encodeURIComponent(this.page.description),
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-tumblr'
          }
        },
        email: {
          order: 8,
          name: 'Email',
          href: 'mailto:?Body=' + this.page.title + '%0A' + this.page.description + '%0A' + this.page.url,
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-email'
          }
        },
        print: {
          order: 9,
          name: 'Print',
          href: 'window.print()',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-print'
          }
        }
      }
    };

    if(options && options.hasOwnProperty('services')) {
      if(options.services.instagram) {
        defaults.services.instagram = {
          order: 2,
          name: 'Instagram',
          href: 'https://www.instagram.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-instagram'
          }
        };
      }
      if(options.services.flickr) {
        defaults.services.flickr = {
          order: 6,
          name: 'Flickr',
          href: 'https://www.flickr.com/',
          icon: {
            width: 32,
            height: 32,
            id: 'sharetastic-flickr'
          }
        };
      }
    }

    // Extend Options
    this.options = $.extend(true, defaults, options);

  };


  // --------------------------------------------------------------------------
  // Build the DOM
  // --------------------------------------------------------------------------
  Sharetastic.prototype.build = function() {

    for(var i = 0; i < this.serviceOrder.length; i ++) {
        var key = this.serviceOrder[i],
            link = $('<a/>'),
            service = this.options.services[key],
            self = this,
            action = key === 'print' ? 'onclick' : 'href';
        link
          .addClass('sharetastic__button sharetastic__button--'+key)
          .attr(action, service.href)
          .attr('target', '_blank')
          .html('<svg width="' + service.icon.width + '" height="' + service.icon.height + '" class="sharetastic__icon"><use xlink:href="#' + service.icon.id + '"/></svg>' + service.name);
        this.el.append(link);
        if(key !== 'email' && key !== 'print' && this.options.popup) {
          link.on('click', function() {
            self.popup($(this).attr('href'), 500, 300);
            return false;
          });
        }
    }
  };

  // --------------------------------------------------------------------------
  // Get Meta Content
  // --------------------------------------------------------------------------
  Sharetastic.prototype.getMetaContent = function(propName) {
    var metas = document.getElementsByTagName('meta');
    for(var i = 0; i < metas.length; i++) {
      var property = metas[i].getAttribute("property");
      if(property == propName) {
        return metas[i].getAttribute("content");
      }
    }
    return "";
  };


  // --------------------------------------------------------------------------
  // Pop up Window
  // --------------------------------------------------------------------------
  Sharetastic.prototype.popup = function(url, width, height) {
    var left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);
    window.open(url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
  };

  // --------------------------------------------------------------------------
  // Sort Services
  // --------------------------------------------------------------------------
  Sharetastic.prototype.sort = function() {
    var serviceCount = Object.keys(this.options.services).length;
    this.serviceOrder = [];

    for(var i = 0; i < serviceCount; i ++) {
        for(var key in this.options.services) {
            var service = this.options.services[key];
            if(service.order === i) {
                this.serviceOrder.push(key);
            }
        }
    }
    this.build();
  };

})(window, jQuery);
